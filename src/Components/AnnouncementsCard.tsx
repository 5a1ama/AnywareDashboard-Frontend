import { Box, Divider, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import { fetchAnnouncements } from '../Redux/Slices/announcementsSlice';
import { RootState } from '../Redux/store';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { useTranslation } from 'react-i18next';

const AnnouncementsCard = () => {

  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const allAnnouncements = useAppSelector((state: RootState) => state.announcements.data);
  const status = useAppSelector((state: RootState) => state.announcements.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAnnouncements());
    }
  }, [status, dispatch]);

  return (
    <Box flex={2.5} borderRadius='20px' bgcolor='white' sx={{paddingTop:'20px', paddingLeft:'20px', overflowY:'auto', maxHeight:'50vh'}}>
            <Typography variant='h4' marginBottom={4}>{t('ANNOUNCEMENTS')}</Typography>
            {allAnnouncements.length > 0 && allAnnouncements.map((announcement: any)=> 
            <Box flexDirection="row" marginBottom={3} sx={{display:{xs:'none', sm:'flex'}}}>
                <PersonIcon sx={{marginRight:'15px' , fontSize:50}}/>
                <Box sx={{ width:{ xs:'22%', sm:'18%'} }}>
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
            {allAnnouncements.length > 0 && allAnnouncements.map((announcement: any)=>
            <Box flexDirection="column" marginBottom={3} justifyContent='center' alignItems='center' sx={{display:{xs:'flex', sm:'none'}}}>
              <Box display="flex" flexDirection="row" marginBottom={3}>
                  <PersonIcon sx={{marginRight:'15px' , fontSize:50}}/>
                  <Box sx={{ width:{sm:'18%'} }}>
                      <Typography variant='body1' color="text.primary"> 
                          {announcement.announcer}
                      </Typography> 
                      <Typography variant='body1' color="text.secondary"> 
                          {announcement.department} 
                      </Typography> 
                  </Box>
              </Box>
              <Typography marginLeft='10px' variant='body1' marginBottom='20px'>
                  {announcement.message} 
              </Typography>
              <Divider orientation="horizontal" flexItem sx={{ marginX: 1 }} />
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