import { AppBar, Avatar, Badge, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, alpha, styled } from '@mui/material'
import { Mail, Notifications } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { verifyTokenAPI } from '../API/usersAPI';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import LanguagesButtons from './LanguagesButtons';


const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
  textAlign: 'center',
  backgroundColor:'#96C9F4'
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  [theme.breakpoints.up('xs')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {

  const { t } = useTranslation();

  //useState and useEffect for user name
  const[username,setUsername]=useState('');
  useEffect(()=>{
      async function getUsername(){
        setUsername((await verifyTokenAPI()).name)
      }
      const data = localStorage.getItem("token")
      if(data)
        getUsername();
      },[])

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  //const [open, setOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const sidebarClick = () => {
    
  };

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h4' sx={{display: {xs:"none", sm:"block"}}}>{t('WELCOME')} {username}</Typography>
        <IconButton onClick={sidebarClick} sx={{display:{xs:'block', sm:'none'}, color:'white'}}>
          <MenuIcon fontSize='large'/>
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}/>
        </Search>
        <Box>
          <LanguagesButtons />
        </Box>  
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={handleClick}
          />
        </Icons>
        <UserBox onClick={handleClick}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </UserBox>
      </StyledToolbar>
      {<Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        <MenuItem>{t('PROFILE')}</MenuItem>
        <MenuItem>{t('SETTINGS')}</MenuItem>
        <MenuItem onClick={handleLogout}>{t('LOGOUT')}</MenuItem>
      </Menu>}
    </AppBar>
  )
}

export default Navbar