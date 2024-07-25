import { useNavigate } from 'react-router-dom';
import { Box, Button , Typography } from '@mui/material';
import HomeImage from '../Images/HomeImage.jpg'

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <Box  sx={{
      backgroundImage: `url(${HomeImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width: '100vw',
      height: '100vh',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent:'center',
          backgroundColor:'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
          width:'35%',
          height:'35%'
        }}
      >
        <Typography variant="h3" fontSize='70px'>
          HOME
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mb: 2 , fontSize:'25px'}}
            size='large'
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mb: 2 , fontSize:'25px'}}
            size='large'
            onClick={handleRegisterClick}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;