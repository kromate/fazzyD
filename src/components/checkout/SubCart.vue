<template>
  <div class="subCart" v-if="cart">
    <div class="row" v-for="cat in cart" :key="cat.id">
      <div class="firstCol">
        <img :src="cat.img" class="subCartImg" />
        <div class="subCartDet">
          <h3>{{ cat.name }}</h3>
          <p>Qty: {{ cat.count }}</p>
        </div>
      </div>

      <div class="otherCol">
        <h3 class="col_org fonc">&#8358; {{ cat.price * cat.count }}</h3>
      </div>
    </div>
    <!-- <div class="pricing" v-for="(n, index) in priceDetails" :key="index">
      <div class="firstCol">
        <h1>{{ n.name }}</h1>
      </div>
      <div class="otherCol">
        <h2>{{ n.detail }}</h2>
      </div>
    </div> -->
    <div class="pricing">
      <div class="firstCol">
        <h1 v-if="total">SubTotal</h1>
        <h1 v-else>Loading...</h1>
      </div>
      <div class="otherCol">
        <h3 class="col_org fonc">&#8358; {{ total }}</h3>
      </div>
    </div>

    <div class="flex">
      <flutterwave
        :isProduction="true"
        :name="user.name"
        :email="user.email"
        :amount="total"
        :reference="reference"
        :flwKey="flwKey"
        :callback="callback()"
        :close="close()"
        :currency="currency"
        :country="country"
        :custom_title="customizations.title"
        custom_logo="https://fazzyd.netlify.app/img/logo.8090e318.jpeg"
      />
    </div>
  </div>

  <h2 v-else>Loading</h2>
</template>

<script>
import Flutterwave from "@/components/FlutterwaveModal.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Subcart",
  components: {
    Flutterwave,
  },
  data() {
    return {
      flwKey: process.env.VUE_APP_FLUTTERWAVE_TEST_KEY,

      logo: "https://fazzyd.netlify.app/img/logo.8090e318.jpeg",
      isProduction: process.env.NODE_ENV == "development" ? false : true,
      currency: "NGN",
      country: "NG",
      reference: uuidv4(),
      customizations: {
        title: "FazzyD Fashion Store",
        description: "Get Quality and classic wears at affordable prices",
      },
    };
  },
  methods: {
    close() {
      return null;
      // this.$store.commit("FW_closeFunction");
    },
    callback() {
      return null;
      // this.$store.commit("FW_closeFunction");
    },
  },
  computed: {
    total() {
      return this.$store.state.total;
    },
    cart() {
      return this.$store.state.cart;
    },
    units() {
      return this.$store.state.units;
    },
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(this.cart);
    console.log();
    // this.$store.dispatch("getCart");
    if (this.cart.length != 0) {
      return null;
    } else {
      this.$store.dispatch("getCart");
    }
  },
};
</script>

<style scoped>
.fonc {
  font-size: 1.2rem;
}
.row {
  background: rgba(0, 0, 0, 0.459);
  display: flex;
  padding: 3px;
  min-height: 60px;
  align-items: center;
  margin: 10px 0px;
}

.subCart {
  flex-basis: 50%;
  background: #c4c4c42a;
  padding: 5px;
}
.subCartImg {
  height: 60px;
  border-radius: 3px;
}
.subCartDet {
  margin-left: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0px;
}
.subCartDet > p {
  color: #fc940c;
  font-weight: 600;
  letter-spacing: 1.5px;
}
.col_org {
  color: #fc940c;
}
h3 {
  color: #d79947;
}
h2 {
  color: #fc940c;
  font-size: 2rem;
}
h1 {
  color: #fc940c;
}
.firstCol {
  display: flex;
  flex-basis: 75%;
}
.otherCol {
  display: flex;
  flex-basis: 25%;
  justify-content: flex-end;
  margin-right: 25px;
}
.pricing {
  display: flex;
  padding: 3px;
  align-items: center;
  margin: 10px 0px;
  font-size: 0.8rem !important;
  background: #5e45138c;
}

@media (max-width: 700px) {
  .subCart {
    width: 95%;
  }

  .fonc {
    font-size: 0.9rem;
  }
}
</style>
