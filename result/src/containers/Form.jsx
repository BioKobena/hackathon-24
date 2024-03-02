import React, { useState, useEffect } from 'react';
import {
  Card,
  Paper,
  Typography,
  Button,
  Grid
} from "@mui/material";
import { InfinitySpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Bahili from '../components/bahili.jpeg'
export default function Etudiant() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChoose = () => {
    setLoading(true)
    setTimeout(() => {
      navigate('/electeur')
    }, 2000);

  }
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
          </div >) : (<div style={{ margin: 15, display: "flex", justifyContent: "center", alignItems: "center", gap: 15 }}>
            <Card onClick={handleChoose} sx={{ borderRadius: 3, width: 380, height: 380, position: "relative" }}>
              <img style={{ width: 380, height: 380 }} src={Bahili} />
              <Grid item xs={24} style={{ textAlign: "center", position: "absolute", bottom: "2rem", left: '20%' }}>
                <Button
                  style={{ background: "#027314", width: '20vw', padding: 5, textAlign: "center" }}
                  type="submit"
                  variant="contained"
                // sx={{ mt: 3 }}
                >
                  Je vote
                </Button>
              </Grid>
            </Card>

            <Card onClick={handleChoose} sx={{ borderRadius: 3, width: 380, height: 380, position: "relative" }}>
              <img style={{ width: 380, height: 380 }} src="https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1256,height=628,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2023/05/15/jad20230515-ass-civ-ble-goude-locales-1256x628-1684166573.jpg" />
              <Grid item xs={24} style={{ textAlign: "center", position: "absolute", bottom: "2rem", left: '20%' }}>
                <Button
                  style={{ background: "#027314", width: '20vw', padding: 5, textAlign: "center" }}
                  type="submit"
                  variant="contained"
                // sx={{ mt: 3 }}
                >
                  Je vote
                </Button>
              </Grid>
            </Card>
            <Card onClick={handleChoose} sx={{ borderRadius: 3, width: 380, height: 380, background: "#FF7200", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography style={{ fontFamily: "Montserrat", fontWeight: '800', color: "#fff" }}>
                Bulletin nul
              </Typography>
            </Card>
          </div>
        )
      }


    </>
  );
}
