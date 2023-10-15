import { storeUserInfo } from "@/service/auth.service";


export type IUserRegister = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: string;
    phone: string;
    address: string;
    profileimage?: string;
}


const loginUser = async ({ email, password }: { email: string, password: string }) => {

    const res = await fetch("http://localhost:5000/api/v1/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const loginData = await res.json();
    // if (loginData.token) {
    //     router.push("/user/profile");
    // }
    storeUserInfo(loginData.token);
}
const RegisterUser = async (user_data:IUserRegister) => {

    const res = await fetch("http://localhost:5000/api/v1/user/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user_data),
    });
    const data = await res.json();
    

    if(data.success){
        const loginResult = await loginUser({ email:user_data.email, password :user_data.password});
    }
    

}

export const AuthHelpers = {
    loginUser, RegisterUser
}