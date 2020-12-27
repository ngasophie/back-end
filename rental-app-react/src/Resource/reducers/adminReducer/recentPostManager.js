import * as types from '../../constants/actionTypes';
let initialState = null;// du lieu dau vao
const recentPostManager= (state = initialState, action)=>{
    //  action truyen tu action/index sang => phan tich action
    switch(action.type){
        case types.FETCH_RECENT_POST_MANAGER:
         state = action.recentPostManager;
         return state;
        // case types.DELETE_POST:
        // let id = action.id;
        // let index =state.findIndex((post)=>{
        //     return post.id === id;
        // });
        // console.log(index)
        // if(index!=-1){
        //     state.splice(index,1);
        //     return [...state]
        // }
        //     return state;
        default: return state;
    }
}
export default recentPostManager;