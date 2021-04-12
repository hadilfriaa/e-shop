<template>
    <div class="favoris__cart">
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in favorisArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button class="btn--delete" @click="removeFavoris(item)">Supprimer le produit</button>
                    </td>
                    <td>
                        <button class="btn--add" @click="addItemToCart(item)">Ajouter au panier</button>
                    </td>

                </tr>
                    
            </tbody>
        </table>

        <div>
            <button class="btn--delete--fav" @click="clearFavoris()">Supprimer les favoris</button>
        </div>
    </div>
</template>


<script>
    import Cart from "../mixins/Cart";
    import Favoris from '../mixins/Favoris';
    export default {
        mixins:[Favoris, Cart],
        data: function() {
            return {
                favorisArray:[],
            }
        },
        created() {
            this.favorisArray = this.getFavoris();
        },
        computed:{

        },
        methods: {
            clearFavoris: function () {
                this.clearFavoris()
                this.favorisArray = this.getFavoris();
            },
            removeFavoris: function (product) {
                this.removeItemFavoris(product);
                this.favorisArray = this.getFavoris();
            },
            addItemToCart: function(product) {
                this.addToCart(product)
            }
        }
    }
</script>

<style lang="scss" scoped>

.favoris__cart{
    width: 800px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    
        
}

table {
width: 100%;
box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
border-radius: 5px;
margin-bottom: 30px;

}
th {
font-family: monospace;
font-weight: bold;
width: 50%;
padding: 5px;
background-color: #B3EEFF;
}
td {
font-family: monospace;
font-weight: bold;
width: 50%;
padding: 5px;
text-align: center;
background-color: #ffffff;
}



.btn--add{
  background-color: #B3EEFF;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-size: 11px;
  font-family: monospace;
  font-weight: bold;
}

.btn--delete{
  background-color: #F70000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-size: 10px;
  font-family: monospace;
  font-weight: bold;
}

.btn--delete--fav{
  background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-family: monospace;
  font-weight: bold;
}


</style>
