import React, { useState, useEffect } from 'react';
import SweetAlert2 from 'react-sweetalert2';
import {
    Box,
    IconButton,
    Alert,
    CircularProgress
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function ListStudent() {
    const [electeurs, setElecteurs] = useState([]);
    const [swalProps, setSwalProps] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/electeurs')
            .then((data) => {
                setElecteurs(data.data.electeurs)
                console.log(data)
            }).catch((error) => {
                console.error(error)
            })
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center" }}>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem" }}>
                <Typography variant="h5" sx={{ margin: '0.3rem', fontFamily: "Montserrat", fontWeight: "500" }}>
                    Liste des électeurs
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sm={15} md={40} align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF' }}>N° ordre</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>N° Unique</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Nom</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Prénoms</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Sexe</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Date de Naissance</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Lieu de naissance</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Profession</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Domicile</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Nom et prénoms du père</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Date naissance père</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Nom et prénoms de la mère</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Date naissance la mère</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Date d'inscription</TableCell>
                                <TableCell align="left" sx={{ fontWeight: "bold", backgroundColor: "#027314", color: '#FFFFFF', fontFamily: "Montserrat" }}>Validation</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                electeurs.length == 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={15} align="center">
                                            <Alert align="center" severity="info">Aucune données disponible</Alert>
                                        </TableCell>
                                    </TableRow>) : (
                                    electeurs.map((electeur) => (
                                        <TableRow key={electeur.id}>
                                            <TableCell align="left">{electeur.order}</TableCell>
                                            <TableCell align="left">{electeur.uniqueNum}</TableCell>
                                            <TableCell align="left">{electeur.nom}</TableCell>
                                            <TableCell align="left">{electeur.prenoms}</TableCell>
                                            <TableCell align="left">{electeur.sexe}</TableCell>
                                            <TableCell align="left">{electeur.dateNaiss}</TableCell>
                                            <TableCell align="left">{electeur.lieuNaissance}</TableCell>
                                            <TableCell align="left">{electeur.profession}</TableCell>
                                            <TableCell align="left">{electeur.domicile}</TableCell>
                                            <TableCell align="left">{electeur.nomPere}</TableCell>
                                            <TableCell align="left">{electeur.dateNaissPere}</TableCell>
                                            <TableCell align="left">{electeur.nomMere}</TableCell>
                                            <TableCell align="left">{electeur.dateNaissMere}</TableCell>
                                            <TableCell align="left">{electeur.dateInscription}</TableCell>
                                            <TableCell align="left">
                                                <CircularProgress size={24} color="inherit" />
                                            </TableCell>
                                        </TableRow>
                                    )))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <SweetAlert2 />
        </Box>
    )
}
