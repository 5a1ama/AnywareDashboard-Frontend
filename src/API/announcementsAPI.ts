import axios from "axios";
const api="https://anyware-backend-k9zi96vxz-mohamed-salamas-projects-ee33a6a6.vercel.app/"

export const listAnnouncementsAPI=async()=>{
    const response=await axios.get(`${api}/listAnnouncements`);
      return response.data;
}