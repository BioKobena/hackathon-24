import { Box, Card, CardContent, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../components/TabPanel";
import Etudiant from "./Form";
import Feuille from './Auth/feuille.svg'

function StudentForm() {
    return (
        <Box>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "900", textAlign: "center", color: "" }} sx={styles.pageTitle} variant="h2">
                BIENVENUE SUR LA PAGE DE VOTE
            </Typography>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "900", textAlign: "center" }} sx={styles.pageTitle} variant="h5">
                Veuillez cliquer sur un choix
            </Typography>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "400", color: "#FF7200", textAlign: "center" }} sx={styles.pageTitle} variant="h5">Candidats : </Typography>
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

