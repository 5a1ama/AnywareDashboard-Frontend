import { Box, Divider, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import { listAnnouncementsAPI } from '../Redux/Slices/announcementsSlice';
import { AppDispatch, RootState } from '../Redux/store';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const AnnouncementsCard = () => {

  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
      dispatch(listAnnouncementsAPI());
  }, [dispatch]);

  const allAnnouncements = useSelector((state: RootState) => state.announcements.data);

  return (
    <Box flex={2.5} borderRadius='20px' bgcolor='white' sx={{paddingTop:'20px', paddingLeft:'20px', overflowY:'auto', maxHeight:'50vh'}}>
            <Typography variant='h4' marginBottom={4}>{t('ANNOUNCEMENTS')}</Typography>
            {allAnnouncements.length > 0 && allAnnouncements.map((announcement: any)=>
            <Box key={allAnnouncements.indexOf(announcement)} marginBottom={3} sx={{flexDirection:{xs:'column', sm:'row'} ,display:{xs:'flex', sm:'flex'}, justifyContent:{xs:'center', sm:'start'},  alignItems:{xs:'center', sm:'start'} }}>
              <Box display="flex" flexDirection="row" marginBottom={3}>
                  <PersonIcon sx={{marginRight:'15px' , fontSize:50}}/>
                  <Box sx={{ width:{ xs:'35vw ', sm:'9vw'} }}>
                      <Typography variant='body1' color="text.primary"> 
                          {announcement.announcer}
                      </Typography> 
                      <Typography variant='body1' color="text.secondary"> 
                          {announcement.department} 
                      </Typography> 
                  </Box>
              </Box>
              <Divider orientation="vertical" flexItem sx={{ marginX: 1, display:{xs:'none', sm:'block'}}} />
              <Typography marginLeft='10px' variant='body1' marginBottom='20px'>
                  {announcement.message} 
              </Typography>
              <Divider orientation="horizontal" flexItem sx={{ marginX: 1, display:{xs:'block', sm:'none'}}} />
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