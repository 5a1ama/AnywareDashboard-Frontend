import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { listQuizesAPI } from '../API/quizesAPI';

const QuizesCard = () => {

    //useState and useEffect for quizes
    const[allQuizes,setAllQuizes]=useState([]);
    useEffect(()=>{
        async function listQuizes(){
          setAllQuizes(await listQuizesAPI())}
  
          listQuizes();
        },[])

  return (
    <Box borderRadius='20px' flex={1} bgcolor='white' sx={{ paddingTop:'20px', paddingLeft:'20px', overflowY:'auto' , maxHeight:'54vh'}}>
          <Typography variant='h4' >What's due</Typography>
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