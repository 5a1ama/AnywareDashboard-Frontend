import axios from "axios";
const api="https://studentdashboard-backend.onrender.com"

export const listAnnouncementsAPI=async()=>{
    const response=await axios.get(`${api}/listAnnouncements`);
      return response.data;
}