<template>
    <div class="login__form">
        <TitlePage title="Page de connexion"/>
        <form @submit.prevent="login">
            <div class="form__group">
                <label htmlFor="email"> Mail </label>
                <input class="inpt" type="text" name="email"  v-model="email" />
            </div>
            <div class="form__group">
                <label htmlFor="password"> Password </label>
                <input class="inpt" type="password" name="password" v-model="password" />
            </div>
            <div class="form__group">
                <input  class="btn--login" type="submit" value="se connecter" />
            </div>
        </form>
        <router-link class="sign__link" :to="{name: 'Sign'}">
            <p> Toujours pas inscrit ? Rejoins vite la Teams Sneakers'Addict !  </p>
        </router-link>
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
                email:"",
                password:"",
                messageError:"",
                //IsAdmin:false
            }
        },
        methods: {
            login: function(e) {
                const body = {
                        email : this.email,
                        password: this.password
                }
                
                const requestOptions = {
                   method: "POST",
                   headers: {
                       "Content-Type":"application/json"
                   },
                   body : JSON.stringify(body)
                }
                fetch("http://localhost:3030/api/v1/users/login",requestOptions)
                .then (res => res.json())
                .then((data) => {
                    //this.IsAdmin= data.IsAdmin;

                        if(!data.auth) {
                            this.messageError = data.message;
                        }
                        //else if( data.IsAdmin == true){
                        //      console.log("je suis data loging ", data);
                        //}
                        else {
                            let token = data.token;
                            localStorage.setItem('token',token);
                            this.$router.push('/account');
                            window.location.reload();
                             
                        }
                    }
                )
                .catch(
                    err => console.log(err)
                )
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
    font-family: monospace;

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

.btn--login{
 background-color: #000000;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 8px;
  transition: all 0.3s ease-out;
  font-weight: bold;
  font-family: monospace;
}

.btn--login:hover{
 background-color: #B3EEFF; 
  color: #292929;
  font-weight: bold;
  font-family: monospace;
}

.sign__link{
    color: #252e48;
    text-decoration: none;
    font-family: monospace;
    font-weight: bold;
}

</style>