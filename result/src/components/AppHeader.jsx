
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useProSidebar } from "react-pro-sidebar";


function AppHeader() {
    const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

    return <AppBar position="sticky" sx={styles.appBar} >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
            <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="red">
                <MenuIcon />
            </IconButton>
            <Typography variant="h4" style={{ color: "#027314", fontWeight: "600", fontFamily:"Montserrat" }}>Résultat électoral par région</Typography>
            <Box
                component={'img'}
                sx={{ width: 45, height: 45, }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/1200px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png"
            />
        </Toolbar>
    </AppBar>;
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    appBar: {
        bgcolor: '#FFEEE0',
    },
    appLogo: {
        borderRadius: 2,
        width: 50,
        marginLeft: 2,
        cursor: 'pointer'
    }
}

export default AppHeader;