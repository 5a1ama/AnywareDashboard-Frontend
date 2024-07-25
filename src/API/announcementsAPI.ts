import axios from "axios";
const api="https://anyware-backend-3xo07g96k-mohamed-salamas-projects-ee33a6a6.vercel.app"

export const listAnnouncementsAPI=async()=>{
    const response=await axios.get(`${api}/listAnnouncements`);
      return response.data;
}