export const getToken=(key)=>{
    return localStorage.getToken(key)

}

export const setToken = (key = "access_token", data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
export const removeToken=(key="access_token")=>{
    return localStorage.removeToken(key)

}