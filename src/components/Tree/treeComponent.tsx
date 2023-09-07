// const data: TreeProps = {
//     data: treeData
//   }

export interface TreeNode {
  name: string;
  children?: TreeNode[];
  link_git?: string | null;
  link_doc?: string | null;
  examples?: { name: string; description: string; linkToGit: string }[];
  description?: string | null;
  parentLength?: number | null;
  width?: number | null;
}

export interface TreeProps {
  data: TreeNode | null;
}

export interface onClick {
  onClickTree: (nodeData: any) => void;
  onClickTheme: (nodeData: any) => void;
}
