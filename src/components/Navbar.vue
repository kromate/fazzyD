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
      <router-link class="box" to="/custom_order">
        <div class="navCase">
          <img src="@/assets/icon/Buy.svg" alt="" />
          <p>Custom Order</p>
        </div>
      </router-link>
      <router-link class="box" to="/favourite">
        <div class="navCase">
          <img src="@/assets/icon/Heart.svg" alt="" />
          <p>Favourite</p>
        </div>
      </router-link>
      <router-link class="box" to="/gallery">
        <div class="navCase">
          <img src="@/assets/icon/Category.svg" alt="" />
          <p>Gallery</p>
        </div>
      </router-link>
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
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>

<style scoped>
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
  width: 100%;
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
