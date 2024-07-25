import  { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, IconButton } from '@mui/material';
import { registerAPI } from '../API/usersAPI';
import { useNavigate } from 'react-router-dom';
import RegisterImage from '../Images/RegisterLoginImage.jpg'
import HomeIcon from '@mui/icons-material/Home';

const Register = () => {

  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await registerAPI(name, phone, email, password);
      if(response.status === 201)
      {
        setMessage('Registration successful');
        navigate('/login')
      }
    } catch (error: any) {
        setMessage(error?.response?.data)
    }
  };

  
  const handleClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{
      backgroundImage: `url(${RegisterImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width: '100vw',
      height: '100vh',
    }}>
      <IconButton onClick={handleClick} sx={{ position:'absolute', top:'0px' , left:'10px'}}>
        <HomeIcon sx={{ fontSize: 100, color:'black'}}/>
      </IconButton>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        width:'60%',
        height:'50%',
        pt:'20px',
        pb:'20px'
      }}>
        <Typography variant="h3" fontSize='60px'>
          Register
        </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{width:'90%', backgroundColor:'whitesmoke'}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{width:'90%', backgroundColor:'whitesmoke'}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{width:'90%', backgroundColor:'whitesmoke'}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{width:'90%', backgroundColor:'whitesmoke'}}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 , fontSize:'30px' , width:'25%' }}
          >
            Register
          </Button>
          {message && (
            <Alert severity={message.includes('successful') ? 'success' : 'error'}>{message}</Alert>
          )}
      </Box>
    </Box>
  );
};

export default Register;