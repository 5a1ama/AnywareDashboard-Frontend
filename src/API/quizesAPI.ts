import axios from "axios";
const api="https://anyware-backend-lg4zlj0hy-mohamed-salamas-projects-ee33a6a6.vercel.app"

export const listQuizesAPI=async()=>{
    const response=await axios.get(`${api}/listQuizes`);
      return response.data;
}