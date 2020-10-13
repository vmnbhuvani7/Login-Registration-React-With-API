export const isAuthenticated = () => {
    if (localStorage.getItem('token')) {
        return localStorage.getItem("token")
    }
    else {
        return false
    }
}