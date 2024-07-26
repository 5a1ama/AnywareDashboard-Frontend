import axios from "axios";
const api="https://studentdashboard-backend.onrender.com"

export const listQuizesAPI=async()=>{
    const response=await axios.get(`${api}/listQuizes`);
      return response.data;
}