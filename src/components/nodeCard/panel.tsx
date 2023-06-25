"use client"
import React, { useState, useContext } from 'react';
import TreeContext from './context';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select'
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container'

import style, {createTheme, ThemeProvider, styled} from '@mui/material/styles';
import { TreeNode, TreeProps } from '../Rectangle/treeComponent';


const Item_name = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  marginBottom: '20px',
  marginTop: '20px'
}));

const Item_des = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '20vh'
}));


interface OperationPanelProps {
  clickedNode: any;  // Add a prop for the clicked node
}

const startNode : TreeNode = {
  name: "Please Select your first Node",
  children : undefined,
  link_git: undefined,
  link_doc: undefined,
  description: undefined
}

const tree: TreeProps = {
  data: startNode
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3c83bd',
      dark: '#3c83bd',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

function opengit(link : string) {
  console.log(link)
  if (link) {
    window.open(link, '_blank');
  }
}


const OperationPanel: React.FC<OperationPanelProps> = ({ clickedNode }) => {
  
  const treeContext = useContext(TreeContext);
  
  if (!treeContext) {
    // context is undefined, this will happen if component isn't wrapped in the Provider
    throw new Error("OperationPanel must be used within a TreeContext.Provider");
  }

  const { current_tree, setCurrentTree } = treeContext;

  function handleButtonClick(d: any) {
    // console.log(d)
    if (d == 'Methods') {
      setCurrentTree('Method')
      console.log(current_tree)
    }
    else if (d == 'Applications') {
      setCurrentTree('App')
      console.log(current_tree)
    }
  }

  function setButton(s : string) {
    return (
      <ThemeProvider theme={theme}>
        <Button variant="contained" onClick={() => handleButtonClick(s)} sx = {{
          width: '100%',
          height: '20%',
          marginBottom: '10px',
          fontSize: '1.5vw',
          color: 'black',
          backgroundColor: 'black', // normal color

        }}>
        
          {s}
        </Button>
      </ThemeProvider>
    )
  }

  return (
<Paper
  sx={{
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '30%',
    backgroundColor: '#e1e5e8',
    padding: '20px',
    overflow: 'auto',
  }}
>
  <Grid container>
    <Grid item xs={3}>
      <Container disableGutters maxWidth={false} sx={{ 
        position: 'absolute', 
        width: '20%', 
        height: '100%',
        left: '1%' 
      }}>
        {setButton('Reset')}
        {setButton('Methods')}
        {setButton('Applications')}
        {setButton('Examples')} 
      </Container>
    </Grid>

    {/* Spacer */}
    <Grid item xs={0}></Grid>

    <Grid container spacing={2} sx={{height: '100%', width: '50%'}}>
        <Box sx={{height: '40%', width: '100%'}}>
          <Grid item xs={12}>
            <Item_name>
              {clickedNode ? clickedNode.data.name : 'Please select a Node'}
            </Item_name>
          </Grid>
        </Box>

        <Box sx={{height: '60%', width: '100%'}}>
          <Grid item xs={12}>
            <Item_des>
              {clickedNode ? clickedNode.data.description ? clickedNode.data.description : 'Description will be shown here' : 'Please select a Node'}
            </Item_des>
          </Grid>
        </Box>
    </Grid>

    {/* New Grid item for the right button */}
    <Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => opengit(clickedNode.data.link_git)}>Test Button to Git</Button>
    </Grid>
    <Grid item xs style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={() => opengit(clickedNode.data.link_doc)}>Test Button to doc</Button>
    </Grid>
  </Grid>
</Paper>

  );
}

export default OperationPanel;




