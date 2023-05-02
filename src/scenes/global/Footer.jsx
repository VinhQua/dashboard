import { Box, useTheme } from "@mui/material"
import { tokens } from "../../theme"


const Footer = ()=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    return(
        
        <Box
            display="flex"
            justifyContent="space-between"
            
        >
            <h1 style={{color:"white"}}>efsf</h1>
            <h1 style={{color:"white"}}>efsf</h1>
            <h1 style={{color:"white"}}>efsf</h1>
            <h1 style={{color:"white"}}>efsf</h1>
            <h1 style={{color:"white"}}>efsf</h1>
        </Box>
    )
}

export default Footer