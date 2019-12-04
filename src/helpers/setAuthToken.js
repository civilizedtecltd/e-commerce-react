import axios from 'axios';
import store from '../redux/store';
const setAuthToken = (token) => {
    if(token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }else{
        const { jwt } = store.getState().auth;
        if(jwt.token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwt.token}`;
        }else{
            delete axios.defaults.headers.common['Authorization'];
        }
    }
}

const removeAuthToken = () => {
    delete axios.defaults.headers.common['Authorization'];
}

export {
    setAuthToken,
    removeAuthToken
}
