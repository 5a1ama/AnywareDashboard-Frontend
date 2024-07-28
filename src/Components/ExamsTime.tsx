import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import StudyImage from '../Images/StudyImage.jpg'
import { useTranslation } from 'react-i18next';

const ExamsTime = () => {
  const { t } = useTranslation();
  return (
    <Box flex={1} sx={{width:{xs:'96%',sm:'99%'}}}>
      <Card sx={{ marginTop:'10px'}}>
      <Box display="flex" flexDirection="row" alignItems="center" gap={50}>
        <Box display='flex' flexDirection='column' sx={{paddingLeft:{xs:'15px', sm:'30px'},paddingRight:{xs:'15px'}, justifyContent:{xs:'center', sm:'normal'}, alignItems:{xs:'center', sm:'normal'}}}>
          <Typography variant="h3" color='#6EACDA' sx={{fontSize:{xs:'40px', sm:'55px'}}}>
          {t('EXAMS')}
          </Typography>
          <CardContent>
            <Typography variant="body1" color="text.primary" marginBottom='20px'>
            {t('EXAMS1')}
            </Typography>
            <Typography sx={{fontStyle:'italic'}} fontFamily='Apple Color Emoji' variant="body2" color="text.secondary">
            {t('EXAMS2')}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' size="large" sx={{backgroundColor:'#6EACDA', fontSize: '18px'}}>{t('EXAMS3')}</Button>
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