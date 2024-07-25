import {Box, Stack} from "@mui/material";
import Navbar from "./Navbar"
import Sidebar from './Sidebar';
import Feed from "./Feed";

const Dashboard = () => {


  return (
    <Box bgcolor='whitesmoke' height='100vh'>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Sidebar/>
        <Feed/>
      </Stack>
    </Box>
  )
}

export default Dashboard