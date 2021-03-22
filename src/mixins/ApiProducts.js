import apiConfigs from "../configs/api.configs";

export default {
    methods: {
        getProducts() {
            console.log(apiConfigs.apiUrl);
            return fetch(`${apiConfigs.apiUrl}/productsall`)
            .then(res=>res.json())
        }
       // getProduct() {
        
      //  },
        // etc //
    }
}