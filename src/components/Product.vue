<template>
  <div class="product" v-on:click="clicked = !clicked" v-bind:class="{ 'clicked': clicked }">
    <h2>30-Year Line of Credit</h2>
    <div class="loan-amount">
      <label>total loan amount</label>
      <h3>$35,000</h3>
    </div>
    <div class="fixed-apr">
      <label>variable apr</label>
      <h3>6.000%</h3>
    </div>
    <div class="monthly-payment">
      <label>monthly payment</label>
      <h3>$1,675</h3>
    </div>
    <div class="youll-contribute">
      <label>closing costs</label>
      <h3>$0</h3>
    </div>
    <button>Select</button>
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      clicked: false,
    };
  },
};
</script>

<style scoped lang="scss">
.product {
  background: #FFFFFF;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.30);
  border-radius: 4px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "header header" "loan-amount fixed-apr" "monthly-payment youll-contribute" "button button";
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  margin-bottom: 10px;
}

h2 {
  grid-area: header;
  font-family: ProximaNova;
  font-weight: 600;
  font-size: 24px;
  color: #273B49;
  text-align: left;
  margin: 0;
}
.loan-amount {
  grid-area: loan-amount;
}
.fixed-apr {
  grid-area: fixed-apr;
}
.monthly-payment {
  grid-area: monthly-payment;
}
.youll-contribute {
  grid-area: youll-contribute;
}
button {
  grid-area: button;
}

@media only screen and (min-width: 768px) {
  .product {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "header header header header header" "loan-amount fixed-apr monthly-payment youll-contribute button";
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin-bottom: 10px;

    background: #FFFFFF;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.30);
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: box-shadow .2s;
    transition: transform .2s;
    &:hover {
      box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.30);
      transform: scale(1.25);
    }
  }
}

.clicked {
  // border: 2px solid #018BBB;
}

label {
  font-family: ProximaNova;
  font-weight: 600;
  font-size: 12px;
  color: #687680;
  text-transform: uppercase;
}

h3 {
  margin: 0;
  font-family: ProximaNova;
  font-weight: 300;
  font-size: 24px;
  color: #283641;
}

a {
  font-family: ProximaNova;
  font-weight: 400;
  font-size: 12px;
  color: #018BBB;
  line-height: 29px;
  text-decoration: none;
}

button {
  background: #018BBB;
  border-radius: 3px;
  font-family: ProximaNova;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  width: 100%;
  border: none;
  padding: 12px 48px;
}
</style>
