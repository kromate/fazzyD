<template>
  <button class="secondaryBtn btn" @click="makePayment" :disabled="!phone">PAY</button>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "FlutterwaveModal",
  props: {
    isProduction: {
      type: Boolean,
      required: false,
      default: true, //set to true if you are going live
    },
    email: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    flwKey: {
      type: String,
      required: true,
    },
    callback: {
      type: Function,
      required: true,
      default: () => {
        console.log("Payment made, verify payment");
      },
    },
    close: {
      type: Function,
      required: true,
      default: () => {},
    },
    currency: {
      type: String,
      default: "NGN",
    },
    country: {
      type: String,
      default: "NG",
    },
    custom_title: {
      type: String,
      default: "",
    },
    custom_logo: {
      type: String,
      default: "",
    },
    reference: {
      type: String,
      default: "",
    },
    payment_method: {
      type: String,
      default: "card,mobilemoney,ussd,bank",
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    phone() {
      return this.$store.state.phone;
    },
    mode() {
      return this.$store.state.mode;
    },
    AddDet() {
      return this.$store.state.AddDet;
    },
    location() {
      return this.$store.state.location;
    },
    Ocart() {
      let cartStuff = this.cart;
      cartStuff.forEach((item) => {
        item.completed = "No";
        item.delivered = "No";
      });

      return cartStuff;
    },
  },

  methods: {
    check() {
      let item = {
        id: uuidv4(),
        phone: this.phone,
        order: this.Ocart,
        pickUp: this.mode,
        AddDet: this.AddDet,
        location: this.location,
        date: new Date()
          .toUTCString()
          .split(" ")
          .slice(0, 5)
          .join(" "),
      };

      console.log(this.Ocart);
      console.log(item);
      // this.$store.commit("updatedetailedItem", item);
      // this.$store.dispatch("addToOrders");
      // console.log("Payment suceesfull");
    },

    makePayment() {
      console.log(this.flwKey);
      window.FlutterwaveCheckout({
        public_key: this.flwKey, //"FLWPUBK_TEST-844a741225fb004d23aa57060bb9e28a-X", //"FLWPUBK-4dcce91448659808b4c889f22b994ce6-X",
        tx_ref: this.reference,
        amount: this.amount,
        currency: this.currency,
        payment_options: this.payment_method,
        customer: {
          name: this.name,
          email: this.email,
        },
        close: () => {
          let item = { phone: this.phone, ...this.cart };
          console.log(item);
          console.log("closeeeeeeeee");
        },
        callback: () => {
          let item = {
            phone: this.phone,
            order: this.Ocart,
            pickUp: this.mode,
            AddDet: this.AddDet,
            location: this.location,
            date: new Date()
              .toUTCString()
              .split(" ")
              .slice(0, 5)
              .join(" "),
          };

          this.$store.commit("updatedetailedItem", item);
          this.$store.dispatch("addToOrders");
          console.log("Payment suceesfull");
        },
        customizations: {
          title: this.custom_title,
          description: "Payment for items in cart",
          logo: this.custom_logo,
        },
      });
    },
  },

  created() {
    const script = document.createElement("script");
    script.src = !this.isProduction
      ? "https://ravemodal-dev.herokuapp.com/v3.js"
      : "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
};
</script>

<style scoped>
.btn {
  font-size: 1.3rem;
  font-weight: 700;
}
.btn:disabled {
  background: #00000066;
}
</style>
