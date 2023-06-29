"use client"
import React, { useState }  from 'react';
import TreeComponent from '../Rectangle/Rectangle';
import TreeContext from './context';
import Panel from './panel';


function TopPanel() {
  const [current_tree, setCurrentTree] = useState('CoFI Methods');


  return (
    <div>
        <Panel onClick={setCurrentTree}/>
        <TreeComponent selectedTree = {current_tree}/>
    </div>
  );
}
  

export default TopPanel;