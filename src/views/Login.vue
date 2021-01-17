<template>
  <div class="container">
    <img src="@/assets/logo.jpeg" alt="" class="logo" />
    <h1>Login</h1>
    <div>
      <p class="err">{{ Error }}</p>
      <form @submit.prevent="handleSubmit">
        <div class="inputBox">
          <label for="email">EMAIL</label>
          <input type="email" id="email" placeholder="Enter Your Email" v-model="email" required />
        </div>
        <div class="inputBox">
          <label for="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            v-model="password"
            required
          />
        </div>
        <div class="inputBox end flex">
          <p class="bright point" @click="$router.push('signup')">Create an Account ?</p>
        </div>

        <button class="secondaryBtn btn">
          Login
        </button>
      </form>
      <p class="or">OR</p>
      <div class="social flex justify">
        <img src="@/assets/social/facebook.svg" alt="" />
        <img src="@/assets/social/twitter.svg" alt="" />
        <img src="@/assets/social/insta.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      Error: "",
      loader: false,
    };
  },

  methods: {
    handleSubmit() {
      this.loader = true;
      console.log(this.email, this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = firebase.auth().currentUser;
          this.$store.commit("loginUser", user);
          this.$router.push({ path: "/home" });
        })
        .catch((error) => {
          this.loader = false;
          console.log(error.message);
          this.Error = error.message;
        });
    },
  },
};
</script>

<style scoped>
.err {
  text-align: center;
  color: red;
}
.btn {
  max-width: 200px;
}
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-bottom: 2rem;
}
.logo {
  width: 130px !important;
  height: 130px !important;
  margin: 0 auto;
  object-fit: inherit !important;
  border-radius: 100%;
}
h1 {
  text-align: center;
  color: #fc940c;
  margin: 2rem 0px;
}
input {
  padding: 10px;
  background: rgba(0, 0, 0, 0.445);
  outline: none;
  border: 1px solid black;
  color: #d79947;
  font-weight: 600;
  font-size: 1rem;
  width: 279px;
}
label {
  display: block;
  margin-bottom: 10px;
  color: #d79947;
  font-weight: 600;
  font-size: 1rem;
}
.inputBox {
  margin-top: 15px;
  max-width: 99vw;
}
::placeholder {
  color: #d79947a5;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.end {
  justify-content: flex-end;
  width: 300px;
  font-size: 0.7rem;
  margin-top: 3px;
}
.social {
  margin-top: 1.2rem;
}
.social > img {
  height: 1.3rem;
  margin: 0px 8px;
  background: rgba(0, 0, 0, 0.466);
  padding: 0.8rem;
  border-radius: 100%;
}
.or {
  color: #fc940c;
  text-align: center;
  margin-top: 1rem;
  font-weight: 700;
}
</style>
