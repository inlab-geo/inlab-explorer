import React from 'react';

interface TreeContextType {
    current_tree: string;
    setCurrentTree: React.Dispatch<React.SetStateAction<string>>;
  }
  

const TreeContext = React.createContext<TreeContextType | undefined>(undefined);

export default TreeContext;
