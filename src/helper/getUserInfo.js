import axios from 'axios';

const getUserInfo = async (user_id) => {
    const data = await axios.get('/getuserinfo/' + user_id)
        .then(res => {
            if (res.status == 200) {
                return res.data
            }
        })
        .catch(err => {
            console.log(err)
        })

    return data;

}

export default getUserInfo
