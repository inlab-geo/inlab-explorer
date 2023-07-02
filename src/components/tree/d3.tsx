import { hierarchy, tree, TreeLayout, HierarchyNode, HierarchyPointNode  } from 'd3';
import React from 'react';

export  interface TreeNode {
    name: string;
    children?: TreeNode[];
    link_git?: string;
    link_doc?: string;
    description?: string | null;
    parentLength?: number | null
  }
  
  interface TreeProps {
    node: HierarchyNode<TreeNode>;
  }

export interface onClick {
  onClick: (nodeData: any) => void;
}

const data: TreeNode = {
  name: 'root',
  children: [
    { name: 'child1' },
    { name: 'child2' },
    { name: 'child2' },
    { name: 'child2' },
    { name: 'child2' },
    { name: 'child2' },
  ],
};

let width = 500,
    height = 60

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

    function collapse(d: any) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
      }

const root = hierarchy(data);
const layout: TreeLayout<any> = tree().size([width, height]); // Explicitly type layout as TreeLayout<TreeNode>.
layout(root);

// Define your React component with TypeScript:


const Tree: React.FC<TreeProps> = ({node}) => {

    const block_width = measureTextWidth(d.name) + 40;

    const fontSize = block_width / node.name.length;
  
    return (
      <g>
        <rect
          rx={(node.children || node._children ? 3 : 6)}
          ry={(node.children || node._children ? 3 : 6)}
          strokeWidth={parent ? 1 : 0}
          stroke={d.children || d._children ? "rgb(3, 192, 220)" : "rgb(38, 222, 176)"}
          strokeDasharray={node.children || node._children ? "0" : "2.2"}
          strokeOpacity={node.children || node._children ? "1" : "0.6"}
          x={-100}
          y={-10}
          width={200}
          height={20}
        />
        <text
          fontSize={`${fontSize}px`}
          fontFamily="Arial"
          fill={parent ? (node.children || node._children ? "#ffffff" : "rgb(38, 222, 176)") : "rgb(39, 43, 77)"}
          dy=".35em"
          x={0}
          textAnchor="middle"
        >
          {node.name}
        </text>
      </g>
    );
};



export const MyComponent: React.FC = () => {
  return <Tree nodes={root.descendants()} />;
}