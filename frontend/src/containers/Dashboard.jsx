import { Avatar, Box, Card, CardContent, Divider, Typography, Grid } from "@mui/material";
import ColorText from "../components/ColorText";
import React, { useState, useEffect } from "react";
import LatestVideoCard from "../components/LatestVideoCard";
import AppWidgetSummary from "../app/AppWidgetSummary";
import axios from "axios";
import Chart from 'react-apexcharts'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Dashboard() {
    const [electeur, setElecteur] = useState(0);
    const location = useLocation()
    const [localite, setLocalite] = useState("Boundiali")

    useEffect(() => {
        const params = location.state;
        if (params && params.localite) {
            setLocalite(params.localite);
            toast.success('Super, connexion ok');
        }
        console.log(params)
        axios.get('http://localhost:8000/electeurs')
            .then((data) => {
                setElecteur(data.data.electeurs.length)
            }).catch((error) => {
                console.error(error)
            })
    }, [location.state]);


    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [19, 20, 21, 22, 23, 24, 25, 26]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    });
    const containerDataInfo = { display: "flex", justifyContent: "center", alignItems: "center" }
    return (
        <Box>
            <Typography style={{ fontFamily: "Montserrat", fontWeight: "400", textAlign: "center" }} sx={styles.pageTitle} variant="h4">
                Bienvenue sur votre espace de connexion de <p style={{ marginTop: 0, color: "#FF7F00", fontWeight: "bold" }}> {localite ? localite : 'Votre localite'} </p>
            </Typography>
            <CardContent>
                <Grid container spacing={3} style={containerDataInfo}>
                    <Grid item xs={19} sm={3} md={3}>
                        <AppWidgetSummary
                            title="Electeurs"
                            total={electeur > 0 ? electeur : '0'}
                            color="info"
                        />
                    </Grid>
                    <Grid item xs={19} sm={3} md={3}>
                        <AppWidgetSummary
                            title="Electeurs"
                            total={electeur > 0 ? electeur : '0'}
                            color="info"
                        />
                    </Grid>
                    <Grid item xs={19} sm={3} md={3}>
                        <AppWidgetSummary
                            title="Electeurs"
                            total={electeur > 0 ? electeur : '0'}
                            color="info"
                        />
                    </Grid>
                    <Chart options={chartData.options} series={chartData.series} type="bar" width={500} height={320} />

                    {/* 
                    <div className="row">
                        <div className="mixed-chart">
                            <Chart
                                options={chartData.options}
                                series={chartData.series}
                                type="bar"
                                width="500"
                            />
                        </div>
                    </div> */}
                </Grid>

            </CardContent>
            {/* 
            <Box sx={styles.columnsContainer}>
                <LatestVideoCard sx={styles.item} />
                <Card sx={styles.item}>
                    <CardContent>
                        <Typography variant="cardTitle">Latest comments</Typography>
                        <ColorText color="neutral.normal"><Typography variant="h7">Channel comments I haven't responded to</Typography></ColorText>

                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
                            <Box>
                                <Box sx={styles.commentDetailsSection}>
                                    <Typography sx={styles.postMeta}>React with Masoud</Typography>
                                    <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                                </Box>

                                <Typography sx={styles.commentText}>
                                    Get tips from a successful creator on how to take a YouTube channel and turn it into a business that earns you money
                                </Typography>
                            </Box>
                            <Box
                                component="img"
                                sx={styles.videoThumbnail}
                                src="src/assets/thumbnail.png"
                            />

                        </Box>
                        <Divider sx={styles.divider} />
                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />

                            <Box>
                                <Box sx={styles.commentDetailsSection}>
                                    <Typography sx={styles.postMeta}>React with Masoud</Typography>
                                    <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                                </Box>

                                <Typography sx={styles.commentText}>
                                    How can I deploy this?
                                </Typography>
                            </Box>
                            <Box
                                component="img"
                                sx={styles.videoThumbnail}
                                src="src/assets/thumbnail.png"
                            />

                        </Box>
                        <Divider sx={styles.divider} />
                        <Box sx={styles.commentRow}>
                            <Avatar sx={styles.avatar} alt="Masoud" src="src/assets/avatars/masoud.jpeg" />
                            <Box>
                                <Box sx={styles.commentDetailsSection}>
                                    <Typography sx={styles.postMeta}>React with Masoud</Typography>
                                    <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                                </Box>

                                <Typography sx={styles.commentText}>
                                    Thank you, was very helpful.
                                </Typography>
                            </Box>

                            <Box
                                component="img"
                                sx={styles.videoThumbnail}
                                src="src/assets/thumbnail.png"
                            />

                        </Box>


                        <Typography sx={styles.cardAction} variant="link">VIEW MORE</Typography>
                    </CardContent>
                </Card>

                <Card sx={styles.item}>
                    <CardContent sx={styles.ideaContent}>
                        <Box>
                            <Typography variant="cardTitle">Ideas for you</Typography>
                            <Typography sx={styles.ideaQuestion}>Ready to get business savvy?</Typography>
                            <Typography variant="h7">
                                Get tips from a successful creator on how to take a YouTube channel and turn it into a business that earns you money
                            </Typography>
                            <Typography sx={styles.cardAction} variant="link">GET STARTED NOW</Typography>
                        </Box>
                        <Box
                            component="img"
                            sx={styles.ideaImage}
                            src="src/assets/study-icon.png"
                        />
                    </CardContent>
                </Card>

                <Card sx={styles.item}>
                    <CardContent sx={styles.ideaContent}>
                        <Box>
                            <Typography variant="cardTitle">Creator Insider</Typography>
                            <Box
                                component="img"
                                sx={styles.insiderImage}
                                src="src/assets/thumbnail2.png"
                            />
                            <Typography sx={styles.ideaQuestion}>Ready to boost your skills using AI tools?</Typography>
                            <Typography variant="h7">
                                Get tips from a successful creator on how to take a YouTube channel and turn it into a business that earns you money
                            </Typography>
                            <Typography sx={styles.cardAction} variant="link">WATCH ON YOUTUBE</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box> */}
            <ToastContainer />
        </Box>
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

