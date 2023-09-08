import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import methodRelationData from "../../../public/method_relation.json";
import examplesRelationData from "../../../public/example_relation.json"; 

interface Example {
  name: string;
  description: string;
  linkToGit: string;
}

let exampleExample: Record<string, Example[]> = {
  CoFI: [],
};

function load_examples(data: any) {
  if (data.examples) {
    data.examples.forEach((example: any) => {
      // Check if the key exists
      if (exampleExample[data.name]) {
        // Key exists, append the new example
        exampleExample[data.name].push({
          name: example.name,
          description: example.description,
          linkToGit: example.linkToGit,
        });
      } else {
        // Key does not exist, create new array with the new example
        exampleExample[data.name] = [
          {
            name: example.name,
            description: example.description,
            linkToGit: example.linkToGit,
          },
        ];
      }
    });
  }

  if (data.children) {
    data.children.forEach((child: any) => {
      load_examples(child);
    });
  }
}

interface Popupcont {
  visible: boolean;
  selectedMethod: string | null;
}

interface PopupEvent {
  popupContent: Popupcont;
  setPopup: (Popup: Popupcont) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Popupdiv = styled.div`
  position: absolute;
  width: 80vw;
  height: 80vh;
  left: 10vw;
  top: 10vh;
  z-index: 1001;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.5s linear;
  overflow: auto;
`;
const ContentContainer = styled.div`
  height: 95%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  flex: "1 0 auto";
`;

const Popup: React.FC<PopupEvent> = ({ popupContent, setPopup }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    load_examples(methodRelationData);
    load_examples(examplesRelationData); 
  }, []);  

  function singleContent(
    title: string,
    description: string,
    link: string,
    key: string,
  ) {
    return (
      <div
        key={key}
        style={{
          width: "90%",
          maxHeight: "200px",
          backgroundColor: "#ddf3fd",
          marginLeft: "5%",
          marginTop: "10px",
          flex: "1 0 auto",
          position: "relative",
          padding: "10px",
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>
          <b>{title}</b>
        </h1>
        <p style={{ marginBottom: "10px" }}>{description}</p>
        <a
          href={link}
          style={{
            position: "absolute",
            right: "10px",
            bottom: "10px",
            padding: "10px",
            backgroundColor: "skyblue",
            color: "white",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Git
        </a>
      </div>
    );
  }

  function listExamples() {
    if (popupContent.selectedMethod) {
      if (exampleExample[popupContent.selectedMethod]) {
        return exampleExample[popupContent.selectedMethod].map(
          (example, index) => {
            return singleContent(
              example.name,
              example.description,
              example.linkToGit,
              index.toString(),
            );
          },
        );
      }
    }
    return null; // Return null if no examples found
  }

  function title() {
    return (
      <div
        style={{
          width: "100%",
          height: "5%",
          padding: "2px",
          backgroundColor: "#e3e3e3",
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div style={{ padding: "5px" }}>Examples under {popupContent.selectedMethod}</div>
        <button
          onClick={() => setPopup({ visible: false, selectedMethod: "CoFI" })}
          style={{ height: "100%" }}
        >
          <img src="./icon2.png" alt="logo" style={{ width: "100%", height: "100%" }} />
        </button>
      </div>
    );
  }

  useEffect(() => {
    // Function to handle the outside click
    function handleOutsideClick(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setPopup({ visible: false, selectedMethod: "CoFI" });
      }
    }
  
    // Only add the listener if the popup is visible
    if (popupContent.visible) {
      document.addEventListener("click", handleOutsideClick);
    }
  
    // Cleanup listener when component is unmounted or popup is closed
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [popupContent.visible, setPopup]);

  return (
    <div>
      {popupContent.visible && (
        <Popupdiv ref={popupRef}>
          {title()}
          <ContentContainer>{listExamples()}</ContentContainer>
        </Popupdiv>
      )}
    </div>
  );
};

export default React.memo(Popup);
