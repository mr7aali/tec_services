import jwtDecode from 'jwt-decode';
import { getFromLocalStorage, setToLocalStorage } from "@/utlis/local-storage"

export const storeUserInfo = (accessToken: string) => {

    setToLocalStorage('accessToken', accessToken);
}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage('accessToken')
    if (authToken) {
        const decodedData = jwtDecode(authToken);
        return decodedData;
    }
    return ""
}



export const isLoggedIn = () => {
    const authToken = getFromLocalStorage('accessToken');
    return !!authToken;
}