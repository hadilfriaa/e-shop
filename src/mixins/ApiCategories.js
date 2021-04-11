import apiConfigs from '../configs/api.configs';

export default {
    methods: {
        getCategoryAll() {
            return fetch(`${apiConfigs.apiUrl}/categoryAll`).then((res) => res.json());
        },
        getCategoryId(){
            return fetch(`${apiConfigs.apiUrl}/category/${this.$route.params.id}`).then((res) => res.json());
        }
    }
};