import React, { useState, useEffect } from 'react';
import SweetAlert2 from 'react-sweetalert2';
import {
    Box,
    IconButton,
    Alert,
    Paper,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    TableContainer,
    Table,
    TableCell,
    TableRow,
    TableHead,
    TableBody,
    Avatar,
    Typography,
    Grid
} from '@mui/material';
import Chart from 'react-apexcharts'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);
import { useNavigate } from 'react-router-dom'

export default function ListStudent() {
    const navigate = useNavigate()
    useEffect(() => {

    }, [])

    const [localite, setLocalite] = React.useState('');

    const handleChange = (event) => {
        setLocalite(event.target.value);
    };

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
                name: "Semaine du 30 Avril",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    });

    const [secondChart, setSecondChart] = useState({
        options: {},
        series: [44, 55],
        labels: ['Bahili Esli', 'Bio Paul',]
    })



    return (
        <Box style={{ width: "100vw", height: "100vh", marginBottom:5 }}>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", padding:5 }}>
                <Paper sx={{ width: "90%", position: "absolute", top: 150, borderRadius: 1.5, borderWidth: 2, padding: 2, zIndex:1 }} elevation={3}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Section</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={localite}
                            label="Section"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>BékéKro</MenuItem>
                            <MenuItem value={20}>KouassiKro</MenuItem>
                            <MenuItem value={30}>BahiliKro</MenuItem>
                        </Select>
                    </FormControl>
                    <TableContainer sx={{ mt: 2, borderRadius: 1 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:"1.5rem"}}> <span style={{color:"green"}}>20005</span> <br/> INSCRITS </TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:"1.5rem" }}> <span style={{color:"green"}}>17005</span> <br/>TOTAL VOTANT</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:"1.5rem" }}> <span style={{color:"green"}}>89%</span> <br/>TAUX DE PARTICIPATION</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:"1.5rem" }}> <span style={{color:"green"}}>205</span> <br/>BULLETINS NULS</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:"1.5rem" }}> <span style={{color:"green"}}>15005</span> <br/>SUFFRAGE EXPRIMÉ</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Paper>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom:5}}>
                    <Paper sx={{width:'22%', height:"80%",position: "absolute", top: 380, left:75}} elevation={2}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                <Avatar src="https://biopaulkobena.netlify.app/images/portfolio-bio.png" alt="Bio Paul" sx={{ width: 320, height: 500, borderRadius:3, background:"#000", marginTop:-1 }} />
                <Typography variant="h6" sx={{ textAlign: "center", fontFamily: "Montserrat", fontWeight: "800", fontSize:"2rem", color:"#FF7200" }}>
                 Bio Paul
                </Typography>
                    <Alert severity="success" sx={{ textAlign: "center", fontFamily: "Montserrat", fontWeight: "800", marginTop: 1, fontSize:"1.5rem" }}>
                    25000 
                    voix
                 </Alert>
                </div>
                    </Paper>
                    <Paper sx={{width:'67%', height:"80%",position: "absolute", top: 380, right:75}} elevation={2}>
                        <div style={{width:'100%'}}>
                        <Grid style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: 100, width:"100%" }}>
                        <Chart options={chartData.options} series={chartData.series} type="bar" width={500} height={320} />
                        <Chart options={secondChart.options} series={secondChart.series} type="donut" width="380" />

                    </Grid>
                        </div>
                    </Paper>

                </div>
            </Box>
            <TableContainer sx={{ mt: 2, borderRadius: 1, position:"absolute", top:1050 }}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock: 1, textAlign: "center" }}>ID</TableCell>
                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock: 1, textAlign: "center" }}>Numéro de Vote</TableCell>
                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock: 1, textAlign: "center" }}>Electeurs</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
    <TableRow>
        <TableCell align="center">1</TableCell>
        <TableCell align="center">VOTE-001</TableCell>
        <TableCell align="center">Electeur 1</TableCell>
    </TableRow>
    <TableRow>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">VOTE-002</TableCell>
        <TableCell align="center">Electeur 2</TableCell>
    </TableRow>
    <TableRow>
        <TableCell align="center">3</TableCell>
        <TableCell align="center">VOTE-003</TableCell>
        <TableCell align="center">Electeur 3</TableCell>
    </TableRow>
    <TableRow>
        <TableCell align="center">4</TableCell>
        <TableCell align="center">VOTE-004</TableCell>
        <TableCell align="center">Electeur 4</TableCell>
    </TableRow>
    <TableRow>
        <TableCell align="center">5</TableCell>
        <TableCell align="center">VOTE-005</TableCell>
        <TableCell align="center">Electeur 5</TableCell>
    </TableRow>
</TableBody>
    </Table>
</TableContainer>

        </Box>
    )
}
