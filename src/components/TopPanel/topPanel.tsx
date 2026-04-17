"use client";
import React, { useState, useEffect } from "react";
import TreeComponent from "../Tree/Tree";
import Panel from "./panel";
import Popup from "./popup";
import HelperBox from "./helperBox";
import FloatingText from "./floatingText";

export const treeFromParam = (p: string | null): string | null => {
  if (p === "examples" || p === "CoFI Examples") return "CoFI Examples";
  if (p === "methods" || p === "CoFI Methods") return "CoFI Methods";
  if (p === "espresso" || p === "Espresso Problems") return "Espresso Problems";
  return null;
};

function TopPanel() {
  const [current_tree, setCurrentTree] = useState("CoFI Methods");
  useEffect(() => {
    const fromUrl = treeFromParam(
      new URLSearchParams(window.location.search).get("tree"),
    );
    if (fromUrl) setCurrentTree(fromUrl);
  }, []);
  const [current_theme, setCurrentTheme] = useState("light");
  const [popup, setPopup] = useState<{
    visible: boolean;
    selectedMethod: string | null;
    isTutorial: boolean;
  }>({ visible: false, selectedMethod: "CoFI", isTutorial: false });
  return (
    <div>
      <Panel onClickTree={setCurrentTree} onClickTheme={setCurrentTheme} />
      <TreeComponent
        selectedTree={current_tree}
        selectedTheme={current_theme}
        popupcont={popup}
        setPopup={setPopup}
      />
      <Popup popupContent={popup} setPopup={setPopup} />
      <div className="top-panel">
        <div className="helper-container">
          <HelperBox />
          <FloatingText interval={3000} />
        </div>
      </div>
    </div>
  );
}

export default TopPanel;
