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
      <button class="secondaryBtn btn" @click="pay">PAY</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Subcart",
  data() {
    return {
      PBFKey: "FLWPUBK_TEST-844a741225fb004d23aa57060bb9e28a-X",
      priceDetails: [
        { name: "Subtotal:", detail: "$ 60" },
        { name: "Delivery Fees:", detail: "$ 10" },
        { name: "Total:", detail: "$ 70" },
      ],
    };
  },
  // methods: {
  //   pay() {
  //     getpaidSetup({
  //       PBFPubKey: this.PBFKey,
  //       customer_email: "email",
  //       customer_firstname: "fullName",
  //       amount: 2500,
  //       customer_phone: "phone",
  //       payment_method: "card,account,ussd",
  //       country: "NG",
  //       currency: "NGN",
  //       txref: "txRef", // Pass your UNIQUE TRANSACTION REFERENCE HERE.
  //       onclose: function() {},
  //       callback: function(response) {
  //         console.log("This is the response returned after a charge", response);
  //         if (response.tx.chargeResponse == "00" || response.tx.chargeResponse == "0") {
  //           // redirect to a success page
  //         } else {
  //           // redirect to a failure page.
  //         }
  //       },
  //     });
  //   },
  // },
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
.btn {
  font-size: 1.3rem;
  font-weight: 700;
}
@media (max-width: 700px) {
  .subCart {
    width: 95%;
  }
}
</style>
