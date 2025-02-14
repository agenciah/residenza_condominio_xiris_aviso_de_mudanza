import Mudanzas_form from './mudanzas_form';
import { Container, Typography, Box } from '@mui/material';
import logo_xiris from "/home/alex1986/aviso_mudanza_xiris/src/assets/logo_xiris ac.png";
import residenza_logo from "/home/alex1986/aviso_mudanza_xiris/src/assets/Residenza_logo.jpg";

function App() {
  return (
    <Container className="App">
      {/* Contenedor de los logos */}
      <Box 
        sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "10px 0"
        }}
      >
        <img 
          src={residenza_logo} 
          alt="Residenza Logo" 
          style={{ maxWidth: "80px", height: "auto" }} 
        />
        <img 
          src={logo_xiris} 
          alt="Xiris Logo" 
          style={{ maxWidth: "80px", height: "auto" }} 
        />
      </Box>

      {/* Contenido principal */}
      <header className="App-header">
        <Typography 
          variant="h5" 
          component="h1" 
          sx={{ 
            color: '#262161', 
            fontSize: { xs: "1.2rem", sm: "1.7rem" }, 
            fontWeight: "bold",
            mb: 2 // Espacio entre los logos y el título
          }}
        >
          Formulario para Airbnb, Condominio Xiris.
        </Typography>
        <Typography sx={{ color: '#262161', mt: 2 }}>
          Por favor llena los campos, descarga la imagen con el botón al final de la página. 
          Esta imagen compártela al administrador del condominio.
        </Typography>
      </header>
      <Mudanzas_form />
    </Container>
  );
}

export default App;
