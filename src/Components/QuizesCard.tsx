import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import { useEffect } from 'react'
import { AppDispatch, RootState } from '../Redux/store';
import { fetchQuizes } from '../Redux/Slices/quizesSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

const QuizesCard = () => {

  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
      dispatch(fetchQuizes());
  }, [dispatch]);
  
  const allQuizes = useSelector((state: RootState) => state.quizes.data);

  return (
    <Box borderRadius='20px' flex={1} bgcolor='white' sx={{ paddingTop:'20px', paddingLeft:'20px', overflowY:'auto' , maxHeight:'50vh'}}>
          <Typography variant='h4' >{t('DUE')}</Typography>
          {allQuizes.length > 0 && allQuizes.map((quiz: any)=> 
          <Card sx={{  minWidth: 275, marginBottom:'30px', marginTop:'10px', width:'95%'}}>
          <CardContent sx={{margin:'20px'}}>
            <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
              {quiz.title}
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Typography display="flex" flexDirection="row" sx={{ mb: 1.5 , mt: 1.5}} color="text.secondary">
              <Typography width='65px'>Course: </Typography> <Typography>{quiz.course}</Typography>
            </Typography>
            <Typography display="flex" flexDirection="row" sx={{ mb: 1.5 }} color="text.secondary">
              <Typography width='65px'>Topic: </Typography> <Typography>{quiz.topic}</Typography>
            </Typography>
            <Typography display="flex" flexDirection="row" sx={{ mb: 1.5 }} color="text.secondary">
              <Typography width='65px'>Due to: </Typography> <Typography>{quiz.dueTo}</Typography>
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" width="100%">
              <Button variant='outlined' size="large" sx={{color:'#6EACDA', borderWidth: '3px', borderRadius:'10px', fontWeight: 'bold'}}>Start {quiz.title}</Button>
            </Box>
          </CardActions>
        </Card>
      )}
      {allQuizes.length === 0 && 
      <Box display="flex"
      justifyContent="center"
      alignItems="center"
      height="90%">
        <Typography color='text.secondary'>No Dues</Typography>
      </Box>
      }

    </Box>
  )
}

export default QuizesCard