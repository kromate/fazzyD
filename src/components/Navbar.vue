<template>
  <nav>
    <img src="@/assets/NavLogo.svg" alt="" class="Navlogo" />
    <Sidebar class="Sidebar smShow" />
    <div class="menu smHide">
      <router-link class="box" to="/home">
        <div class="navCase">
          <img src="@/assets/icon/Home.svg" alt="" />
          <p>Home</p>
        </div>
      </router-link>

      <router-link class="box" to="/cart">
        <div class="navCase">
          <img src="@/assets/icon/Buy.svg" alt="" />
          <p>Cart</p>
        </div>
      </router-link>

      <div class="navCase dropdown">
        <p>Extra</p>
        <img src="@/assets/icon/drop.svg" alt="" style="margin-left:4px" />

        <ul class="dropdown-nav">
          <li>
            <router-link class="box" to="/profile">
              <div class="navCase">
                <!-- <img src="@/assets/icon/Heart.svg" alt="" /> -->
                <p>Profile</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="box" to="/favourite">
              <div class="navCase">
                <img src="@/assets/icon/Heart.svg" alt="" />
                <p>Favourite</p>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="box" to="/gallery">
              <div class="navCase">
                <img src="@/assets/icon/Category.svg" alt="" />
                <p>Gallery</p>
              </div>
            </router-link>
          </li>
          <li>
            <a href="https://wa.me/message/UNJ6CX6YICVEK1" target="_blank">
              <div class="navCase" style="width:130px">
                <img src="@/assets/icon/Buy.svg" alt="" />
                <p>Custom Order</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="navCase" @click="signOut" v-if="auth">
        <img src="@/assets/icon/Logout.svg" alt="" />
        <p>Signout</p>
      </div>
    </div>

    <div class="social smHide">
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
  </nav>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: { Sidebar },
  computed: {
    auth() {
      return this.$store.state.user;
    },
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
  },
};
</script>

<style scoped>
li {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dropdown > a {
  display: flex;
  align-items: center;
}
.dropdown > a .icon {
  margin-left: 0.25em;
}

.dropdown:hover .dropdown-nav {
  opacity: 1;
  transform: translateY(0);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dropdown-nav {
  opacity: 0;
  transition: transform 0.3s cubic-bezier(0.88, -0.72, 0, 1), opacity 0.3s ease-in-out;
  transform: translateY(-4rem);
  list-style: none;
  margin: 0;
  padding: 10px;
  position: absolute;
  top: 48px;
  z-index: 1;
  background: rgb(64 60 60);
}
.dropdown-nav a {
  font-weight: 300;
  font-size: 1.2rem;
}

a {
  text-decoration: none;
}
.social > a {
  width: 21px;
  margin: 0px 10px;
}
.menu {
  display: flex;
}
.social {
  display: flex;
}
.router-link-exact-active.router-link-active > .navCase {
  background: #000000;
}
.navCase {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
  padding: 0.4rem;
  border-radius: 3px;
  width: 100px;
}

.navCase:hover {
  background-color: rgb(63, 43, 11);
}
.navCase img {
  height: 18px;
  margin-right: 4px;
}
.navCase p {
  color: #d79947;
  letter-spacing: 2px;
  font-size: 12px;
}

nav {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}
.Navlogo {
  height: 20px;
  /* width:auto; */
}

.Sidebar {
  display: none;
}

@media (max-width: 900px) {
  .social > a {
    width: 18px;
    margin: 0px 10px;
  }
}
@media (max-width: 800px) {
  .smHide {
    display: none;
  }
  .smShow {
    display: block;
  }
}
</style>
