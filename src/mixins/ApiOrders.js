import apiConfigs from '../configs/api.configs';
import VueJwtDecode from "vue-jwt-decode";

export default {
	methods: {
		getOrdersAll() {
			const token = localStorage.getItem('token');
			// console.log(apiConfigs.apiUrl);
			return fetch(`${apiConfigs.apiUrl}/ordersAll`,{
				headers: {
					Authorization: token
				}
			})
			.then((res) => res.json());
		},
		getOrdersId(){
			return fetch(`${apiConfigs.apiUrl}/orders/`).then((res) => res.json());
		},
		getOrdersUser(){
			return fetch(`${apiConfigs.apiUrl}/users/`).then((res) => res.json());
		}
	}
};
