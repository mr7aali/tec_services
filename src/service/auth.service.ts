import jwtDecode from 'jwt-decode';
import { getFromLocalStorage, setToLocalStorage } from "@/utlis/local-storage"
import { IUser } from '@/interface/type';

export const storeUserInfo = (accessToken: string) => {
    setToLocalStorage('accessToken', accessToken);
}

export const getUserInfo = (): Partial<IUser> => {
    const authToken = getFromLocalStorage('accessToken')
    if (authToken) {
        const decodedData = jwtDecode(authToken);
        return decodedData as Partial<IUser>;
    }
    return {
        user_id: undefined,
        role: undefined
    }
}



export const isLoggedIn = () => {
    const authToken = getFromLocalStorage('accessToken');
    if (authToken === "undefined" || null) {
        return false;
    }
    return !!authToken;
}