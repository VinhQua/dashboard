import { Box,IconButton,useTheme } from "@mui/material";
import { useContext } from "react";
import { colorModeContext,tokens } from "../../theme";
import {InputBase} from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from "react-router-dom";

const TopBar = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);

    return ( 
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search Bar */}
            <Box 
                display="flex" 
                backgroundColor ={colors.primary[400]} 
                borderRadius="3px"
            >
                <InputBase sx={{ml:2,flex:1}} placeholder="Search"/>
                <IconButton type="button" sx={{p:1}} >
                    <SearchIcon/>
                </IconButton>
            </Box>
            {/* Contact Info */}
            <Box display="flex" gap="2rem" >
            <Link to="https://github.com/VinhQua" target="_blank" underline="none">
                <IconButton>
                  <GitHubIcon/>  
                </IconButton>
                
            </Link>

            <Link to="https://www.linkedin.com/in/vinhquafrontenddeveloper/" target="_blank" underline="none">
                <IconButton>
                   <LinkedInIcon/> 
                </IconButton>
                
            </Link>

            <Link to="mailto:vinhqua.io@gmail.com" target="_blank" underline="none">
                <IconButton>
                   <EmailOutlinedIcon/> 
                </IconButton>
            </Link>
            </Box>
            {/* Icons */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark'? (
                        <LightModeOutlinedIcon/>
                        ):(
                        <DarkModeOutlinedIcon/>
                    )}
            
                </IconButton>

                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>

                <IconButton>
                   <SettingsOutlinedIcon/>
                </IconButton>

                <IconButton>
                    <PersonOutlineOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
     );
}
 
export default TopBar;