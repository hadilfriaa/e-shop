<template>
    <footer>
     <div class="footer-container">
      <section class="footer-subscription">
        <p class="footer-subscription-heading">
          Inscrivez-vous pour recevoir nos meilleures offres !
        </p>
        <p class="footer-subscription-text">
          Vous pouvez vous désinscrire à tout moment
        </p>
        <div class="input-areas">
          <form>
            <input
              class="footer-input"
              name="email"
              type="email"
              placeholder="Entrez votre Email"
            />
            <button class="btn--outline">s'inscrire</button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div class="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>À propos</h2>
            <router-link to="/sign">Comment ça marche </router-link>
            <router-link to="/">Authentification</router-link>
            <router-link to="/">Condition d'utilisation</router-link>
          </div>
          <div class="footer-link-items">
            <h2>Contactez nous</h2>
            <router-link to="/">Contact</router-link>
            <router-link to="/">Support</router-link>
            <router-link to="/">Service Client</router-link>
          </div>
        </div>
      </div>
      <section class="social-media">
          <small class="website-rights">Hx © 2021</small>
      </section>
    </div>
    </footer>
</template>


<script>
import Button from '../components/Button.vue'
export default {
  components: { Button },
    setup () {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>

.footer-container {
  background-color: #292929;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  font-family: monospace;

}

.footer-subscription {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
}

.footer-subscription-heading {
  margin-bottom: 24px;
  font-size: 24px;
}

.footer-subscription-text {
  margin-bottom: 24px;
  font-size: 20px;
}

.footer-input {
  padding: 8px 20px;
  border-radius: 3px;
  margin-right: 10px;
  outline: none;
  font-size: 18px;
  margin-bottom: 16px;
  border: 1px solid #fff;
}

.footer-links {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
}

.footer-link-wrapper {
  display: flex;
}

.footer-link-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
}

.footer-link-items h2 {
  margin-bottom: 16px;
}

.footer-link-items > h2 {
  color: #fff;
}

.footer-link-items a {
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.footer-link-items a:hover {
  color: #e9e9e9;
  transition: 0.3s ease-out;
}

.footer-email-form h2 {
  margin-bottom: 2rem;
}

.footer-input::placeholder {
  color: #b1b1b1;
}


.social-media {
  max-width: 1000px;
  width: 100%;
}


.btn--outline{
  background-color: transparent;
  color: #fff;
  padding: 8px 20px;
  border: 2px solid ;
  border-radius: 3px;
  transition: all 0.3s ease-out;
}

.btn--outline:hover{
  background-color: #B3EEFF; 
  color: #292929;
}


.website-rights {
  color: #fff;
  margin-bottom: 16px;
}

@media screen and (max-width: 820px) {
  .footer-links {
    padding-top: 2rem;
  }

  .footer-input {
    width: 100%;
  }

  .btn {
    width: 100%;
  }

  .footer-link-wrapper {
    flex-direction: column;
  }

  .social-media-wrap {
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
}

</style>