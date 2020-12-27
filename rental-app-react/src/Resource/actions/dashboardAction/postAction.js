import callApiBackend from './../../utils/apiDashboardCall';// api dashboard
import * as types from './../../constants/actionTypes';
export const updateProfileRequest =  (owner) =>{
    return(dispatch) =>{
        return callApiBackEnd('api/user-profile/update','POST',
            owner
        ).then(res=>{
            console.log(res)
            dispatch(updateProfile(owner))
        })
    }
}
export const updateProfile = (renter) =>{
    return {
        type:types.FETCH_USER,
        owner
    }
}