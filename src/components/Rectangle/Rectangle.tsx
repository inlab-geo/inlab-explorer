"use client"
import React, { useEffect, useRef, useState, useContext, useLayoutEffect } from 'react';
import * as d3 from 'd3';
import { HierarchyNode, HierarchyPointNode } from 'd3';
import '../../../app/style.css'
import { TreeNode, TreeProps, onClick } from './treeComponent';


// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');



function collapse(d: any) {
  if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
  }
}


function measureTextWidth(text : string, font = '14px Arial') {
  // We'll return a default value of 0 for server-side rendering
  if (typeof document === 'undefined') {
    return 0;
  }

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  if (context) {
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  return 0;  // fallback in case getting the context fails
}

interface selected {
  selectedTree: any; 
}



const TreeComponent: React.FC<selected> = ({selectedTree}) => {

  const tree: TreeProps = {
    data: null
  }
  const d3Container = useRef<SVGSVGElement | null>(null);

  const [treeData, setTreeData] = useState<TreeNode | null>(null);

  const [windowSize, setWindowSize] = useState<{width: number, height: number}>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080 
});





  useEffect(() => {
    console.log(selectedTree)
    if (selectedTree === 'CoFI Methods') {
      fetch('https://jsonofthetree.s3.ap-southeast-2.amazonaws.com/method_relation.json')
      .then((response) => response.json())
      .then((data) => setTreeData(data))
      .catch((error) => console.error(error));
    }
    if (selectedTree === "Espresso Problems") {
      fetch('https://jsonofthetree.s3.ap-southeast-2.amazonaws.com/app_relation.json')
      .then((response) => response.json())
      .then((data) => setTreeData(data))
      .catch((error) => console.error(error));
    }

    console.log(treeData)
  }, [selectedTree]);






  

  useEffect(() => {
      if (treeData && d3Container.current) {
          const svg = d3.select(d3Container.current);
          
          const margin = { top: 20, right: 120, bottom: 20, left: 120 },
              width = 960 - margin.right - margin.left,
              height = 800 - margin.top - margin.bottom;

          var i = 0, duration = 750;
          let treeRoot: any;
          var nodeSize = { width: 10, height: 50}
          var treemap = d3.tree().nodeSize([nodeSize.height,nodeSize.width])    

          // Assigns parent, children, height, depth
          console.log(treeData)
          treeRoot = d3.hierarchy(treeData, (d: any) => {
              return d.children;
          });
          treeRoot.x0 = height / 2;
          treeRoot.y0 = 0;
          treeRoot.children.forEach(collapse);
          
          const g = svg.append("g")
          var zoom = d3.zoom<SVGSVGElement, unknown>()
          .scaleExtent([0.1, 4])
          .on("zoom", (event) => {
              g.attr("transform", event.transform);
          });

        // select the svg and call the zoom behavior

          svg.call(zoom)
          svg.call(zoom.transform, d3.zoomIdentity.translate(200, 100).scale(2));


          const update = (source : any) => {
            var data = treemap(treeRoot);
            var nodes = data.descendants(),
                links = data.descendants().slice(1);
            nodes.forEach(function(d : any) {
              const textMetrics = measureTextWidth(d.data.name);
          
              if (d.data.children) {
                  d.data.children.forEach(function(x : TreeNode) {
                      x.parentLength = textMetrics;
                  });
              }
              let shift_right = d.data.parentLength ? d.data.parentLength : 0;
              d.y = d.depth * 200 + shift_right + textMetrics/2;
            });


            var node = g.selectAll<SVGGElement, HierarchyPointNode<unknown>>("g.node")
            .data(nodes, function(d: any) {
                return d.id || (d.id = ++i);
            });

            var nodeEnter = node
                .enter()
                .append("g")
                .attr("class", "node")
                .attr("transform", function(d) {
                  return "translate(" + source.y0 + "," + source.x0 + ")";
                })
                .on("click", click);


                nodeEnter.each(function(d,i){
                  for (let j = 1; j <= 4; j++) {
                    d3.select(this).selectAll('#btn-' + d.id + '-' + j).on('click', function(){
                    console.log('Button ' + j + 'in node' + d.id + ' clicked  ->');
                    // event.stopPropagation();
                      })
                    }
                  })

                nodeEnter
                  .attr("class", "node")
                  .attr("r", 1e-6)
                  .style("fill", function(d) {
                    return d.parent ? "rgb(39, 43, 77)" : "#fe6e9e";
                  });
                
                
                nodeEnter
                  .append("rect")
                  .attr("rx", function(d : any) {
                    if (d.parent) return d.children || d._children ? 3 : 6;
                    return 20;
                  })
                  .attr("ry", function(d : any) {
                    if (d.parent) return d.children || d._children ? 3 : 6;
                    return 10;
                  })
                  .attr("stroke-width", function(d) {
                    return d.parent ? 1 : 0;
                  })
                  .attr("stroke", function(d : any) {
                    return d.children || d._children
                      ? "rgb(3, 192, 220)"
                      : "rgb(38, 222, 176)";
                  })
                  .attr("stroke-dasharray", function(d : any) {
                    return d.children || d._children ? "0" : "2.2";
                  })
                  .attr("stroke-opacity", function(d : any) {
                    return d.children || d._children ? "1" : "0.6";
                  })
                  .attr("x", function(d : any){
                    let block_width = 20
                    const textMetrics = measureTextWidth(d.data.name);
                    block_width = textMetrics + 40 ;
                    return -(block_width/2)
                  }
                  )
                  .attr("y", -10)


                  .attr("width", function(d : any) {
                    let block_width = 20
                    const textMetrics = measureTextWidth(d.data.name);
                    block_width = textMetrics + 40 ;
                
                    return block_width;
                  })
                  .attr("height", 20);
                
                nodeEnter
                  .append("text")
                  .style("font-size", "14px")
                  .style("font-family", "Arial")
                  .style("fill", function(d : any) {
                    if (d.parent) {
                      return d.children || d._children ? "#ffffff" : "rgb(38, 222, 176)";
                    }
                    return "rgb(39, 43, 77)";
                  })
                  .attr("dy", ".35em")
                  .attr("x", function(d) {
                    return d.parent ? 0 : 0;
                  })
                  .attr("text-anchor", function(d) {
                    return "middle";
                  })
                  .text(function(d : any) {
                    return d.data.name;
                  });

                var nodeUpdate = nodeEnter.merge(node);

                nodeUpdate
                  .transition()
                  .duration(duration)
                  .attr("transform", function(d) {
                    return "translate(" + d.y + "," + d.x + ")";
                  });
                var nodeExit = node
                  .exit()
                  .transition()
                  .duration(duration)
                  .attr("transform", function(d) {
                    return "translate(" + source.y + "," + source.x + ")";
                  })
                  .remove();
                nodeExit.select("rect").style("opacity", 1e-6);
                nodeExit.select("rect").attr("stroke-opacity", 1e-6);
                nodeExit.select("text").style("fill-opacity", 1e-6);

                
                var link = g.selectAll<SVGPathElement, HierarchyPointNode<unknown>>("path.link").data(links, function(d : any) {
                  return d.id;
                });
                var linkEnter = link
                .enter()
                .insert("path", "g")
                .attr("class", "link")
                .attr("d", function(d) {
                  var o = { x: source.x0, y: source.y0 };
                  return diagonal(o, o);
                });
                var linkUpdate = linkEnter.merge(link);
                linkUpdate
                  .transition()
                  .duration(duration)
                  .attr("d", function(d) {
                    return diagonal(d, d.parent);
                  });
                var linkExit = link
                  .exit()
                  .transition()
                  .duration(duration)
                  .attr("d", function(d) {
                    var o = { x: source.x, y: source.y };
                    return diagonal(o, o);
                  })
                  .remove();

                nodes.forEach(function(d : any) {
                  d.x0 = d.x;
                  d.y0 = d.y;
                });

                function diagonal(s : any, d : any) {
                  let path = `M ${s.y} ${s.x}
                          C ${(s.y + d.y) / 2} ${s.x},
                            ${(s.y + d.y) / 2} ${d.x},
                            ${d.y} ${d.x}`;
                
                  return path;
                }

                function click(event:any, d : any) {
                  if (d.children) {
                    d._children = d.children;
                    d.children = null;
                  } else {
                    d.children = d._children;
                    d._children = null;
                  }
                  update(d);
                  let center = {w: windowSize.width/1.9 - 500, h: windowSize.height/5}
                  console.log(center)
                  let svgNode = svg.node();
                  let currentScale = svgNode? d3.zoomTransform(svgNode).k : 2;
                  svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate((center.w - d.y)*currentScale, (center.h - d.x)*currentScale).scale(currentScale));
                }
          }

          update(treeRoot);
          // Collapse after the second level
          treeRoot.children.forEach(collapse);
          

          // Collapse the node and all its children

          return function cleanup() {
              svg.selectAll('*').remove();
          };
      }
  }, [treeData]);

  useEffect(() => {
    function handleResize() {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    // After the initial render, the window size will be measured and stored in state
    handleResize();

    // The event listener ensures that the state is updated whenever the window is resized
    window.addEventListener('resize', handleResize);
    console.log('handleResize called');
    // cleanup this component
    return () => window.removeEventListener('resize', handleResize);
}, []); 


  return <svg
  className="d3-component"
  width={windowSize.width}
  height={windowSize.height}
  ref={d3Container}
/>;
};

export default TreeComponent;
// export {data};