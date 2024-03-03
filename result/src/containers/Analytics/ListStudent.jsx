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
    TableBody
} from '@mui/material';

import axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Valide from '../Auth/valide.svg'
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


    return (
        <Box style={{ width: "100vw", height: "100vh" }}>
            <Box style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
                <Paper sx={{ width: "90%", position: "absolute", top: 150, borderRadius: 1.5, borderWidth: 2, padding: 2 }} elevation={6}>
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
                            <MenuItem value={20}>BahiliKro</MenuItem>
                        </Select>
                    </FormControl>
                    <TableContainer sx={{ mt: 2, borderRadius: 1 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:'1.3rem' }}> <span style={{color:"green"}}>20005</span> <br/> INSCRITS </TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:'1.3rem' }}> <span style={{color:"green"}}>20005</span> <br/>TOTAL VOTANT</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:'1.3rem' }}> <span style={{color:"green"}}>20005</span> <br/>TAUX DE PART.T</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:'1.3rem' }}> <span style={{color:"green"}}>20005</span> <br/>BULLETINS NULS</TableCell>
                                    <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#FFAFAA", color: '#FFFFFF', fontFamily: "Montserrat", padding: 3, borderBlock:1,textAlign:"center", fontSize:'1.3rem' }}> <span style={{color:"green"}}>20005</span> <br/>SUFFRAGE EXPRIMÉ</TableCell>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
                </Paper>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Paper elevation={5}>
                        <div>

                        </div>
                    </Paper>
                    <Paper elevation={5}>
                        <div>
                            Contenu
                        </div>
                    </Paper>

                </div>
            </Box>
            {/* <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h4" sx={{ margin: '0.3rem', fontFamily: "Montserrat", fontWeight: "500", color: "#ff7200" }}>
                    Merci, votre choix a été enregistré avec succès
                </Typography>
                <img src={Valide} />
            </Box>
            <SweetAlert2 /> */}
        </Box>
    )
}
