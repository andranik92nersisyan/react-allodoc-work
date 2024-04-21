import  axios  from "axios";

const  publicAPI = axios.create({
    baseURL: "https://api.allodoc.md/users/get-doctors",
    headers: {
      "Content-Type": "application/json",
    },
  
})

export default publicAPI;