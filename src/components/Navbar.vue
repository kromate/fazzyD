<template>
  <nav>
    <img src="@/assets/NavLogo.svg" alt="" class="Navlogo" />
    <Sidebar class="Sidebar smShow" />
    <div class="menu smHide">
      <div class="navCase">
        <img src="@/assets/icon/Home.svg" alt="" />
        <p>Home</p>
      </div>
      <div class="navCase">
        <img src="@/assets/icon/Heart.svg" alt="" />
        <p>Favourite</p>
      </div>
      <div class="navCase">
        <img src="@/assets/icon/Category.svg" alt="" />
        <p>Gallery</p>
      </div>
      <div class="navCase">
        <img src="@/assets/icon/Buy.svg" alt="" />
        <p>Cart</p>
      </div>
    </div>

    <div class="social smHide">
      <a href="http://what.com">
        <img src="@/assets/social/whatsapp.svg" alt="" />
      </a>
      <a href="http://what.com">
        <img src="@/assets/social/twitter.svg" alt="" />
      </a>
      <a href="http://what.com">
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
  width: 21px;
  margin: 0px 10px;
}
.menu {
  display: flex;
}
.social {
  display: flex;
}
.navCase {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
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

@media (max-width: 800px) {
  .smHide {
    display: none;
  }
  .smShow {
    display: block;
  }
}
</style>
