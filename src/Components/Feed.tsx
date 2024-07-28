import { Box, Stack } from '@mui/material'
import ExamsTime from './ExamsTime';
import Data from './Data';

const Feed = () => {

  return (
    <Box flex={2}>
        <Stack spacing={3.5} justifyContent={"space-between"}>
            <ExamsTime/>
            <Data/>
        </Stack>
        
    </Box>
  )
}

export default Feed