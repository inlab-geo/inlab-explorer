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
    const [showDropdown, setShowDropdown] = useState(false);
    
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
        return (<div style={{display: 'flex'}}>
                <img src="./icon2_R.png" alt="logo" style={{ height: '8vh' }}/>
                <img src="./icon2_L.png" alt="logo" style={{ height: '8vh' }}/>
                </div>

        );
    }
    // function BadgeDropdownMenu() {
    //     return (
    //         <div>
    //             <IconButton onClick={handleBadgeMenuClick} style={{height: "5vh"}}>
    //             {logo()}
    //             </IconButton>
    //             <Menu
    //                 anchorEl={badgeMenuAnchor}
    //                 keepMounted
    //                 open={Boolean(badgeMenuAnchor)}
    //                 onClose={handleBadgeMenuClose}
    //             >
    //                 <MenuItem>
    //                 <a href="https://pypi.org/project/cofi/" target="_blank" rel="noopener noreferrer">
    //                     <img src="https://img.shields.io/pypi/v/cofi?logo=pypi&amp;style=flat-square&amp;color=cae9ff&amp;labelColor=f8f9fa" alt="Version Badge" />
    //                 </a>
    //                 </MenuItem>
    //                 <MenuItem>
    //                 <a href="https://github.com/inlab-geo/cofi" target="_blank" rel="noopener noreferrer">
    //                     <img src="https://img.shields.io/badge/GitHub-cofi-171515?logo=github&amp;labelColor=f8f9fa&amp;style=flat-square&amp;logoColor=171515" alt="Contributors Badge" />
    //                 </a>
    //                 </MenuItem>
    //                 <MenuItem>
    //                 <a href="https://colab.research.google.com/github/inlab-geo/cofi-examples/blob/main/index.ipynb" target="_blank" rel="noopener noreferrer">
    //                     <img src="https://img.shields.io/badge/open%20in-Colab-b5e2fa?logo=googlecolab&amp;style=flat-square&amp;color=ffd670&amp;labelColor=f8f9fa" alt="Version Badge" />
    //                 </a>
    //                 </MenuItem>
    //                 <MenuItem>
    //                 <a href="https://cofi.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">
    //                     <img src="https://camo.githubusercontent.com/b335e59394f3a2273c040ee466be2bcf6f5082f4faf2620896b6862eb490ba2c/68747470733a2f2f696d672e736869656c64732e696f2f72656164746865646f63732f636f66693f6c6f676f3d72656164746865646f6373267374796c653d666c61742d73717561726526636f6c6f723d666564396237266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d656161633862" alt="Contributors Badge" />
    //                 </a>
    //                 </MenuItem>

    //                 <MenuItem>
    //                 <a href="https://join.slack.com/t/inlab-community/shared_invite/zt-1ejny069z-v5ZyvP2tDjBR42OAu~TkHg" target="_blank" rel="noopener noreferrer">
    //                     <img src="https://camo.githubusercontent.com/b0a5aab276840d5b1faf36db94332a283e85428daf24e7259f9f0bef5b7978d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d496e4c61625f636f6d6d756e6974792d3441313534423f6c6f676f3d736c61636b267374796c653d666c61742d73717561726526636f6c6f723d636462346462266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d396338396238" alt="Contributors Badge" />
    //                 </a>
    //                 </MenuItem>

    //             </Menu>
    //         </div>
    //     );
    // }
    function BadgeDropdownMenu() {
        // Updated badge button to show dropdown on hover
        return (
            <div 
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
            <IconButton style={{height: "5vh"}} onMouseEnter={() => setShowDropdown(true)}>
                <img src="./icon2_R.png" alt="logo left" style={{ height: '8vh' }}/>
            </IconButton>
            {/* Right side of the logo without hover */}
            <IconButton style={{height: "5vh"}} onMouseEnter={() => setShowDropdown(false)}>
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
                {/* CoFI Content Block */}
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'start', 
                    marginTop: '20px' 
                }}>
                    <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>CoFI</span>
                    <span>
                    <MenuItem>
                        <a href="https://github.com/inlab-geo/cofi" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/GitHub-cofi-171515?logo=github&amp;labelColor=f8f9fa&amp;style=flat-square&amp;logoColor=171515" alt="Contributors Badge" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://pypi.org/project/cofi/" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/716357bd1cd720f8ca58b056c75672a8df96451dfbf66c5e41b2b2a8cff613fe/68747470733a2f2f696d672e736869656c64732e696f2f707970692f762f636f66693f6c6f676f3d70797069267374796c653d666c61742d73717561726526636f6c6f723d636165396666266c6162656c436f6c6f723d663866396661" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://anaconda.org/conda-forge/cofi" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/0292eedb71f978c40b8e86f7628f17545737efbbfc441b31977386f8934fff9f/68747470733a2f2f696d672e736869656c64732e696f2f636f6e64612f766e2f636f6e64612d666f7267652f636f66692e7376673f6c6f676f3d636f6e6461666f726765267374796c653d666c61742d73717561726526636f6c6f723d636365336465266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d333434653431" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://cofi.readthedocs.io/en/latest/?badge=latest" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/b335e59394f3a2273c040ee466be2bcf6f5082f4faf2620896b6862eb490ba2c/68747470733a2f2f696d672e736869656c64732e696f2f72656164746865646f63732f636f66693f6c6f676f3d72656164746865646f6373267374796c653d666c61742d73717561726526636f6c6f723d666564396237266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d656161633862" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://app.codecov.io/gh/inlab-geo/cofi" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/964927c68fe8d8529472bef058a8ad18f8a0d1de9c65e768de9fd409a8d61673/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f696e6c61622d67656f2f636f66693f6c6f676f3d707974657374267374796c653d666c61742d73717561726526746f6b656e3d54385239564b4d34443726636f6c6f723d666663616434266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d666639396338" />
                        </a>
                    </MenuItem>
                    </span>

                </div>

                {/* Espresso Content Block */}
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'start', 
                    marginTop: '20px' 
                }}>
                    <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>Espresso</span>
                    <span>
                    <MenuItem>
                        <a href="https://github.com/inlab-geo/espresso" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/GitHub-espresso-171515?logo=github&labelColor=f8f9fa&style=flat-square&logoColor=171515" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://pypi.org/project/geo-espresso/" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/837de8c831056f17dbb589ca5c103b623d8636e13ebb05f81252c260b41afec5/68747470733a2f2f696d672e736869656c64732e696f2f707970692f762f67656f2d657370726573736f3f6c6f676f3d70797069267374796c653d666c61742d73717561726526636f6c6f723d626465306665266c6162656c436f6c6f723d663866396661" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://github.com/inlab-geo/espresso/actions/workflows/build_wheels.yml" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/5f53a7f78dc22da1cd0dc662f1d07cef3fc4a0e5fa249d46173632cd701f4083/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f616374696f6e732f776f726b666c6f772f7374617475732f696e6c61622d67656f2f657370726573736f2f6275696c645f776865656c732e796d6c3f6272616e63683d6d61696e266c6f676f3d676974687562616374696f6e73267374796c653d666c61742d73717561726526636f6c6f723d636364356165266c6162656c436f6c6f723d663866396661" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://geo-espresso.readthedocs.io/en/latest/?badge=latest" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/236430cacab4f1e7b9a27e184cd8d0e5e872c76fd9b3c1175bd60708417e01d9/68747470733a2f2f696d672e736869656c64732e696f2f72656164746865646f63732f67656f2d657370726573736f3f6c6f676f3d72656164746865646f6373267374796c653d666c61742d73717561726526636f6c6f723d666564396237266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d656161633862" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://join.slack.com/t/inlab-community/shared_invite/zt-1ejny069z-v5ZyvP2tDjBR42OAu~TkHg" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/b0a5aab276840d5b1faf36db94332a283e85428daf24e7259f9f0bef5b7978d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536c61636b2d496e4c61625f636f6d6d756e6974792d3441313534423f6c6f676f3d736c61636b267374796c653d666c61742d73717561726526636f6c6f723d636462346462266c6162656c436f6c6f723d663866396661266c6f676f436f6c6f723d396338396238
" />
                        </a>
                    </MenuItem>
                    </span>
                </div>

                {/* Examples Content Block */}
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'start', 
                    marginTop: '20px' 
                }}>
                    <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>Examples</span>
                    <span>
                    <MenuItem>
                        <a href="https://github.com/inlab-geo/cofi-examples" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.shields.io/badge/Download%20from-GitHub-171515?logo=github&labelColor=f8f9fa&style=flat-square&logoColor=171515" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://colab.research.google.com/github/inlab-geo/cofi-examples/blob/main/index.ipynb" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/e87d1181750c2ce4fd53f47f8b412c0cc7090d94620f43bba2d852ebfd9166e0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6f70656e253230696e2d436f6c61622d6235653266613f6c6f676f3d676f6f676c65636f6c6162267374796c653d666c61742d73717561726526636f6c6f723d666664363730266c6162656c436f6c6f723d663866396661" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://mybinder.org/v2/gh/inlab-geo/cofi-examples/main?filepath=index.ipynb" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/a30100fe6370cf853f9ee51d27f94ed687986db0daee053e77cac9df4c5ba22a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c61756e63682d42696e6465722d4536363538312e7376673f6c6f676f3d646174613a696d6167652f706e673b6261736536342c6956424f5277304b47676f414141414e535568455567414141466b414141425a43414d41414142693158696441414142386c424d5645582f2f2f39586d73726d5a5948316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c316f6c4a586d73726d5a5948316f6c4a586d7372316f6c4c316f6c4a586d73726d5a5948316f6c4c316f6c4a586d73726d5a5948316f6c4c316f6c4c306e4666316f6c4a586d73726d5a5948316f6c4a586d737138645a62316f6c4a586d73726d5a5948316f6c4a586d7370586d7370586d7372316f6c4c316f6c4a586d73726d5a5948316f6c4a586d7372316f6c4c316f6c4a586d73726d5a5948316f6c4c316f6c4c65614956586d73726d5a5948316f6c4c316f6c4c316f6c4a586d73726d5a5948316f6c4c6e613331586d7372316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c716f5672316f6c4a586d7372316f6c4a586d73726d5a5948316f6c4c316f6c4b6b6661506f6258767669476162676164586d737154684b756f664b486d5a34446f626e72316f6c4a586d7372316f6c4a586d7370586d7372316f6c4a586d7372665a34547568576e316f6c4c316f6c4a586d737142693758316f6c4a586d73705a6d736c626d4d68626d7364656d7356666c385a676d734e696d384a706b3846306d3752346d3746356e4c42366a6268376a62694469724f4569624f476e4b614d68712b506e6143566736715767367165674b6166663657686e704b6f664b47746e6f6d78655a79336e6f4736645a692b6e33764363705044637050476e33624c62342f4d6234375562497256613472596f476a6461496265614958686f57486d5a59486f6258767063486a716448587265484c726f56727366472f7568476e75683262776a3248786b3137796c31767a6d6c6a7a6d316a306e6c58316f6c4c33414a58574141414162585253546c4d414542415148783867494341754c6a41774d447739505542415145705155464258563168675947426b6348427763586c3867494341676f69496b4a43516c4a69636e4a32676f4b436d714b2b77734c433475734441774d6a50304e4451314e6257334e7a67344f4469352b337638504477382f54303950583239766233392f66352b6672372b2f7a382f507a392f76372b7a637a43786741414243354a524546556541484e31756c336b3055554276436231435456706d706169744147534c537053754b434c577062544b4e4a46476c63534d414646363369556d5263634e4736674c6275786b585536364a415565662f394c53706d586e794c72335435414f2f727a6c357a6a31333770313336424953793434664b4a5875474e2f64313950556659654f36375a6e717466324b4833334964317073586f466457333073505a31734d767332443036304148717773344648654a6f6a4c5a716e773533636d6676672b5852386d43304f456a75787258456b5835796465564a4c56496c563065313050586b356b37645965487537436a316a2b3439754b6737754c55363174474c77316c713237756751596c636c4843346267763756512b5441796a355a632f556a735076733173643563577279574f6274765754324550613472746e5757334a6b706a67674570624f73507237463745794e657774704249736c41377034334843736e776f6f5854456333556d506d434e6e356c7271544a7879366e526d636176475a56742f334461327044354e4876734f484a43726463314732723344495470553779696337772f3752786e6a63306b7435474334646a697632537a3346623269455a6734312f64647346446f79755972496b6d4665687a304852327468506751714d79515962324f7442305778735a33426547332b7770526231767a6c325559426f6738466647687474464b6a7441636c6e5a5972526f397279473975472f465a515534414567385a45394c6a474d7a546d714b58504c6e6c57566e496c51515476784a663869703756676a5a6a795650726a77317465356f744d37526d5037786d2b734b32477639493847692b2b425262456b5239454277387a5255634b7877703733786b614c697151622b6b4764754a544e484737327a6357394c6f4a677151787050332f546a2f2f633379423074717a616d6c30352f2b6f72484c6b73564f2b39356b58372f3771674a766e6a6c72667232476773797830656f793975507a4e355350643836615867674f73454b573250727a37647533564944332f747a732f735352733277376f7656484b746a7258327064375a4d6c547841596642414c396a694477664c6b713535546d376966684d6c5447507943417337524652686e34374a6e6c634239524d355439374153755a584963564e755544496e647044626473667271734f707065586c35592b58564b646a464354682b7a476156756a3064397a79303550504b33517a42616d786477745443727a79672f3252766632457374556a6f72644777612f6b78396d534a4c72386d4c4c744357384848474a63325235685332313949694636506e5475734f71634d6c3537676d305a386b616e4b4d41516730715379755a666e377a4974736247794f39516c6e7859306543754431584c3279732f4d737251686c74453755673075464f7a75664a4645325078426f2f59417838585050644477574e304d72445259495a46306d534d4b434e4867614956466f42624e6f4c4a37744551444b784746306b634c51696d6f6a435a6f7076304f6b4e4f795743436739584d5641693741524a7a51644d3251556830676d426f7a6a6333536b6736645342527144475953554f7536365a672b4932664e5a732f4d332f662f47726c2f586e794631477733564b43657a30504e35495566464c717667554e344330714e715973355968504c2b61565a594445344970556b35376f53466e4a6d3446794371714f45306a685932534d794c466f6f35367a796f366265634f5335555644646a37566968307a702b74634d6877527042654c797174496a6c4a4b41495a5362493853475346336b307041336d52357448757750466f61374e3772656f713262714373416b314871437535757649316e364a755258492b53314d636f3534596d595477636e36416569632b6b73735869385870584334563374372f414475544e4b61514a6453634141414141456c46546b5375516d4343267374796c653d666c61742d737175617265266c6162656c436f6c6f723d66386639666126636f6c6f723d666661666363" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="https://cofi.readthedocs.io/en/latest/examples/generated/index.html" target="_blank" rel="noopener noreferrer">
                            <img src="https://camo.githubusercontent.com/3333f4055d8b342889f3cc52662bea1a26f3e8e19d426f9ea98cbaa585b2c659/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436f4649253230646f63732d4578616d706c6525323047616c6c6572792d6262643066663f7374796c653d666c61742d737175617265266c6162656c436f6c6f723d663866396661266c6f676f3d72656164746865646f6373266c6f676f436f6c6f723d626264306666" />
                        </a>
                    </MenuItem>
                    </span>
                    <span>
                    <MenuItem>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="" />
                        </a>
                    </MenuItem>
                    </span>
                </div>
            </div>
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

