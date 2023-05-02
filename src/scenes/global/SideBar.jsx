import { Menu, sidebarClasses ,menuClasses, ProSidebarProvider, Sidebar, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Avatar, Box, IconButton,Typography,useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useState } from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import profileImage from '../../assets/smileimage-min.png'
const Item =({title,to,icon,selected,setSelected})=>{
  const theme = useTheme()
  const colors = tokens(theme.palette.mode);

  return(
    <Link to={to} style={{textDecoration:"none", color:colors.grey[100]}}>
    <MenuItem
      active={selected === title}
      style={{
        color:colors.grey[100],
      }}
      onClick={()=> setSelected(title)}
      icon = {icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
    </Link>
  )
}


const SideBar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected,setSelected] = useState('DashBoard')
    return ( 
        <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
        >
          
          <ProSidebarProvider>
          <Sidebar >

            <Menu >
            {/* Login And Menu Icon */}
              <MenuItem
                onClick={()=> setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon/>:undefined}
                style={{
                  margin:"10px 0 20px 0",
                  color:colors.grey[100],
                }}
              >
               {!isCollapsed && (<Box 
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ABILITY
                  </Typography>
                  <IconButton>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>)}


              </MenuItem>
            {!isCollapsed && (
              <Box mb ="25px">
                
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Avatar
                    src={profileImage}
                    alt="profile user"
                    style={{cursor:"pointer" , borderRadius:"50%"}}
                    sx={{
                      height:"100px",
                      width:"100px"
                    }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{m:"10px 0 0 0"}}
                  >
                    Vinh Quang
                  </Typography>
                  <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                  >
                    VP Admin
                  </Typography>
                </Box>
              </Box>
            )}

            <Box paddingLeft={isCollapsed? undefined :"10%"}>
              {/* <Item
                title="Dashboard"
                to='/'
                icon={<HomeOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              /> */}

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{m:"15px 0 5px 20px"}}
              >
                Data
              </Typography>

              <Item
                title='Manage Team'
                to = '/team'
                icon={<PeopleOutlineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Contacts Information"
                to = "/contacts"
                icon={<CallOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Invoices Balances"
                to = '/invoice'
                icon={<ReceiptOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                              variant="h6"
                              color={colors.grey[300]}
                              sx={{m:"15px 0 5px 20px"}}
              >
                Pages
              </Typography>

              <Item
                title="Profile Form"
                to = '/form'
                icon ={<PersonOutlineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title='Calendar'
                to = '/calendar'
                icon = {<CalendarTodayOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title = 'FAQ Page'
                to = '/faq'
                icon={<HelpOutlineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Typography
                              variant="h6"
                              color={colors.grey[300]}
                              sx={{m:"15px 0 5px 20px"}}
              > */}
                {/* Charts
              </Typography>
              <Item
                title = 'Bar Chart'
                to ='/barchart'
                icon={<BarChartOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Pie Chart"
                to = '/piechart'
                icon={<PieChartOutlineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Line Chart"
                to = '/linechart'
                icon = {<TimelineOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon/>}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </Box>
            </Menu>

          </Sidebar>
          </ProSidebarProvider>
        </Box>
     );
}
 
export default SideBar;