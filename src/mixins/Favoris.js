export default{
    methods: {
        addToFavoris(product){
            let favoris = JSON.parse(localStorage.getItem('favoris')) || [];

            let productObject = {
                id: product._id,
                title: product.title,
                price: product.price,
                favoris: product.favoris = true
            };
            console.log(productObject)

            let indexOfExistingProduct = favoris.findIndex(
                (el) =>  el.id === productObject.id
            )

            if (indexOfExistingProduct !== -1) {
                favoris[indexOfExistingProduct].qty += 1

            }
            else{
                favoris.push(productObject);
                console.log("Le produit à été ajouté")
                console.log(productObject)
            }

            localStorage.setItem('favoris',JSON.stringify(favoris));
        },
        getFavoris(){
            return JSON.parse(localStorage.getItem('favoris'))
        },
        clearFavoris(){
            localStorage.removeItem('favoris');
        },
        removeItemFavoris(product){
            let favoris = JSON.parse(localStorage.getItem('favoris'));

            const filteredFavoris = favoris.filter((item) => {
                return item.id !== product.id
            });
            localStorage.setItem('favoris', JSON.stringify(filteredFavoris));
        },
    },
}