import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React, { useState } from 'react'
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupIcon from '@mui/icons-material/Group';
import { Link, useNavigate, useLocation } from "react-router-dom";

function SideNav() {
    const { collapsed } = useProSidebar();
    const theme = useTheme();
    const navigate = useNavigate()
    const location = useLocation();



    const fontFamily = {
        fontFamily: "Montserrat",
        fontWeight: "600",
        color: "#000"
    }
    
    const [localite, setLocalite] = useState("Boundali")
    const [agent, setAgent] = useState("Mohamed Boudali")
    return <Sidebar
        style={{ height: "100%", top: 'auto' }}
        breakPoint="md"
        backgroundColor={theme.palette.neutral.light}

    >
        <Menu
            menuItemStyles={{
                button: ({ level, active }) => {
                    return {
                        backgroundColor: active ? theme.palette.neutral.medium : undefined,
                    };
                },
            }}
        >
            <MenuItem active={location.pathname === "/"} component={<Link to="/" />} icon={<DashboardOutlinedIcon />}> <Typography variant="body2" sx={fontFamily}>Accueil</Typography> </MenuItem>
            <MenuItem active={location.pathname === "/electeur"} component={<Link to="/electeur" />} icon={<FormatListNumberedIcon />}> <Typography variant="body2" sx={fontFamily}>Electeurs</Typography></MenuItem>
            <MenuItem active={location.pathname === "/inscription"} component={<Link to="/inscription" />} icon={<AddCircleIcon />}> <Typography variant="body2" sx={fontFamily}>Inscription </Typography></MenuItem >
        </Menu >

        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt="Masoud" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" />
            {!collapsed ? <Typography variant="body2" sx={[styles.yourChannel, fontFamily]}> {agent} </Typography> : null}
            {!collapsed ? <Typography variant="overline" style={{ color: '#FF7F20', fontWeight: "bold" }} sx={fontFamily}> {localite} </Typography> : null}
        </Box>
    </Sidebar >;
}

export default SideNav;

/**
 * @type {import("@mui/material").SxProps}
 */
const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'
    },
    yourChannel: {
        mt: 1
    }

}