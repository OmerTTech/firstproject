import axios from "axios";

export const getUserData = async () => {
    const token = localStorage.getItem('token');
    if(token) {
       try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/auth/profile',{
        headers: {
            "Authorization": `Bearer ${token}`
        }
       })
       const userName = response.data.name;
       return userName
       } catch (error) {
        console.log(error);
       }
    }
}

export const logoutUser = async () => {
    localStorage.removeItem('token')
    window.location.reload()
}