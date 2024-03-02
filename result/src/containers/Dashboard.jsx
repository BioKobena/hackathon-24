import { Avatar, Box, Card, CardContent, Divider, Typography, Grid, Paper, TextField, Button, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import CheckIcon from '@mui/icons-material/Check'
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import urne from './urne.png'
import SweetAlert2 from 'react-sweetalert2';
import { InfinitySpin } from 'react-loader-spinner'
import Finger from '../../src/components/finger.png'

function Dashboard() {
    const [electeur, setElecteur] = useState(0);
    const location = useLocation()
    const navigate = useNavigate()
    const [localite, setLocalite] = useState("Boundiali")
    const [loading, setLoading] = useState(false);
    const [identifiant, setIdentifiant] = useState('')
    const [finger, setFinger] = useState('')
    const [fillChamp, setFillChamp] = useState(false)
    const [valide, setValide] = useState(false)
    const handleChange = (e) => {
        setIdentifiant(e.target.value)

        if (e.target.value.length !== 11) {
            console.log("L'identifiant doit contenir exactement 11 caractères", e.target.value.length);
            setValide(false)
        } else {
            setFillChamp(true)
            setValide(true)
        }

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (identifiant.length !== 11) {
            toast.info("L'identifiant doit contenir exactement 11 caractères");
            return;
        } else {

        }
        setLoading(true);
        setTimeout(() => {
            navigate('/inscription');
        }, 2000);

    };

    const [fingerColor, setFingerColor] = useState(false)
    const [changeFinger, setChangeFinger] = useState(false)

    const handleFinger = () => {

        setTimeout(() => {
            setChangeFinger(true)
        }, 4000);

        setTimeout(() => {
            setFingerColor(true)
        }, 1000);

        // console.log("ok 😍")
    }


    return (
        <Box>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "400", textAlign: "center" }} sx={styles.pageTitle} variant="h5">
                Bienvenue dans le bureau de vote d'  <p style={{ marginTop: 0, color: "#FF7F00", fontWeight: "bold" }}> {localite ? localite : 'Votre localite'} </p>
            </Typography>

            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <img src={urne} />
                {
                    loading ? (
                        <div style={{
                            width: '100vw',
                            height: '100vh',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            overflow: "hidden"
                        }}>
                            <InfinitySpin
                                visible={true}
                                width="200"
                                color="#FF7200"
                                ariaLabel="infinity-spin-loading"
                            />
                        </div >) : (
                        <Paper sx={{ padding: 5, margin: 5 }} elevation={5}>
                            <Typography style={{ fontFamily: "Montserrat", fontWeight: "400", textAlign: "center", color: 'red', marginBottom: 50 }} sx={styles.pageTitle} variant="h6">
                                Veuillez entrer vos coordonnées pour procéder au vote *
                            </Typography>
                            <form onSubmit={handleSubmit}>

                                <Grid container spacing={3} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <Grid item xs={24} sx={{ width: '80%', textAlign: "center" }}>
                                        <TextField
                                            name="identifiant"
                                            required
                                            fullWidth
                                            id="identifiant"
                                            label="Entrez votre identifiant de vérification "
                                            autoFocus
                                            value={identifiant}
                                            onChange={handleChange}
                                            variant="standard"
                                        />

                                    </Grid>

                                    {valide ? <img style={{ width: 25, height: 25 }} src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-1024.png" /> : <img style={{ width: 25, height: 25 }} src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-1024.png" />}
                                    {
                                        changeFinger ?
                                            (
                                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 15 }}>
                                                    <img style={{
                                                        width: 100,
                                                        height: 135,
                                                    }} src={Finger} />
                                                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                                                    </Alert>
                                                </div>
                                            ) : (
                                                <Grid
                                                    onClick={handleFinger}
                                                    style={{
                                                        width: 100,
                                                        height: 135,
                                                        background: "rgb(247, 249, 247)",
                                                        margin: '1rem auto',
                                                        borderRadius: 70,
                                                        position: 'relative',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            position: 'relative',
                                                            top: 0,
                                                            transform: 'translateX(100%)',
                                                            width: 250,
                                                            height: '5px',
                                                            background: fingerColor ? `linear-gradient(45deg, #027314, #027314)` : `linear-gradient(45deg, #FF7200, #FF7200)`,
                                                            animation: 'slideUpDown 5s infinite',
                                                            zIndex: 1
                                                        }}
                                                    >
                                                    </div>
                                                </Grid>)
                                    }
                                    {/* <Grid item xs={24} style={{ textAlign: "center" }}> */}
                                    <Button
                                        style={{ background: "#027314", width: '50vw', padding: 5 }}
                                        type="submit"
                                        variant="contained"
                                        sx={{ mt: 3 }}
                                        disabled={loading}  // Désactiver le bouton pendant le chargement
                                    >
                                        {loading ? "Vérification en cours..." : "Vérifier"}
                                    </Button>
                                </Grid>
                            </form>
                            <ToastContainer />
                        </Paper>
                    )
                }
            </CardContent>
            <SweetAlert2 />

        </Box >
    );
}

export default Dashboard;

/**
 * @type {import("@mui/material").SxProps}
 */

const styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: '280px 3',
        maxWidth: 1400
    },
    item: {
        mb: 2,
    },
    divider: {
        my: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    cardAction: {
        mt: 2
    },
    ideaContent: {
        display: 'flex',
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    ideaQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    avatar: {
        width: '30px',
        height: 'auto',
        marginRight: 1
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridAutoRows: '25px'
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center',
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    insiderImage: {
        width: '100%',
        mt: 1
    }
}

