import { Box, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { listAnnouncementsAPI } from '../API/announcementsAPI';
import PersonIcon from '@mui/icons-material/Person';

const AnnouncementsCard = () => {

    //useState and useEffect for announcements
    const[allAnnouncements,setAllAnnouncements]=useState([]);
    useEffect(()=>{
        async function listAnnouncements(){
          setAllAnnouncements(await listAnnouncementsAPI())}
  
          listAnnouncements();
        },[])

  return (
    <Box flex={3} borderRadius='20px' bgcolor='white' sx={{paddingTop:'20px', paddingLeft:'20px', overflowY:'auto', maxHeight:'54vh'}}>
            <Typography variant='h4' marginBottom={4}>Announcements</Typography>
            {allAnnouncements.length > 0 && allAnnouncements.map((announcement: any)=> 
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" marginBottom={3}>
                <PersonIcon sx={{marginRight:'15px' , fontSize:50}}/>
                <Box flex={1.3}>
                    <Typography variant='body1' color="text.primary"> 
                        {announcement.announcer}
                    </Typography> 
                    <Typography variant='body1' color="text.secondary"> 
                        {announcement.department} 
                    </Typography> 
                </Box>
                <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
                <Typography marginLeft='10px' flex={8} variant='body1'>
                    {announcement.message} 
                </Typography>
            </Box>
    //   <Card sx={{  minWidth: 275 }}>
    //     <CardContent sx={{margin:'5px'}}>
    //         <Box display="flex" flexDirection="row" alignItems="center">
    //             <PersonIcon sx={{marginRight:'15px' , fontSize:50}}/>
    //             <Box flex={1.3}>
    //                 <Typography variant='body1' color="text.primary">
    //                     {announcement.announcer}
    //                 </Typography>
    //                 <Typography variant='body1' color="text.secondary">
    //                     {announcement.department}
    //                 </Typography>
    //             </Box>
    //             <Divider orientation="vertical" flexItem sx={{ marginX: 1 }} />
    //             <Typography marginLeft='10px' variant='body1' flex={8}>
    //                     {announcement.message}
    //             </Typography>
    //         </Box>
    //     </CardContent>
    //   </Card>
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