"use client"
import React, { useState, useEffect } from 'react';
import {inLabStyle} from './style'
import TreeContext from './context';
import {onClick} from '../Rectangle/treeComponent'
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton'
import {MenuItem} from '@mui/material';
import {IconButton} from '@mui/material';
import {Menu} from '@mui/material';







const Panel : React.FC<onClick> = ({onClickTree, onClickTheme}) => {
    const [viewportDim, setViewportDim] = useState({height : 0, width : 0});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [phone_mode, set_phone_mode] = useState<boolean>(false)
    
    const [badgeMenuAnchor, setBadgeMenuAnchor] = useState<null | HTMLElement>(null);

    const handleBadgeMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setBadgeMenuAnchor(event.currentTarget);
    };

    const handleBadgeMenuClose = () => {
        setBadgeMenuAnchor(null);
    };
    

    useEffect(() => {
        console.log(window.innerWidth)
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
        console.log(newValue);
        onClickTree(newValue);
        setTree(newValue);
    };

    const selectTreebar = (event: any) => {
        console.log(event.target.value)
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
        return (
                <img src="./icon2.png" alt="logo" style={{ height: '8vh' }}/>
        );
    }
    function BadgeDropdownMenu() {
        return (
            <div>
                <IconButton onClick={handleBadgeMenuClick} style={{height: "5vh"}}>
                {logo()}
                </IconButton>
                <Menu
                    anchorEl={badgeMenuAnchor}
                    keepMounted
                    open={Boolean(badgeMenuAnchor)}
                    onClose={handleBadgeMenuClose}
                >
                    <MenuItem>
                    <a href="https://pypi.org/project/cofi/" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/pypi/v/cofi?logo=pypi&amp;style=flat-square&amp;color=cae9ff&amp;labelColor=f8f9fa" alt="Version Badge" />
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a href="https://github.com/inlab-geo/cofi" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/GitHub-cofi-171515?logo=github&amp;labelColor=f8f9fa&amp;style=flat-square&amp;logoColor=171515" alt="Contributors Badge" />
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a href="https://colab.research.google.com/github/inlab-geo/cofi-examples/blob/main/index.ipynb" target="_blank" rel="noopener noreferrer">
                        <img src="https://img.shields.io/badge/open%20in-Colab-b5e2fa?logo=googlecolab&amp;style=flat-square&amp;color=ffd670&amp;labelColor=f8f9fa" alt="Version Badge" />
                    </a>
                    </MenuItem>
                    <MenuItem>
                    <a href="https://cofi.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
                        <img src="https://camo.githubusercontent.com/b335e59394f3a2273c040ee466be2bcf6f5082f4faf2620896b6862eb490ba2c/68747470733a2f2f696d672e736869656c64732e696f2f72656164746865646f63732f636f66693f6c6f676f3d72656164746865646f6373267374796c653d666c61742d73717561726526636f6c6f723d666564396237266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d656161633862" alt="Contributors Badge" />
                    </a>
                    </MenuItem>

                    <MenuItem>
                    <a href="https://join.slack.com/t/inlab-community/shared_invite/zt-1ejny069z-v5ZyvP2tDjBR42OAu~TkHg" target="_blank" rel="noopener noreferrer">
                        <img src="https://camo.githubusercontent.com/b0a5aab276840d5b1faf36db94332a283e85428daf24e7259f9f0bef5b7978d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d496e4c61625f636f6d6d756e6974792d3441313534423f6c6f676f3d736c61636b267374796c653d666c61742d73717561726526636f6c6f723d636462346462266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d396338396238" alt="Contributors Badge" />
                    </a>
                    </MenuItem>

                </Menu>
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

    // function displayBadges() {
    //     if (!showBadges) return null;
    
    //     // Here are some example badges from shields.io
    //     return (
    //         <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    //             <img src="https://img.shields.io/badge/version-1.2.3-blue" alt="Version Badge" />
    //             <img src="https://img.shields.io/badge/contributors-5-orange" alt="Contributors Badge" />
    //             {/* Add more badges as needed */}
    //         </div>
    //     );
    // }



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

