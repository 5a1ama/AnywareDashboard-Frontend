import axios from "axios";
const api="https://anyware-backend-mdvadfxg0-mohamed-salamas-projects-ee33a6a6.vercel.app"

export const listAnnouncementsAPI=async()=>{
    const response=await axios.get(`${api}/listAnnouncements`);
      return response.data;
}