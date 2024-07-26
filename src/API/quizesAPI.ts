import axios from "axios";
const api="http://localhost:8000"

export const listQuizesAPI=async()=>{
    const response=await axios.get(`${api}/listQuizes`);
      return response.data;
}