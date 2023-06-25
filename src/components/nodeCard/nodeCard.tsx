"use client"
import React, { useState }  from 'react';
import TreeComponent from '../Rectangle/Rectangle';
import TreeContext from './context';
import OperationPanel from './panel';

function ParentComponent() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [current_tree, setCurrentTree] = useState('Method');


  return (
    <TreeContext.Provider value={{current_tree, setCurrentTree}}>
    <div>
      <div>
        <TreeComponent onClick={setSelectedNode} />
      </div>
      <div>
        <OperationPanel clickedNode={selectedNode} />
      </div>
    </div>
    </TreeContext.Provider>
  );
}
  

export default ParentComponent;
  
