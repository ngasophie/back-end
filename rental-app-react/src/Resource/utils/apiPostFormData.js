//  use call api with auth token of owner and admin
import axios from 'axios';
import * as Config from './../constants/Config';
export default function postData(endpoint, method = 'POST', body){
    let token='';
    if(sessionStorage.getItem('owner/admin-login')){
        token=sessionStorage.getItem('owner/admin-login');
    }
    return axios({
        method: method,
        url: `${Config.API_BACKEND}/${endpoint}`,
        data: body,
        headers: {"Authorization" : `Bearer ${token}`,"Content-Type":"application/json"}
    }).catch(err =>{
        console.log(err)
    })
}
