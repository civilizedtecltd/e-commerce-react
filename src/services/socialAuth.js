import firebase from "../constants/firebase-config";

const firebaseAuth = (provider) => {
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                return resolve(res.user);
            }).catch( (error) => {
                return reject(error);
            });
    });
}


const socialAuth = async (provider) => {
    try {
        const { providerData } = await firebaseAuth(provider);
        
        return {
            provider: providerData[0].providerId,
            id: providerData[0].uid,
            name: providerData[0].displayName,
            email: providerData[0].email,
            phone: providerData[0].phoneNumber,
            photo: providerData[0].photoURL 
        }
        
    } catch (error) {
        console.log(error);
        return null;
    }

}

export default socialAuth;