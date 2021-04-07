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
                <label htmlFor="rue"> Adresse (numéro et rue) </label>
                <input class="inpt" type="text" name="rue"  v-model="address.rue" />
            </div>
            <div class="form__group">
                <label htmlFor="ville"> Ville </label>
                <input class="inpt" type="text" name="ville"  v-model="address.ville" />
            </div>
            <div class="form__group">
                <label htmlFor="cp"> Code postal </label>
                <input class="inpt" type="text" name="cp"  v-model="address.cp" />
            </div>
            <div class="form__group">
                <label htmlFor="pays"> Pays </label>
                <input class="inpt" type="text" name="pays"  v-model="address.pays" />
            </div>

            <div class="form__group">
                <label htmlFor="password"> Mot de passe </label>
                <input class="inpt" type="password" name="password" v-model="password" />
            </div>
            <div class="form__group">
                <input type="submit" value="s'inscrire" />
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
.login__form {
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

</style>