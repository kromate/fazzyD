<template>
  <div>
    <div class="right material-icons menu" @click="menu">
      <img src="@/assets/icon/menu.svg" alt="" v-if="sideNav.sign == 'menu'" />
      <img src="@/assets/icon/close.svg" alt="" v-else />
    </div>
    <transition name="slide" appear>
      <div class="sidebar fade" v-if="!sideNav.show">
        <div>
          <h3>Follow us on</h3>
          <div class="social">
            <a href="https://wa.me/message/UNJ6CX6YICVEK1" target="_blank">
              <img src="@/assets/social/whatsapp.svg" alt="" />
            </a>
            <a href="https://twitter.com/Fazzy_D_?s=09" target="_blank">
              <img src="@/assets/social/twitter.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/fazzy_d_" target="_blank">
              <img src="@/assets/social/insta.svg" alt="" />
            </a>
          </div>
        </div>

        <router-link class="box" to="/home" style="margin: 1rem;">
          <div class="navCase">
            <img src="@/assets/icon/Home.svg" alt="" />
            <p>Home</p>
          </div>
        </router-link>
        <router-link class="box" to="/cart" style="margin: 1rem;">
          <div class="navCase">
            <img src="@/assets/icon/Buy.svg" alt="" />
            <p>Cart</p>
          </div>
        </router-link>
        <router-link class="box" to="/custom_order" style="margin: 1rem;">
          <div class="navCase">
            <img src="@/assets/icon/Buy.svg" alt="" />
            <p>Custom Order</p>
          </div>
        </router-link>
        <router-link class="box" to="/favourite" style="margin: 1rem;">
          <div class="navCase">
            <img src="@/assets/icon/Heart.svg" alt="" />
            <p>Favourite</p>
          </div>
        </router-link>
        <router-link class="box" to="/gallery" style="margin: 1rem;">
          <div class="navCase">
            <img src="@/assets/icon/Category.svg" alt="" />
            <p>Gallery</p>
          </div>
        </router-link>

        <div class="navCase" @click="signOut" v-if="auth">
          <img src="@/assets/icon/Logout.svg" alt="" />
          <p>Sign Out</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Menu",
  data() {
    return {
      sideNav: { show: "false", sign: "menu" },
    };
  },

  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("logOut");
          this.$router.go({ path: "login" });
        });
    },
    menu() {
      this.sideNav.show = !this.sideNav.show;
      if (this.sideNav.sign == "close") {
        this.sideNav.sign = "menu";
      } else {
        this.sideNav.sign = "close";
      }
    },
    close() {
      this.sideNav.sign = "menu";
      this.sideNav.show = true;
    },
  },
  computed: {
    changes() {
      return this.$store.state.menu;
    },
    auth() {
      return this.$store.state.user;
    },
  },
  watch: {
    changes() {
      this.close();
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  color: #d79947;
}
.router-link-exact-active.router-link-active > .navCase {
  background: #291800;
}
.navCase {
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  padding: 0.8rem;
  border-radius: 3px;
  width: 180px;
  border: 1px solid #d79947;
}

.navCase:hover {
  background-color: rgb(63, 43, 11);
}
.navCase img {
  height: 22px;
  margin-right: 10px;
}
.navCase p {
  color: #d79947;
  letter-spacing: 2px;
  font-size: 17px;
}
.social {
  display: flex;
  display: flex;
  height: 40px;
  margin-bottom: 2rem;
}
.menu img {
  height: 24px;
}
a {
  width: 21px;
  margin: 0px 10px;
  text-decoration: none;
  font-size: initial;
  color: inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu {
  box-shadow: 1px 4px 2px 0 rgba(0, 0, 0, 0.14), -3px 4px 1px -2px rgba(0, 0, 0, 0.12),
    1px 3px 5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10%;
  width: 27px;
  height: 27px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 5000;
  border: 1px solid #d79947;
}
.menu:hover {
  cursor: pointer;
}
@media screen and (max-width: 445px) {
  .menu {
    padding: 0.2rem;
  }
}
.sidebar {
  background-color: #462e0e;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.5s forwards;
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100vw);
}
</style>
