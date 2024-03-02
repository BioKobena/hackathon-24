import React, { useState, useEffect } from 'react';
import SweetAlert2 from 'react-sweetalert2';
import {
    Box,
    IconButton,
    Alert,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Paper from '@mui/material/Paper';
import axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Valide from '../Auth/valide.svg'
const MySwal = withReactContent(Swal);
import { useNavigate } from 'react-router-dom'

export default function ListStudent() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 10000);
    }, [])

    return (
        <Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "3rem", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h4" sx={{ margin: '0.3rem', fontFamily: "Montserrat", fontWeight: "500", color: "#ff7200" }}>
                    Merci, votre choix a été enregistré avec succès
                </Typography>
                <img src={Valide} />
            </Box>
            <SweetAlert2 />
        </Box>
    )
}
