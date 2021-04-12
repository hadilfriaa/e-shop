<template>
    <div class="userAd__form">
        <TitlePage title="Gérer le profil"/>
        <div v-if="show">
            <div class="user__info" v-if="UserItem">
                <div  class="fix">Nom : </div> <div class="info"> {{firstName}}</div>
                <br>
                <div  class="fix">Prénom : </div> <div class="info">{{lastName}}</div>
                <br>
                <div  class="fix">Numéro de téléphone : </div> <div class="info"> {{telephone}}</div>
                <br>
                <div  class="fix">Email : </div> <div class="info">{{email}}</div>
                <br>
                <div  class="fix"> Adresse : </div> <div class="info"> {{rue}} {{cp}} ,</div>
                <br>
                <div class="info"> {{ville}} , {{pays}} </div>
                <br>
                <button class="btn--delete" @click="delet"> Supprimer l'utilisateur</button>
                <button class="btn--modify" @click="modify">modifier l'utilisateur</button>
            </div>
        </div>


        <div v-if="isclick && UserItem">
                <form @submit.prevent="update">
                    <div class="form__group">
                        <label htmlFor="firstName"> Prenom </label>
                        <input class="inpt" type="text" name="firstName"  v-model="firstName" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="lastName"> Nom </label>
                        <input class="inpt" type="text" name="lastName"  v-model="lastName" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="telephone"> Numéro de téléphone </label>
                        <input class="inpt" type="text" name="telephone" v-model="telephone"> <br>
                    </div>
                    
                     <div class="form__group">
                        <label htmlFor="address"> Adresse (numéro et rue) </label>
                        <input class="inpt" type="text" name="address"  v-model="rue" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="ville"> Ville </label>
                        <input class="inpt" type="text" name="ville"  v-model="ville" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="cp"> Code postal </label>
                        <input class="inpt" type="text" name="cp"  v-model="cp" />
                    </div>
                    <div class="form__group">
                        <label htmlFor="pays"> Pays </label>
                        <input class="inpt" type="text" name="pays"  v-model="pays" />
                    </div> 
                    
                    
                    <div class="form__group">
                        <input class="btn--update" type="submit" value="update" />
                    </div>
                </form>
        </div>  
        
    </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";
    export default {
        components: {
            TitlePage
        },
        data: function() {
            
            return {
                show:true,
                isclick:false,
                UserItem:{},
                firstName: "",
                lastName: "",
                telephone: "",
                email: "",
                rue : "",
                ville : "",
                cp : "",
                pays : ""
                
            
            }
        },
        methods: {
           delet: function() {
                const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
        
                return fetch(`http://localhost:3030/api/v1/users/delete/${this.$route.params.id}`, {
                 
                   headers: {
                       Authorization: token
                   }
                })
                .then (res => res.json())
                .then((data) => {
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashboard');
                    }
                })
                .catch(err => console.log(err));
                

            },
            modify: function(){
                this.isclick = true;
                this.show = false;

            },
            
            update: function(){
                const token = localStorage.getItem('token');
                const decodedToken = VueJwtDecode.decode(token);
        
                return fetch(`http://localhost:3030/api/v1/users/update/${decodedToken.userId}`, {
                 method: "POST",
                 headers: {"Content-Type":"Application/json"},
                 body: JSON.stringify( {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    telephone: this.telephone,
                    email: this.email,
                    rue : this.rue,
                    ville : this.ville,
                    cp : this.cp,
                    pays : this.pays
                                      
                })
                })
                .then (res => res.json())
                .then((data) => {
                    this.firstName= data.firstName;
                   this.lastName= data.lastName;
                   this.telephone= data.telephone;
                   this.email= data.email;
                   this.rue= data.rue;
                   this.ville= data.ville;
                   this.cp= data.cp;
                   this.pays= data.pays;
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashUser');
                    }
                })
                .catch(err => console.log(err));
            }
        },
        mounted() {
            const token = localStorage.getItem('token');
            console.log(token);
            if(token) {
               const decodedToken = VueJwtDecode.decode(token);
               console.log(decodedToken);            
               fetch(`http://localhost:3030/api/v1/users/${this.$route.params.id}`,{
            
                   headers: {
                       Authorization: token
                   }
               })
                
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
                this.userItem = data;
                this.user = data;
                this.firstName= data.firstName;
                this.lastName= data.lastName;
                this.telephone= data.telephone;
                this.email= data.email;
                this.rue= data.address.rue;
                this.ville= data.address.ville;
                this.cp= data.address.cp;
                this.pays= data.address.pays;
            })
            .catch(err=> console.log(err));
            }
        }
    }
    
</script>

<style lang="scss" scoped>

.user__info{
    font-family: monospace;
    width: auto;
    height: auto;

}
.userAd__form {
    width: 500px;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    font-family: monospace;

}

.fix{
    display: inline-block;
    text-align: left;
    font-weight: bold;
    margin:10px;
}

.info{
    display: inline-block;
    text-align: center;
}

.inpt{
    width: 350px;
    height:30px;
    text-align: center;
    color: black;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: .25rem;
    margin-bottom: 30px;
}

.btn--modify{
  background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
 
}

.btn--update{
  background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
}

.btn--delete{
 background-color: #F70000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
 
}

</style>