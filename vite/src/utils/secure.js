import { getToken } from "./token";
export const isValid=()=>{
    const token =getToken();
    if (!token) throw new Error("Token is missing")
        return token
}
export const isValidRole=(sysRole=[],userRole=[])=>{
    if(sysRole===0) return true
    return sysRole.some((role)=>userRole.includes(role)) 

}