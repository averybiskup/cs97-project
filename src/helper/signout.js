// Function that clears localStorage, hence signing the user out

const signout = () => {
    if (window.localStorage.getItem('isAuthenticated')) {
        window.localStorage.clear()
        window.location.replace('/cs97-project')
    }
}

export default signout
