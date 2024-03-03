import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'

const defaultTheme = createTheme();

export default function Login() {


    const [identifiant, setIdentifiant] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigate()
    const [btnLoading, setBtnLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setBtnLoading(true);
            const response = await axios.post('http://localhost:8000/authSite', { identifiant, password });
            console.log(response);
            const data = response.data;
            const params = response.data.site;
            console.log(params);
            console.log(response.data.siteAuth);
            if (response.data.success === true) {
                navigation('/', { state: params });
                toast.success('Super, bienvenue sur la plateforme IPIF Admin');
            } else {
                toast.error(data.message || 'Une erreur est survenue lors de l\'authentification');
            }
        } catch (error) {
            console.error(error);
            toast.error('Une erreur est survenue lors de l\'authentification');
        } finally {
            setBtnLoading(false); 
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', width: '100vw' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{

                        backgroundImage: 'url(https://res.cloudinary.com/drrf4valz/image/upload/v1709328854/tbjzqiovdq8cqkgmaqen.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid style={{ marginLeft: 0 }} item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
                    <Box
                        sx={{
                            my: 20,
                            mx: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h2">
                            Akwaba
                        </Typography>
                        <Typography style={{ textAlign: "center" }} component="h1" variant="h5">
                            Veuillez entrer vos informations pour vous connecter
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="identifiant"
                                    label="Identifiant"
                                    name="identifiant"
                                    autoComplete='off'
                                    autoFocus
                                    value={identifiant}
                                    onChange={(e) => setIdentifiant(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mot de passe"
                                    type="password"
                                    id="password"

                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid sm={6} md={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        mt: 3,
                                        mb: 2,
                                        padding: 1.5,
                                        background: "#027314",
                                        fontWeight: "bold",
                                        position: 'relative', // Ajoutez cette ligne pour positionner le spinner
                                    }}
                                    disabled={btnLoading}
                                >
                                    {btnLoading ? (
                                        <CircularProgress
                                            color="inherit"
                                            size={20} // Choisissez la taille du spinner
                                            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} // Positionne le spinner au centre du bouton
                                        />
                                    ) : (
                                        'Se connecter'
                                    )}
                                </Button>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <ToastContainer />
        </ThemeProvider>
    );
}