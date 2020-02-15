import axios from 'axios';

const state = () => {
    return {
        user: {}
    }
};

const getters = {
    getUser: state => state.user,
};

const actions = {
    registerUser({commit}, userFormData) {
        const response = axios.post('http://localhost:3000/api/user/register', userFormData, {withCredentials: true});
        console.log(response);
    }
};

const mutations = {
    setUser: (state, user) => state.user = user,
};

export default {
    state,
    getters,
    actions,
    mutations
};