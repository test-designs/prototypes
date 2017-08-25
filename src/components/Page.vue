<template>
  <div class="page">
    <tracker></tracker>
    <div class="container">
      <p>The Federal Government advises you that your actual rate, payment, and costs could be higher. Get an official Loan Estimate before choosing a loan. Please note, getting a Loan Estimate will require a hard credit inquiry which will impact your credit. If you continue with the application your offer may be more accurate and you will receive a Loan Estimate once you submit your application.</p>
      <h2>Select the home equity offer that works best for you.</h2>
      <label>Lines of credit</label>
      <product></product>
      <product></product>
      <label>Loans</label>
      <product></product>
      <product></product>
      <product></product>
      <product></product>
      <div class="help">
        <a href="#">Need help deciding between a loan and line of credit?</a>
      </div>
    </div>
  </div>
</template>

<script>
import Tracker from '@/components/Tracker';
import Product from '@/components/Product';

export default {
  name: 'hello',
  components: {
    Tracker,
    Product,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page {
  background: #fff;
  .container {
    padding: 20px 10px;
    p {
      font-family: ProximaNova;
      font-weight: 400;
      font-size: 12px;
      color: #273B49;
      letter-spacing: 0;
      line-height: 15px;
      margin: 0 0 30px 0;
    }
    h2 {
      font-family: ProximaNova;
      font-weight: 200;
      font-size: 24px;
      color: #03121F;
      line-height: 30px;
      margin: 0 0 30px 0;
    }
    label {
      font-family: ProximaNova;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
      color: #687680;
      margin-bottom: 20px;
    }
    .help {
      width: 100%;
      text-align: center;
      margin-top: 10px;
      a {
        font-family: ProximaNova;
        font-weight: 300;
        font-size: 16px;
        color: #018BBB;
        line-height: 24px;
        text-decoration: none;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .page {
    margin: -45px auto 0 auto;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
    max-width: 960px;
    .container {
      padding: 30px 70px;
      .help {
        margin-top: 20px;
      }
    }
  }
}
</style>
