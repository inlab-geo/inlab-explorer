"use client"
import React, { useState, useEffect } from 'react';
import {inLabStyle} from './style'
import {onClick} from '../Tree/treeComponent'
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton'
import {MenuItem} from '@mui/material';
import {IconButton} from '@mui/material';
import {Menu} from '@mui/material';
import { Badge } from './badge/badge';
import cofiBadges from './badge/badgeCofi';
import espressoBadges from './badge/badgeEspresso';
import exampleBadges from './badge/badgeExample';

const Panel : React.FC<onClick> = ({onClickTree, onClickTheme}) => {
    const [viewportDim, setViewportDim] = useState({height : 0, width : 0});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [phone_mode, set_phone_mode] = useState<boolean>(false)
    const [showDropdown, setShowDropdown] = useState(false);
    
    const [badgeMenuAnchor, setBadgeMenuAnchor] = useState<null | HTMLElement>(null);

    const handleBadgeMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setBadgeMenuAnchor(event.currentTarget);
    };

    const handleBadgeMenuClose = () => {
        setBadgeMenuAnchor(null);
    };
    

    useEffect(() => {
        if (window.innerWidth > 600) set_phone_mode(true)
        else set_phone_mode(false)
      }, [phone_mode]);
      
    useEffect(() => {
        setViewportDim({height: window.innerHeight, width: window.innerWidth});
    }, []);

    const barDim = {
        height: viewportDim.height * 0.05,
        width: viewportDim.width
    }


    const selectTree = (event: any, newValue: string) => {
        onClickTree(newValue);
        setTree(newValue);
    };

    const selectTreebar = (event: any) => {
        onClickTree(event.target.value);
        setTree(event.target.value);
    };
    //tree selection
    const [selectedTree, setTree] = useState("CoFI Methods");
    
    function styleText(content : string) {
        return (<div style = {inLabStyle.selectTextCSS}>
            {content}
        </div>)
    }

    function treeSelection() {

        return (
            <Select value={selectedTree} onChange={selectTreebar} sx = {inLabStyle.selectCSS}>
                <MenuItem value="CoFI Methods">{styleText("CoFI Methods")}</MenuItem>
                <MenuItem value="CoFI Examples">{styleText("CoFI Examples")}</MenuItem>
                <MenuItem value="Espresso Problems">{styleText("Espresso Problems")}</MenuItem>
            </Select>
        )
    }

    function logo() {
        return (<div style={{display: 'flex'}}>
                <img src="./icon2_R.png" alt="logo" style={{ height: '8vh' }}/>
                <img src="./icon2_L.png" alt="logo" style={{ height: '8vh' }}/>
                </div>

        );
    }

    function BadgeDropdownMenu() {
        // Updated badge button to show dropdown on hover
        return (
            <div 
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
            <IconButton style={{height: "5vh"}} onMouseEnter={() => setShowDropdown(false)}>
                <a href="https://inlab.edu.au/">
                <img src="./icon2_R.png" alt="logo left" style={{ height: '8vh' }}/>
                </a>
            </IconButton>
            {/* Right side of the logo without hover */}
            <IconButton style={{height: "5vh"}} onMouseEnter={() => setShowDropdown(true)}>
                <img src="./icon2_L.png" alt="logo right" style={{ height: '8vh' }}/>
            </IconButton>
            {/* Dropdown Menu */}
            <div style={{
                visibility: showDropdown ? 'visible' : 'hidden',
                display: 'flex',
                width: '100%',
                height: '250px',
                position: 'absolute',
                top: '5vh',
                left: '0',
                backgroundColor: 'white',
                zIndex: 1,
                justifyContent: 'space-around', 
                opacity: showDropdown ? 1 : 0, 
                transition:  'opacity 1s ease', 
            }}>
                {singleColume(cofiBadges, "CoFI")}
                {singleColume(espressoBadges, "Espresso")}
                {singleColume(exampleBadges, "Examples")}             
            </div>
        </div>
        );
    }

    function singleBadge(b: Badge) {
        return (
            <span>
            <MenuItem>
                <a href={b.link} target="_blank" rel="noopener noreferrer">
                    <img src={b.io} />
                </a>
            </MenuItem>
            </span>
        )
    }


    function singleColume(badges: Badge[], title: string) {
        return (
          <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'start', 
              marginTop: '20px' 
          }}>
            <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{title}</span>
            {badges.map((badge, index) => (
              <React.Fragment key={index}>
                {singleBadge(badge)}
              </React.Fragment>
            ))}
          </div>
        );
      }

    
    function sideMenu() {
        const options = [
                'use light theme',
                'use dark theme',
                'use special theme',
                'leave a comments?',
          ];
          const ITEM_HEIGHT = 48;
        const open = Boolean(anchorEl);

        const handleClick = (event : any) => {
            setAnchorEl(event.currentTarget)
        };

        const handleClose = (o : any) => {
            onClickTheme(o)
            setAnchorEl(null);
        };



        return (
            <div style={inLabStyle.logoCSS}>
            <IconButton onClick={handleClick} style={{ padding: 0 }}>
               <img src="./icon.webp" alt="logo" style={{height : `${barDim.height}px`}} />
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
                <MenuItem key={option} selected={option === 'Pyxis'} onClick={() =>handleClose(option)}>
                    {option}
                </MenuItem>
                ))}
            </Menu>
            </div>
        );
    }

    function treeSelection_wide() {
        return (
            <div >
            <ToggleButtonGroup
                value={selectedTree}
                exclusive
                onChange={selectTree}
                aria-label="CoFI Methods"
                style={{height: '4vh'}}
                >
                <ToggleButton value="CoFI Methods" aria-label="CoFI Methods">
                    {styleText("CoFI Methods")}
                </ToggleButton>
                <ToggleButton value="CoFI Examples" aria-label="CoFI Examples">
                    {styleText("CoFI Examples")}
                </ToggleButton>
                <ToggleButton value="Espresso Problems" aria-label="Espresso Problems">
                    {styleText("Espresso Problems")}
                </ToggleButton>
            </ToggleButtonGroup>
            </div>
        )
    }

    function bar_phone() {
        return (
            <Box sx={inLabStyle.barCSS}>
                {BadgeDropdownMenu()}
                {treeSelection()}
                {sideMenu()}
                
            </Box>
            )
        }
        
    function bar_wide() {
    return (
        <Box sx={inLabStyle.barCSS}>
            {BadgeDropdownMenu()}
            {treeSelection_wide()}
            {sideMenu()}

        </Box>
        )
    }  

    function bar() {
        if (phone_mode) return bar_wide()
        else return bar_phone()
    }

    //-------------------------------------------------------------
    return (
        <div style = {{height: `5vh`, width: '100%'}}>
            {bar()}
        </div>
    )
}


export default Panel

