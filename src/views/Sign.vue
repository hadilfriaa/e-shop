<template>
    <div class="Sign__form">
        <TitlePage title="Page d'inscription"/>
        <div class="form-container">
             <span class="close-btn">×</span>
             <div class="form-content-left">
                <img class="form-img" src="../assets/kiss.png" alt="spaceship" />
            </div>
            <div class="form-content-right">
                <form @submit.prevent="sign">
                    <div class="form-inputs">
                        <label htmlFor="firstName" class="form-label"> Prenom </label>
                        <input class="form-input" type="text" name="firstName"  v-model="firstName" />
                    </div>
                    <div class="form-inputs">
                        <label htmlFor="lastName" class="form-label"> Nom </label>
                        <input class="form-input" type="text" name="lastName"  v-model="lastName" />
                    </div>
                    <div class="form-inputs">
                        <label htmlFor="telephone" class="form-label"> Numéro de téléphone </label>
                        <input class="form-input" type="text" name="telephone" v-model="telephone"> <br>
                    </div>
                    <div class="form-inputs">
                        <label htmlFor="email" class="form-label"> Email </label>
                        <input class="form-input" type="text" name="email"  v-model="email" />
                    </div>
                    <div class="form-inputs">
                        <label htmlFor="rue" class="form-label"> Adresse (numéro et rue) </label>
                        <input class="form-input" type="text" name="rue"  v-model="address.rue" />
                    </div>
                    <div class="form-inputs" >
                        <label htmlFor="ville" class="form-label"> Ville </label>
                        <input class="form-input" type="text" name="ville"  v-model="address.ville" />
                    </div>
                    <div class="form-inputs">
                        <label htmlFor="cp" class="form-label"> Code postal </label>
                        <input class="form-input" type="text" name="cp"  v-model="address.cp" />
                    </div>
                    <div class="form-inputs">
                        <label htmlFor="pays" class="form-label"> Pays </label>
                        <input class="form-input" type="text" name="pays"  v-model="address.pays" />
                    </div>

                    <div class="form-inputs">
                        <label htmlFor="password" class="form-label"> Mot de passe </label>
                        <input class="form-input" type="password" name="password" v-model="password" />
                    </div>
                    <div class="form-inputs">
                        <input class="form-input-btn" type="submit" value="s'inscrire" />
                    </div>
                </form>
                <p v-if="messageError">
                    {{messageError}}
                </p>
        
            </div>
        </div>   
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

.Sign__form{
    width: auto;
    height: auto;
    margin-bottom: 50px;
}

img{
    border-radius: 10px;
}



.form-container {
  margin: auto;
  width: 1000px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 50px;
}

.close-btn {
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
}

.form-content-left {
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  border-radius: 10px 0 0 10px;
  position: relative;
  margin-bottom: 110px;
}

.form-img {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-img-2 {
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-content-right {
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
  margin-bottom: 110px;

}

.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}



.form-inputs {
    margin-top: 5px;
    margin-left: 20px;
    margin-bottom: 0.5rem;
    width: 80%;
}


.form-label {
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
}

.form-input {
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
}

.form-input::placeholder {
  color: #595959;
  font-size: 12px;
}

.form-input-btn {
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
}

.form-input-btn:hover {
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgb(39, 143, 255) 0%,
    rgb(12, 99, 250) 100%
  );
  transition: all 0.4s ease-out;
}

.form-input-login {
  font-size: 0.8rem;
  margin-top: 10px;
  color: #fff;
  width: 80%;
  text-align: center;
}

.form-input-login a {
  text-decoration: none;
  color: #27cdff;
  font-weight: 600;
}

</style>