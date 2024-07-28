import { useState } from 'react';
import { Box, Button, TextField, Typography, Alert, IconButton } from '@mui/material';
import { loginAPI } from '../API/usersAPI';
import { useNavigate } from 'react-router-dom';
import LoginImage from '../Images/RegisterLoginImage.jpg'
import HomeIcon from '@mui/icons-material/Home';
import LanguagesButtons from './LanguagesButtons';
import { useTranslation } from 'react-i18next';

  const Login = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const [disappearButton, setDisappearButton] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setDisappearButton(true);
      const response = await loginAPI(email, password);
      if(response.status === 201)
      {
        localStorage.setItem("token", response.data);
        navigate('/dashboard')
        setDisappearButton(false);
      }
      else
      {
        setDisappearButton(false);
        setMessage(response?.data)
      }
    } 
    catch (error: any) {
      setDisappearButton(false);
      setMessage(error?.response?.data)
    }
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{
      backgroundImage: `url(${LoginImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      width: '100vw',
      height: '100vh',
    }}>
        <IconButton onClick={handleClick} sx={{ position:'absolute', top:'5px' , left:'15px'}}>
          <HomeIcon sx={{ fontSize: {xs:'80px', sm:'110px'}, color:'black'}}/>
        </IconButton>
        <Box sx={{ position:'absolute', top:'10px' , right:'15px'}}>
          <LanguagesButtons />
        </Box>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent:'center',
          backgroundColor:'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
          width:{xs:'80%', sm:'35%'},
          height:{xs:'35%', sm:'35%'},
          pt:'10px',
          pb:'10px'
         }}>
          <Typography  variant="h3" sx={{ fontSize:{xs:'50px', sm:'70px'}}}>
            {t('LOGIN')}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label={t('EMAIL')}
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{width:'90%', backgroundColor:'whitesmoke'}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            name="password"
            label={t('PASSWORD')}
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
            color="primary"
            sx={{ mb: 2 , mt:2,  fontSize:{xs:'22px', sm:'25px'}, width:{xs:'40%', sm:'30%'}}}
          >
            {t('LOGIN')}
          </Button>
          {message && (
            <Alert severity={message.includes('successful') ? 'success' : 'error'}>{message}</Alert>
          )}
        </Box>
    </Box>
  );
};

export default Login;