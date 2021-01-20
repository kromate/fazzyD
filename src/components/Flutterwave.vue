<template>
  <div class="flw">
    <button class="button" @click="makePayment">Book Now</button>
  </div>
</template>

<script>
export default {
  name: "FlutterwaveModal",

  methods: {
    makePayment() {
      window.FlutterwaveCheckout({
        public_key: this.flwKey,
        tx_ref: this.reference,
        amount: this.amount,
        currency: this.currency,
        payment_options: this.payment_method,
        customer: {
          name: this.name,
          email: this.email,
        },
        callback: (response) => this.callback(response),
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
