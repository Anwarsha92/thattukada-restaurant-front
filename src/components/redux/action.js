import axios from "axios";
import { base_url } from "../../baseUrl";
import { FAIL, SUCCES } from "./constants";


export const fetchRestList=()=>async(dispatch)=>{
  
  try
    {
        const {data} =  await axios(`${base_url}/restaurants`)
//   console.log(data);
  dispatch({
    payload:data,
    type:SUCCES
  })
}
catch(error){
    dispatch({
        payload:error,
        type:FAIL
    })

}
}