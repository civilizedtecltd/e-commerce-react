import decode from 'jwt-decode';

const checkAuth = () => {

    const clientData = JSON.parse(localStorage.getItem('authData'));
    console.log(clientData)

    const token = clientData.jwt.token;
    const refreshToken = clientData.jwt.refreshToken;

    if (!token || !refreshToken)
        return false;
    try {
        const { exp } = decode(refreshToken);

        if( exp < new Date().getTime() / 1000 )
            return false;

        return clientData.jwt;
    } catch(ex) {
        return false;
    }
}

export default checkAuth;
