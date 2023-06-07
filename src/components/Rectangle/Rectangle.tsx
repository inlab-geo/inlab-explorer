// // src/component/Rectangle/Rectangle.tsx
"use client";
// import React, { useEffect, RefObject } from 'react'
// import { select } from 'd3-selection'
// import * as d3 from 'd3';

// const Rectangle = () => {
//     const ref: RefObject<HTMLDivElement> = React.createRef()
//     useEffect(() => {
//       draw()
//     })
//     const draw = () => {
//       select(ref.current).append('p').text('Hello World')
//       select('svg').append('g').attr('transform', 'translate(250, 0)').append('rect').attr('width', 500).attr('height', 500).attr('fill', 'tomato')
//     }
//     return (
//       <div className="Rectangle" ref={ref}>
//         <svg width="500" height="500">
//           <g transform="translate(0, 0)">
//             <rect width="500" height="500" fill="green" />
//           </g>
//         </svg>
//       </div>
//     )
//   }
  
//   export default Rectangle

import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { HierarchyNode, HierarchyPointNode } from 'd3';

const treeData: TreeNode = {
  name: "CoFI - Common Framework for Inference",
    children: [
      {
        name: "A",
        children: [
          { name: "A1" },
          { name: "A2" },
          { name: "A3" },
          { name: "A4" },
          {
            name: "C",
  
            children: [
              { name: "C1" },
              {
                name: "D",
                children: [{ name: "D1" }, { name: "D2" }]
              }
            ]
          }
        ]
      },
      { name: "Z" },
      {
        name: "B",
        children: [{ name: "B1" }, { name: "B2" }, { name: "B3" }]
      }
    ]
};

type TreeNode = {
  name: string;
  children?: TreeNode[];
};

interface TreeNodeWithID extends TreeNode {
  id: number;
}

interface Node extends HierarchyPointNode<TreeNodeWithID> {
  x0: number;
  y0: number;
  _children?: Node[];
}

let id = 0;
const addIdsToTreeData = (data: TreeNode): TreeNodeWithID => {
  const newData: TreeNodeWithID = { ...data, id: id++, children: [] };

  // Then, if there are children in the original data, map over them
  if (data.children) {
    newData.children = data.children.map(addIdsToTreeData);
  }

  return newData;
};

const createHierarchyWithIds = (data: TreeNode): HierarchyNode<TreeNodeWithID> => {
  const dataWithIds = addIdsToTreeData(data);
  return d3.hierarchy(dataWithIds, (d) => d.children as TreeNodeWithID[]);
};

// Use the function to create your root node:
const treeRoot = createHierarchyWithIds(treeData);

console.log(treeRoot)

export const TreeComponent: React.FC = () => {
  useEffect(() => {

  }, []);

  return <div id="container" />;
};

  export default TreeComponent