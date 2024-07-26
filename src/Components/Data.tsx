import { Box, Stack } from '@mui/material'
import AnnouncementsCard from './AnnouncementsCard'
import QuizesCard from './QuizesCard'

const Data = () => {
  return (
    <Box flex={4}>
        <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <AnnouncementsCard/>
            <QuizesCard/>
        </Stack>
    </Box>
  )
}

export default Data