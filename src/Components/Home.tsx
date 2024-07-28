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
          width:{xs:'80%', sm:'35%'},
          height:{xs:'30%', sm:'35%'}
        }}
      >
        <Typography variant="h3" sx={{ fontSize:{xs:'50px', sm:'70px'}}}>
          HOME
        </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mb: 2 , mt:2,  fontSize:{xs:'22px', sm:'25px'}, width:{xs:'60%', sm:'60%'}}}
            size='large'
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mb: 2 , mt:2,  fontSize:{xs:'22px', sm:'25px'}, width:{xs:'60%', sm:'60%'}}}
            size='large'
            onClick={handleRegisterClick}
          >
            Register
          </Button>
      </Box>
    </Box>
  );
};

export default Home;