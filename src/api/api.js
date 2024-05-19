const BASE_URL = 'https://fakestoreapi.com/products'
const AUTH_URL = 'https://api.escuelajs.co/api/v1'
const apiURLs = {
    productAPI: BASE_URL,
    categoryAPI: `${BASE_URL}/categories`,
    userAPI: {
        register: `${AUTH_URL}/users`,
        login: `${AUTH_URL}/auth/login`,
    }

}

export default apiURLs