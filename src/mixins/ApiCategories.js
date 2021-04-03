import apiConfigs from '../configs/api.configs';

export default {
    methods: {
        getCategoryAll() {
            return fetch(`${apiConfigs.apiUrl}/categoryAll`).then((res) => res.json());
        },
        getCategoryId(){
            return fetch(`${apiConfigs.apiUrl}/category/`).then((res) => res.json());
        }
    }
};