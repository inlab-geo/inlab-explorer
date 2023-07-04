"use client"
import React, { useState }  from 'react';
import TreeComponent from '../Rectangle/Rectangle';
import TreeContext from './context';
import Panel from './panel';


function TopPanel() {
  const [current_tree, setCurrentTree] = useState('CoFI Methods');
  const [current_theme, setCurrentTheme] = useState('light');


  return (
    <div>
        <Panel onClickTree ={setCurrentTree} onClickTheme={setCurrentTheme} />
        <TreeComponent selectedTree = {current_tree} selectedTheme = {current_theme}/>
    </div>
  );
}
  

export default TopPanel;