import { json } from 'react-router-dom'
import {API} from '../backend'
export const cat_api_call = ()=>{
    return fetch(`${API}/category/`,{method:'GET'}).then(
        (response)=>{
            return response.json();
        }
    ).catch(
        (err)=>{
            console.log("Fetch error is this : ",err)
        }
    )
}