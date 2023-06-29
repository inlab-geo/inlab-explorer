"use client"
import React, { useState, useEffect } from 'react';
import {inLabStyle} from './style'
import TreeContext from './context';
import {onClick} from '../Rectangle/treeComponent'
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {MenuItem} from '@mui/material';
import { fromJSON } from 'postcss';
import {IconButton} from '@mui/material';
import {Menu} from '@mui/material';






const Panel : React.FC<onClick> = ({onClick}) => {
    const [viewportDim, setViewportDim] = useState({height : 0, width : 0});
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        setViewportDim({height: window.innerHeight, width: window.innerWidth});
    }, []);

    const barDim = {
        height: viewportDim.height * 0.05,
        width: viewportDim.width
    }


    const selectTree = (event: SelectChangeEvent) => {
        onClick(event.target.value);
        setTree(event.target.value);
      };
    //tree selection
    const [selectedTree, setTree] = useState("CoFI Methods");
    
    function treeSelection() {
        function styleText(content : string) {
            return (<p style = {inLabStyle.selectTextCSS}>
                {content}
            </p>)
        }

        return (
            <Select value={selectedTree} onChange={selectTree} sx = {inLabStyle.selectCSS}>
                <MenuItem value="CoFI Methods">{styleText("CoFI Methods")}</MenuItem>
                <MenuItem value="CoFI Examples">{styleText("CoFI Examples")}</MenuItem>
                <MenuItem value="Espresso Problems">{styleText("Espresso Problems")}</MenuItem>
            </Select>
        )
    }

    function logo() {
        return (
            <img src="/test-logo.webp" alt="logo" style={inLabStyle.logoCSS} />
        )
    }


    function sideMenu() {
        const options = [
                'Dashboard',
                'functions?',
                'pages?',
                'leave a comments?',
                'pop-up windows?',
                'tutorial?'
          ];
          const ITEM_HEIGHT = 48;
        const open = Boolean(anchorEl);

        const handleClick = (event : any) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <div style={inLabStyle.logoCSS}>
            <IconButton onClick={handleClick} style={{ padding: 0 }}>
               <img src="/test-button.jpeg" alt="logo" style={{height : `${barDim.height}px`}} />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '200ch',
                    height: '100%'
                },
                }}
            >
                {options.map((option) => (
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
            </div>
        );
    }



    function bar() {
        return (
            <Box sx={inLabStyle.barCSS}>
                {logo()}
                {treeSelection()}
                {sideMenu()}
            </Box>
            )
        }  
    

    //-------------------------------------------------------------
    return (
        <div style = {{height: `${barDim.height}px`, width: '100%'}}>
            {bar()}
        </div>
    )
}

export default Panel