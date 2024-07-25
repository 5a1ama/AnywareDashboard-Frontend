import axios from "axios";
const api="https://anyware-backend-mfntjdmx4-mohamed-salamas-projects-ee33a6a6.vercel.app"

export const listAnnouncementsAPI=async()=>{
    const response=await axios.get(`${api}/announcements/listAnnouncements`);
      return response.data;
}