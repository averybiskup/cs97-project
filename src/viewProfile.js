const viewProfile = () => {
    if (window.localStorage.getItem('isAuthenticated')) {
        window.location.replace('/cs97-project/profile')
    }
}

export default viewProfile