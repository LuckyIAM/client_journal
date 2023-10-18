import { $host, $authHost } from "./index";


export const registration = async (mail, password, role) =>{
    const  response = await $host.post('api/v1/user/registration', {mail, password, role})
    return response
}

export const login = async (mail, password) =>{
    const  response = await $host.post('api/v1/user/login', {mail, password})
    return response
}

export const check = async () => {
    const  response = await $host.get('api/v1/user/auth', {mail, password})
    return response
}