import  { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, IconButton } from '@mui/material';
import { registerAPI } from '../API/usersAPI';
import { useNavigate } from 'react-router-dom';
import RegisterImage from '../Images/RegisterLoginImage.jpg'
import HomeIcon from '@mui/icons-material/Home';

const Register = () => {

  const navigate = useNavigate();
  
  const [disappearButton, setDisappearButton] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setDisappearButton(true);
      const response = await registerAPI(name, phone, email, password);
      if(response.status === 201)
      {
        alert('Registration successful');
        navigate('/login')
        setDisappearButton(false);
      }
      else
      {
        setDisappearButton(false);
        setMessage(response?.data)
      }
    } catch (error: any) {
        setDisappearButton(false);
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
      <IconButton onClick={handleClick} sx={{ position:'absolute', top:'10px' , left:'15px'}}>
          <HomeIcon sx={{ fontSize: {xs:'80px', sm:'110px'}, color:'black'}}/>
      </IconButton>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center',
          backgroundColor:'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
          width:{xs:'80%', sm:'35%'},
          height:{xs:'55%', sm:'55%'},
          pt:'10px',
          pb:'10px'
         }}>
        <Typography variant="h3" sx={{ fontSize:{xs:'50px', sm:'70px'}}}>
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
            disabled={disappearButton}
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ mb: 2 , mt:2,  fontSize:{xs:'22px', sm:'25px'}, width:{xs:'40%', sm:'30%'}}}
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