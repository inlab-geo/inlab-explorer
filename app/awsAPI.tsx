import React, { useEffect, useState } from 'react';
import TreeComponent from '../src/components/Rectangle/Rectangle';
  
const treeData: TreeNode = {
      name: "CoFI - Common Framework for Inference",
        children: [
          {
            name: "A",
            children: [
              { name: "A1", children: [{name: "here!"}] },
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
    
    
    
    
    const data: TreeProps = {
      data: treeData
    }
  
  interface TreeNode {
    name: string;
    children?: TreeNode[];
    link_git?: string;
    link_doc?: string;
    description?: string;
  }
  
  interface TreeProps {
    data: TreeNode;
  }

const MyComponent: React.FC = () => {
    const [treeData, setTreeData] = useState<TreeNode | null>(null);
  
    useEffect(() => {
      fetch('https://jsonofthetree.s3.ap-southeast-2.amazonaws.com/method_relation.json')
        .then((response) => response.json())
        .then((data) => setTreeData(data))
        .catch((error) => console.error(error));
    }, [data]);
  
    if (!treeData) {
      return <div>Loading...</div>;
    }

    data.data = treeData;
    return <TreeComponent data={treeData} />;
  };
  
export default MyComponent;
export{data}
  
