import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import AnnouncementsCard from './AnnouncementsCard'
import QuizesCard from './QuizesCard'

const Data = () => {

  const theme = useTheme();
  const isSmUp = useMediaQuery  (theme.breakpoints.up('sm'));

  return (
    <Box flex={4}>
        <Stack direction={isSmUp ? 'row' : 'column'} spacing={4} justifyContent={"space-between"} sx={{mr:{xs:2,sm:1.5}}}>
            <AnnouncementsCard/>
            <QuizesCard/>
        </Stack>
    </Box>
  )
}

export default Data