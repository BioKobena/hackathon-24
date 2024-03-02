
import { AppBar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useProSidebar } from "react-pro-sidebar";
import LogoIPIF from '../../src/assets/img/ipif.png'
import { Link, useNavigate, useLocation } from "react-router-dom";


function AppHeader() {
    const navigate = useNavigate()
    const handleClose = () => {
        console.log("Close")
        navigate('/login')
    }

    const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

    return <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar >
            <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                <MenuIcon />
            </IconButton>
            <Box
                component={'img'}
                sx={{width:35, height:35,}}
                // sx={styles.appLogo}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1200px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
                />
            <Box
                sx={{ flexGrow: 1 }} />
            <IconButton title="Notifications" color="secondary">
                <Badge badgeContent={21} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton title="Deconnexion" color="secondary" onClick={handleClose}>
                <LogoutIcon />
            </IconButton>
        </Toolbar>
    </AppBar>;
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: '#027314',
    },
    appLogo: {
        borderRadius: 2,
        width: 50,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default AppHeader;