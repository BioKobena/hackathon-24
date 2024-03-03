import {
    Avatar, Box, Card, CardContent, Divider,
    Typography, Grid, TextField, Button, Alert, Paper,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import resultat from './result.svg'

function Dashboard() {

    const [searchValue, setSearchValue] = useState('');
    const [filterType, setFilterType] = useState("");

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
    };

    useEffect(() => {

    })

    const citiesData = [
        {
            name: "Abidjan",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 30 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 20 },
            ],
            nul: 0
        },
        {
            name: "Bouaké",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 30 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 80 },
            ],
            nul: 5
        },
        {
            name: "Yamoussoukro",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 40 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 25 },
            ],
            nul: 2
        },
        {
            name: "San Pedro",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 60 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 15 },
            ],
            nul: 8
        },
        {
            name: "Korhogo",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 55 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 40 },
            ],
            nul: 3
        },
        {
            name: "Daloa",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 25 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 30 },
            ],
            nul: 1
        },
        {
            name: "Man",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 45 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 35 },
            ],
            nul: 4
        },
        {
            name: "Gagnoa",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 20 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 15 },
            ],
            nul: 0
        },
        {
            name: "Katiola",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 30 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 25 },
            ],
            nul: 2
        },
        {
            name: "Bondoukou",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 35 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 30 },
            ],
            nul: 1
        },
        {
            name: "Odienne",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 40 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 20 },
            ],
            nul: 3
        },
        {
            name: "Ferkessedougou",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 25 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 15 },
            ],
            nul: 0
        },
        {
            name: "Sassandra",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 18 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 22 },
            ],
            nul: 2
        },
        {
            name: "Grand-Bassam",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 28 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 30 },
            ],
            nul: 1
        },
        {
            name: "Aboisso",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 15 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 20 },
            ],
            nul: 0
        },
        {
            name: "Agboville",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 22 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 18 },
            ],
            nul: 1
        },
        {
            name: "Dabou",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 30 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 25 },
            ],
            nul: 3
        },
        {
            name: "Dimbokro",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 40 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 35 },
            ],
            nul: 2
        },
        {
            name: "Tiassale",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 28 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 22 },
            ],
            nul: 0
        },
        {
            name: "Boundiali",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 40 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 30 },
            ],
            nul: 1
        },
        {
            name: "Odienné",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 50 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 20 },
            ],
            nul: 5
        },
        {
            name: "Abengourou",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 35 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 40 },
            ],
            nul: 3
        },
        {
            name: "Bingerville",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 28 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 32 },
            ],
            nul: 2
        },
        {
            name: "Divo",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 22 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 18 },
            ],
            nul: 1
        },
        {
            name: "Séguéla",
            candidates: [
                { id: 1, name: "Bio Paul", photo: "https://media.licdn.com/dms/image/D4E03AQGa9sTQUC8tRQ/profile-displayphoto-shrink_800_800/0/1697301555895?e=1714608000&v=beta&t=_DEUTCJy5OuLH_t9_uRLim9z19ao22kb1FMfxUqakSU", votes: 38 },
                { id: 2, name: "Bahili Esli", photo: "https://res.cloudinary.com/drrf4valz/image/upload/v1709415697/ix1mqnlqgpsaun2dghxd.jpg", votes: 25 },
            ],
            nul: 3
        },

        // ... Ajoute d'autres données selon tes besoins

    ];

    const filteredCities = citiesData.filter((city) =>
        city.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <Box>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "600", textAlign: "center", marginTop: 25 }} sx={styles.pageTitle} variant="h5">
                Veuillez consulter les résultats par zone
            </Typography>

            <Box>
                <div>
                    {/* <img style={{ width: 500, height: 500, position: "absolute", right: 5 }} src={resultat} /> */}
                </div>
            </Box>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
                <Paper elevation={1} sx={{ padding: 2, marginBottom: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Typography variant="h6">Recherchez les résultats par ville</Typography>
                        <TextField
                            label="Nom de la ville"
                            margin="normal"
                            id="filled-basic"
                            variant="filled"
                            value={searchValue}
                            style={{ width: 400, fontWeight: 'bold' }}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </Box>
                </Paper>


                <Box style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 15, flexWrap: "wrap" }}>
                    {filteredCities.map((city) => (
                        <Paper key={city.name} sx={{ padding: 0.5, marginBottom: 1 }}>
                            <Typography style={{ textAlign: "center", fontFamily: "Montserrat", fontWeight: "800", color: "#FF7200" }} variant="h5">{city.name}</Typography>
                            <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                {city.candidates.map((candidate) => (
                                    <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} key={candidate.id} item xs={6} md={6} lg={6} xl={6}>
                                        <Grid style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
                                            <Avatar src={candidate.photo} alt={candidate.name} sx={{ width: 100, height: 100, marginBottom: 2, fontWeight: "800", fontFamily: "Montserrat" }} />
                                            <Typography variant="h6" sx={{ textAlign: "center", fontFamily: "Montserrat" }}>
                                                {candidate.name}
                                            </Typography>
                                        </Grid>
                                        <Alert sx={{ width: 120, fontWeight: "bold" }} severity="success"> {candidate.votes} voix</Alert>
                                    </Grid>
                                ))}
                                <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                                    <Alert sx={{ width: 120 }} style={{ margin: 5 }} severity="warning">{city.nul.length == 0 || city.nul.length == 1 ? `${city.nul} nul` : `${city.nul} nuls`}</Alert>
                                    <Button sx={{ width: 120, height: 45 }} variant="contained">Voir plus</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Box>
            </CardContent>
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

