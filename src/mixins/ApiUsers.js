import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";

export default {
    methods: {
        getAllUser() {
            console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/usersall`)
            .then(res=>res.json())
        },
        getUser() {
            const token = localStorage.getItem('token');
            const decodedToken = VueJwtDecode.decode(token);
            console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.userId}`)
            .then(res=>res.json())
        },
        
    }
}