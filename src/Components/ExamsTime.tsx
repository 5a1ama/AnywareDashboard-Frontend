import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import StudyImage from '../Images/StudyImage.jpg'

const ExamsTime = () => {
  return (
    <Box flex={1} sx={{width:{xs:'96%',sm:'99%'}}}>
      <Card sx={{ marginTop:'20px'}}>
      <Box display="flex" flexDirection="row" alignItems="center" gap={35}>
        <Box display='flex' flexDirection='column' sx={{paddingLeft:{xs:'15px', sm:'30px'},paddingRight:{xs:'15px'}, justifyContent:{xs:'center', sm:'normal'}, alignItems:{xs:'center', sm:'normal'}}}>
          <Typography variant="h3" color='#6EACDA' sx={{fontSize:{xs:'40px', sm:'55px'}}}>
            EXAMS TIME 
          </Typography>
          <CardContent>
            <Typography variant="body1" color="text.primary" marginBottom='20px'>
              Here we are, are you ready to fight? Donn't worry, we prepared some tips to be ready for your exams.
            </Typography>
            <Typography sx={{fontStyle:'italic'}} fontFamily='Apple Color Emoji' variant="body2" color="text.secondary">
              "Nothing happens until something moves" -Mohamed Salama.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' size="large" sx={{backgroundColor:'#6EACDA', fontSize: '18px'}}>View exams tips</Button>
          </CardActions>
        </Box>

        <Box
          component="img"
          src={StudyImage}
          alt="Exams Image"
          sx={{ width:'21%', height: '10%', display:{xs:'none',sm:'block'} }}
        />
        </Box>
      </Card>
    </Box>
  )
}

export default ExamsTime