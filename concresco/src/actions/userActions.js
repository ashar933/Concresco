import axios from 'axios';
export const registerUser=(user)=> async dispatch=>{
    dispatch({type:'USER_REGISTER_REQUEST'})

    try{
        const response=await axios.post('/api/users/register',user)
        console.log(response);
        dispatch({type:'USER_REGISTER_SUCCESS',payload:response.data})
        /*localStorage.setItem(user,JSON.stringify(response.data))
        window.location.href='/'*/
    }catch(error){
        dispatch({type:'USER_REGISTER_FAILED',payload:error})
    }
}
/*
export const loginUser=()=>dispatch=>{
    localStorage.addItem('currentUser')
    window.location.href='/login'
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currentUser')
    window.location.href='/login'
}*/