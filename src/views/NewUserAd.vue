<template>
    <div class="Sign__form">
        <TitlePage title="Page d'inscription"/>
        <form @submit.prevent="sign">
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
                <label htmlFor="email"> Email </label>
                <input class="inpt" type="text" name="email"  v-model="email" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Admin </label>
                <input class="inpt" type="text" name="isAdmin"  v-model="IsAdmin" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Adresse (numéro et rue) </label>
                <input class="inpt" type="text" name="rue"  v-model="address.rue" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Ville </label>
                <input class="inpt" type="text" name="ville"  v-model="address.ville" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Code postal </label>
                <input class="inpt" type="text" name="cp"  v-model="address.cp" />
            </div>
            <div class="form__group">
                <label htmlFor="email"> Pays </label>
                <input class="inpt" type="text" name="pays"  v-model="address.pays" />
            </div>

            <div class="form__group">
                <label htmlFor="password"> Mot de passe </label>
                <input class="inpt" type="password" name="password" v-model="password" />
            </div>
            <div class="form__group">
                <input class="btn--sign" type="submit" value="s'inscrire" />
            </div>
        </form>
        <p v-if="messageError">
            {{messageError}}
        </p>
    </div>
</template>

<script>
import TitlePage from '../components/TitlePage';

 export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                firstName: "",
                lastName: "",
                telephone:"",
                email: "",
                IsAdmin:"",
                password: "",
                address: {},

                messageError: ""
            }
        },
        methods: {
            sign: function() {
                return fetch("http://localhost:3030/api/v1/users", {
                    method: "POST",
                    headers: {"Content-Type":"Application/json"},
                    body: JSON.stringify( {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        telephone: this.telephone,
                        email: this.email,
                        IsAdmin: this.IsAdmin,
                        password: this.password,
                        address: {
                            rue: this.address.rue,
                            ville: this.address.ville,
                            cp: this.address.cp,
                            pays: this.address.pays
                            
                        } 
                    })
                })
                .then (res => res.json())
                .then((data) => {
                    console.log( data);
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashboard');
                    }
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>

<style lang="scss" scoped>
.Sign__form {
        width: 500px;
        border: 1px solid #CCCCCC;
        border-radius: 4px;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 50px;
        padding: 20px;
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

.btn--sign{
  background-color: #ffff;
  color: #000000;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
}

.btn--sign:hover{
  background-color: #B3EEFF; 
  color: #FFFFFF;
  font-weight: bold;

}
</style>