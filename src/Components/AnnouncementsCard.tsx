import { Box, Divider, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import { fetchAnnouncements } from '../Redux/Slices/announcementsSlice';
import { RootState } from '../Redux/store';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';

const AnnouncementsCard = () => {

  const dispatch = useAppDispatch();
  const allAnnouncements = useAppSelector((state: RootState) => state.announcements.data);
  const status = useAppSelector((state: RootState) => state.announcements.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAnnouncements());
    }
  }, [status, dispatch]);

  return (
    <Box flex={2.5} borderRadius='20px' bgcolor='white' sx={{paddingTop:'20px', paddingLeft:'20px', overflowY:'auto', maxHeight:'54vh'}}>
            <Typography variant='h4' marginBottom={4}>Announcements</Typography>
            {allAnnouncements.length > 0 && allAnnouncements.map((announcement: any)=> 
            <Box display="flex" flexDirection="row" marginBottom={3}>
                <PersonIcon sx={{marginRight:'15px' , fontSize:50}}/>
                <Box sx={{width:{ xs:'21%', sm:'20%'}}}>
                    <Typography variant='body1' color="text.primary"> 
                        {announcement.announcer}
                    </Typography> 
                    <Typography variant='body1' color="text.secondary"> 
                        {announcement.department} 
                    </Typography> 
                </Box>
                <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
                <Typography marginLeft='10px' variant='body1'>
                    {announcement.message} 
                </Typography>
            </Box>
            )}
            {allAnnouncements.length === 0 && 
            <Box display="flex"
            justifyContent="center"
            alignItems="center"
            height="80%">
              <Typography color='text.secondary'>No Announcements</Typography>
            </Box>
            }
    </Box>
  )
}

export default AnnouncementsCard