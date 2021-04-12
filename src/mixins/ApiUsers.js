import apiConfigs from "../configs/api.configs";
import VueJwtDecode from "vue-jwt-decode";

export default {
    methods: {
        getAllUser() {
            const token = localStorage.getItem('token');
            return fetch(`${apiConfigs.apiUrl}/usersAll`, {
                method: "GET",
                headers: {
                    Authorization: token
                }
            })
            .then(res=>res.json())
        },
        getUser() {
            const token = localStorage.getItem('token');
            const decodedToken = VueJwtDecode.decode(token);
            console.log(decodedToken);
            console.log("je suis decoded token de user " + decodedToken);
            return fetch(`${apiConfigs.apiUrl}/users/${decodedToken.userId}`)
            .then(res=>res.json())
        },
        
    }
}