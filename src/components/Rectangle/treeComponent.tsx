
// const data: TreeProps = {
//     data: treeData
//   }
  
export  interface TreeNode {
    name: string;
    children?: TreeNode[];
    link_git?: string;
    link_doc?: string;
    description?: string | null;
    parentLength?: number | null;
    fontSize? : number | null
  }
  
export interface TreeProps {
    data: TreeNode | null
  }

export interface onClick {
  onClickTree: (nodeData: any) => void;
  onClickTheme: (nodeData: any) => void;

}