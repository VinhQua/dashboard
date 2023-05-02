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