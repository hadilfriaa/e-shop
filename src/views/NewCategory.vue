<template>
    <div class="Sign__form">
        <TitlePage title="Créer une nouvelle catégorie "/>
        <form @submit.prevent="create">
            <div class="form__group">
                <label htmlFor="title"> title </label>
                <input class="inpt" type="text" name="title"  v-model="title" />
            </div>
            <div class="form__group">
                <input class="btn--sign" type="submit" value="create" />
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

                title: "",
                description: "",

                messageError: ""
            }
        },
        methods: {
            create: function() {
                return fetch("http://localhost:3030/api/v1/category", {
                    method: "POST",
                    headers: {"Content-Type":"Application/json"},
                    body: JSON.stringify( {
                        title: this.title
                       
                    })
                })
                .then (res => res.json())
                .then((data) => {
                    console.log( data);
                    if(data.error) {
                        console.log(data.error);
                        this.messageError = data.error;
                    } else {
                        this.$router.push('/dashCategory');
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