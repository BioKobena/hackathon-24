import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from 'axios'
import SweetAlert2 from 'react-sweetalert2';
import Swal from 'sweetalert2';
import { InfinitySpin } from 'react-loader-spinner'


export default function Etudiant() {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    uniqueNum: '',
    nom: '',
    prenoms: '',
    sexe: '',
    dateNaiss: '',
    lieuNaissance: '',
    profession: '',
    domicile: '',
    nomPere: '',
    prenomPere: '',
    dateNaissPere: '',
    nomMere: '',
    prenomMere: '',
    dateNaissMere: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (formData.uniqueNum.length !== 11) {
      Swal.fire({
        title: 'Erreur',
        text: "Le numéro d'identification doit contenir exactement 11 caractères.",
        icon: 'error',
      });
      return; // Arrête la fonction si la longueur est incorrecte
    }
    try {
      const response = await axios.post('http://localhost:8000/createElecteur', formData);

      if (response.data.success) {
        Swal.fire({
          title: 'Succès',
          text: response.data.message,
          icon: 'success',
        });
        setFormData({
          uniqueNum: '',
          nom: '',
          prenoms: '',
          sexe: '',
          dateNaiss: '',
          lieuNaissance: '',
          profession: '',
          domicile: '',
          nomPere: '',
          prenomPere: '',
          dateNaissPere: '',
          nomMere: '',
          prenomMere: '',
          dateNaissMere: '',
        });
      } else if (response.status == 400) {
        console.log(response.data.message)
        Swal.fire({
          title: 'Erreur',
          text: "Cette personne existe déjà !",
          icon: 'error',
        });
      }
    } catch (error) {
      console.error('Erreur lors de la requête vers le serveur:', error);

      console.log(error.response.data);
      Swal.fire({
        title: 'Erreur',
        text: error.response.data.message,
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
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
          <React.Fragment>
            <Paper sx={{ padding: 5, margin: 5 }} elevation={5}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="uniqueNum"
                      required
                      fullWidth
                      id="uniqueNum"
                      label="Numéro nationale d'identification"
                      autoFocus
                      value={formData.uniqueNum}
                      onChange={handleChange}
                      variant="standard"
                      error={formData.uniqueNum.length !== 11} 
                      helperText={formData.uniqueNum.length !== 11 ? "Le numéro d'identification doit contenir exactement 11 caractères." : 'Le numéro est correct'}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="nom"
                      required
                      fullWidth
                      id="nom"
                      label="Nom"
                      autoFocus
                      value={formData.nom}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="prenoms"
                      required
                      fullWidth
                      id="prenoms"
                      label="Prénoms"
                      autoFocus
                      value={formData.prenoms}
                      onChange={handleChange}
                      variant='standard'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="sexe-label">Sexe</InputLabel>
                      <Select
                        labelId="sexe-label"
                        id="sexe"
                        value={formData.sexe}
                        label="Sexe"
                        onChange={(e) => handleSelectChange('sexe', e.target.value)}
                      >
                        <MenuItem value="masculin">Masculin</MenuItem>
                        <MenuItem value="feminin">Feminin</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="dateNaiss"
                      fullWidth
                      id="dateNaiss"
                      type="date"
                      value={formData.dateNaiss}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lieuNaissance"
                      fullWidth
                      id="lieuNaissance"
                      label="Lieu de Naissance"
                      value={formData.lieuNaissance}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="profession"
                      fullWidth
                      id="profession"
                      label="Profession"
                      value={formData.profession}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="domicile"
                      fullWidth
                      id="domicile"
                      label="Domicile"
                      value={formData.domicile}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="nomPere"
                      fullWidth
                      id="nomPere"
                      label="Nom du Père"
                      value={formData.nomPere}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="prenomPere"
                      fullWidth
                      id="prenomPere"
                      label="Prénom du Père"
                      value={formData.prenomPere}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="dateNaissPere"
                      fullWidth
                      id="dateNaissPere"
                      type="date"
                      value={formData.dateNaissPere}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="nomMere"
                      fullWidth
                      id="nomMere"
                      label="Nom de la Mère"
                      value={formData.nomMere}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="prenomMere"
                      fullWidth
                      id="prenomMere"
                      label="Prénom de la Mère"
                      value={formData.prenomMere}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="dateNaissMere"
                      fullWidth
                      id="dateNaissMere"
                      type="date"
                      value={formData.dateNaissMere}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={24} style={{ textAlign: "center" }}>
                    <Button style={{ background: "#027314", width: '50vw', padding: 5 }} type="submit" variant="contained" sx={{ mt: 3 }}>
                      Suivant
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </React.Fragment>

        )
      }
      <SweetAlert2 />

    </>


  );
}
