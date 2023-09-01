"use client"
import React, { useState }  from 'react';
import TreeComponent from '../Tree/Tree';
import Panel from './panel';
import Popup from './popup';
import HelperBox from './HelperBox';


function TopPanel() {
  const [current_tree, setCurrentTree] = useState('CoFI Methods');
  const [current_theme, setCurrentTheme] = useState('light');
  const [popup, setPopup] = useState<{visible: boolean, selectedMethod: string | null}>({visible: false, selectedMethod: "CoFI",});
  return (
    <div>
        <Panel onClickTree ={setCurrentTree} onClickTheme={setCurrentTheme}  />
        <TreeComponent selectedTree = {current_tree} selectedTheme = {current_theme} popupcont = {popup} setPopup={setPopup}/>
        <Popup popupContent={popup} setPopup={setPopup}/>
        <div className="top-panel">
        <HelperBox />
    </div>
    </div>
  );
}
  

export default TopPanel;