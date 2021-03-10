<template>
  <button class="secondaryBtn btn" @click="pay">PAY</button>
</template>

<script>
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
  methods: {
    pay() {
      getpaidSetup({
        PBFPubKey: "FLWPUBK-4dcce91448659808b4c889f22b994ce6-X",
        customer_email: this.email,
        customer_firstname: this.name,
        amount: this.amount,
        customer_phone: this.email,
        payment_method: "card,account,ussd",
        country: "NG",
        currency: "NGN",
        txref: this.reference, // Pass your UNIQUE TRANSACTION REFERENCE HERE.
        //integrity_hash: hashedValue, // pass the sha256 hashed value here.
        onclose: function() {},
        callback: function(response) {
          // flw_ref = response.tx.flwRef; // collect flwRef returned and pass to a 					server page to complete status check.
          console.log("This is the response returned after a charge", response);
          console.log("done");
          if (response.tx.chargeResponse == "00" || response.tx.chargeResponse == "0") {
            // redirect to a success page
          } else {
            // redirect to a failure page.
          }
        },
      });
    },
    makePayment() {
      console.log(this.flwKey);
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK-4dcce91448659808b4c889f22b994ce6-X",
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

<style scoped>
.btn {
  font-size: 1.3rem;
  font-weight: 700;
}
</style>
