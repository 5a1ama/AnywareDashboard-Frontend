import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import StudyImage from '../Images/StudyImage.jpg'

const ExamsTime = () => {
  return (
    <Box flex={1}>
      <Card sx={{ marginTop:'10px' , paddingLeft:'40px', marginRight:'20px', width:'96%'}} >
        <Box display="flex" flexDirection="row" alignItems="center" gap={35}>
          <Box >
            <CardContent>
              <Typography gutterBottom variant="h3" color='#6EACDA'>
                EXAMS TIME
              </Typography>
              <Typography variant="body1" color="text.primary" marginBottom='20px'>
                Here we are, are you ready to fight? Donn't worry, we prepared some tips to be ready for your exams.
              </Typography>
              <Typography sx={{fontStyle:'italic'}} fontFamily='Apple Color Emoji' variant="body2" color="text.secondary">
                "Nothing happens until something moves" -Mohamed Salama.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant='contained' size="large" sx={{backgroundColor:'#6EACDA', marginLeft:'10px', fontSize: '18px'}}>View exams tips</Button>
            </CardActions>
          </Box>

          <Box
            component="img"
            src={StudyImage}
            alt="Exams Image"
            sx={{ width: '21%', height: '10%' }}
          />
        </Box>
      </Card>
    </Box>
  )
}

export default ExamsTime