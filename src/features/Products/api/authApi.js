import { Axios } from "../../../Hooks/Axios"; 

export const loginUser = async (credentials) => {

  const response = await Axios.post("login", credentials, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  
  return response.data;
};