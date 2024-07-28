import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CampaignIcon from '@mui/icons-material/Campaign';

function Sidebar() {
  return (
    <Box position='sticky' height='89.6vh' bgcolor='#96C9F4' flex={0.3} p={2} sx={{display:{xs:'none', sm:'block'}}} >
        <List >
          <ListItem sx={{marginBottom: 8, '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} disablePadding>
            <ListItemButton  component="a" href="#home">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Dashboard"/>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{marginBottom: 8, '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <CalendarMonthIcon/>
              </ListItemIcon>
              <ListItemText primary="Schedule"/>
            </ListItemButton>
          </ListItem>
          <ListItem sx={{marginBottom: 8, '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <AutoStoriesIcon/>
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{marginBottom: 8, '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <SchoolIcon/>
              </ListItemIcon>
              <ListItemText primary="Gradebook" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{marginBottom: 8, '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <TrendingUpIcon/>
              </ListItemIcon>
              <ListItemText primary="Perforamce" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{marginBottom: 8, '&:hover': { backgroundColor: 'white','& .MuiListItemIcon-root, & .MuiListItemText-root': {color: 'black', },},}} disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <CampaignIcon/>
              </ListItemIcon>
              <ListItemText primary="Announcement" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>

    
  )
}

export default Sidebar