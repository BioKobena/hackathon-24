import { Box, Card, CardContent, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../components/TabPanel";
import Etudiant from "./Form";

function StudentForm() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "bold", color: "#FF7200" }} sx={styles.pageTitle} variant="h5">Nouveau electeur</Typography>
            <Etudiant />
        </Box>
    );
}

export default StudentForm;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        m: 2,
        fontWeight: 500,
    },
    tabHeader: {
        borderBottom: 1,
        borderColor: 'divider'
    },
    rowContainer: {
        width: '100%',
        maxWidth: 900,
        border: 1,
        borderColor: 'neutral.medium',
        borderRadius: 1,
        mt: 2,
        p: 2,
        display: 'flex',
        alignItems: 'flex-start'
    },
    rowIcon: {
        fontSize: 40,
        color: 'neutral.normal'
    },
    secondColumn: {
        ml: 1
    },
    rowLink: {
        ml: 'auto'
    }
}

