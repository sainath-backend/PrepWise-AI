import axios from "axios"
import { serverUrl } from "../App.jsx"
import { setUserData } from "../redux/userSlice.js"



export const getCurrentUser = async (dispatch)=>{
    try {
        const result = await axios.get(serverUrl + "/api/user/currentuser",{
            withCredentials: true
        })
        dispatch(setUserData(result.data));
    } catch (error) {
        console.log(error);
    }
}

export const generateNotes = async (payload)=>{
    try {
        const result = await axios.post(serverUrl+"/api/notes/generate-notes",payload,{
            withCredentials:true
        })
        return result.data
    } catch (error) {
        console.log(error)
    }
}