<template>
  <div class="subCart">
    <div class="row" v-for="n in 3" :key="n">
      <div class="firstCol">
        <img src="@/assets/gallery/black_hoodie.png" class="subCartImg" />
        <div class="subCartDet">
          <h3>Zylo Hoodie</h3>
          <p>Qty: 1</p>
        </div>
      </div>

      <div class="otherCol">
        <h2>$ 20</h2>
      </div>
    </div>
    <div class="pricing" v-for="(n, index) in priceDetails" :key="index">
      <div class="firstCol">
        <h1>{{ n.name }}</h1>
      </div>
      <div class="otherCol">
        <h2>{{ n.detail }}</h2>
      </div>
    </div>
    <div class="flex">
      <flutterwave
        :isProduction="isProduction"
        :name="customer.name"
        :email="customer.email"
        :amount="price"
        :reference="reference"
        :flw-key="flwKey"
        :callback="callback"
        :close="close"
        :currency="currency"
        :country="country"
        :custom_title="customizations.title"
        :custom_logo="customizations.logo"
        :payment_method="paymentMethod"
      />
    </div>
  </div>
</template>

<script>
import Flutterwave from "@/components/FlutterwaveModal.vue";
export default {
  name: "Subcart",
  components: {
    Flutterwave,
  },
  data() {
    return {
      price: "9000",
      PBkey: process.env.VUE_APP_FLUTTERWAVE_TEST_KEY,
      priceDetails: [
        { name: "Subtotal:", detail: "$ 60" },
        { name: "Delivery Fees:", detail: "$ 10" },
        { name: "Total:", detail: "$ 70" },
      ],

      isProduction: false,
      flwKey: this.PBkey,
      amount: "",
      currency: "NGN",
      country: "NG",
      customer: {
        name: "Ugwu Raphael",
        email: "ugwuraph@gmail.com",
      },
      customizations: {
        title: "Car Shop",
        description: "Payment for car service",
      },
      paymentMethod: "",
    };
  },
};
</script>

<style scoped>
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
}
</style>
