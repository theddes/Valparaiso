const getters = {
    isLoggedIn: state => {
        return !!localStorage.getItem('token')
    }
}

export default getters
