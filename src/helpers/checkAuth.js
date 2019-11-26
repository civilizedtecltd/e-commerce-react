import decode from 'jwt-decode';

const checkAuth = () => {
    try {
        const clientData = JSON.parse(localStorage.getItem('authData'));

        if(clientData === null)
            return false;

        const token = clientData.jwt.token;
        const refreshToken = clientData.jwt.refreshToken;

        if (!token || !refreshToken)
            return false;

        const { exp } = decode(token);

        if( exp < new Date().getTime() / 1000 )
            return false;

        return true;

    } catch(ex) {
        console.log(ex);
        return false;
    }
}

export default checkAuth;
