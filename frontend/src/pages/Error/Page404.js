import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";

// ----------------------------------------------------------------------

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <>
      <Helmet>
        <title> Page introuvable </title>
      </Helmet>

      <Container>
        <StyledContent sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            Désolé, page introuvable !
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Désolé, nous n'avons pas trouvé la page que vous recherchez.
          </Typography>

          <Box
            component="img"
            src="/assets/illustrations/illustration_404.svg"
            sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}
          />

          <Button
            to="/"
            size="large"
            variant="contained"
            component={RouterLink}
          >
            Retour à l'accueil
          </Button>
        </StyledContent>
      </Container>
    </>
  );
}
