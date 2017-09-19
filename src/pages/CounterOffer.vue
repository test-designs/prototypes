<template>
  <div class="counter-offer">
    <header-bar></header-bar>
    <banner :headingMobile="mobileHeading" :headingDesktop="desktopHeading" :headingSub="subHeading"></banner>
    <section class="counter-offer-page">
      <tracker></tracker>
      <div class="container">
        <h2 class="heading2">Based on your reported debt-to-income, we only feel comfortable lending you $30,000 at this time. But you do have some options.</h2>
        <p class="heading2paragraph">Right now, we think your debt-to-income ratio is too high to take on a larger loan. However, you might be able to reduce your debt-to-income ratio if you consolidate your debt into this loan, add more income, or add a co-borrower.</p>
        <p class="mayqualify">You may qualify for more by doing one of the following:</p>
        <div class="counter-offer-cards">
          <button><img src="/static/img/coborrower.svg">
            <h4>Add a co-borrower</h4>
          </button>
          <button><img src="/static/img/consolidate.svg">
            <h4>Consolidate your debt</h4>
          </button>
          <button><img src="/static/img/income.svg">
            <h4>Add more income</h4>
          </button>
        </div>
        <button class="see-offers">See Offers for $30,000</button>
        <p class="discuss">If you would like to apply for a higher amount, you may give us a call at 1-800-HESCNUM to discuss your options.</p>
      </div>
    </section>
    <footsy></footsy>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Tracker from '@/components/Tracker';
import Footsy from '@/components/Footsy';

export default {
  name: 'counter-offer',
  components: {
    HeaderBar: Header,
    Banner,
    Tracker,
    Footsy,
  },
  data() {
    return {
      mobileHeading: 'We can offer you $30,000.',
      desktopHeading: 'We can offer you $30,000.',
      subHeading: 'We know you were looking for more, but we... want our money.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.counter-offer-page {
  max-width: 960px;
  margin: 0 auto;
  background-color: #FFFFFF;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  h1 {
    margin: 0;
  }
  .container {
    padding: 30px 15px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:  "heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2"
                          "heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph"
                          "mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify"
                          "counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards"
                          "seeoffers seeoffers seeoffers seeoffers seeoffers seeoffers seeoffers seeoffers seeoffers seeoffers seeoffers seeoffers"
                          "discuss discuss discuss discuss discuss discuss discuss discuss discuss discuss discuss discuss";
    h2.heading2 {
      grid-area: heading2;
      font-family: ProximaNova;
      font-weight: 600;
      line-height: 29px;
      font-size: 24px;
      color: #273B49;
      margin: 0;
    }
    p.heading2paragraph {
      grid-area: heading2paragraph;
      font-family: ProximaNova;
      font-weight: 300;
      font-size: 16px;
      color: #021829;
      line-height: 24px;
      margin: 10px 0;
    }
    p.mayqualify {
      grid-area: mayqualify;
      font-family: ProximaNova;
      font-weight: 600;
      font-size: 16px;
      color: #021829;
      line-height: 24px;
      margin: 20px 0;
    }
    .counter-offer-cards {
      grid-area: counteroffercards;
      display: grid;
      grid-template-rows: 1fr 1fr 1fr;
      grid-row-gap: 20px;
      button {
        background: #FFFFFF;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.30);
        border-radius: 4px;
        border: none;
        padding: 30px 0;
        cursor: pointer;
        h4 {
          font-family: ProximaNova;
          font-weight: 300;
          font-size: 20px;
          color: #011728;
          margin: 10px 0 0 0;
        }
        transition: box-shadow 0.1s ease-in-out;
        &:hover {
          box-shadow: 0 3px 7px 0 rgba(0,0,0,0.30);
        }
      }
      margin-bottom: 40px;
    }
    .see-offers {
      grid-area: seeoffers;
      background: #018BBB;
      border-radius: 3px;
      border: none;
      padding: 12px 0;
      font-family: ProximaNova;
      font-weight: 600;
      font-size: 15.99px;
      color: #FFFFFF;
      margin-bottom: 30px;
      cursor: pointer;
      &:hover {
        background-color: #286090;
        border-color: #204d74;
      }
    }
    .discuss {
      grid-area: discuss;
      font-family: ProximaNova;
      font-weight: 300;
      font-size: 16px;
      color: #021829;
      line-height: 24px;
    }
  }
}
@media only screen and (min-width: 768px) {
  .counter-offer-page {
    margin-top: -60px;
    margin-bottom: 60px;
    .container {
      padding: 50px 10px;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: auto;
      grid-template-areas: ". heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2 heading2 ." ". heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph heading2paragraph ." ". . . mayqualify mayqualify mayqualify mayqualify mayqualify mayqualify .   . ." ". counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards counteroffercards ." ". . . . seeoffers seeoffers seeoffers seeoffers . . . ." ". . discuss discuss discuss discuss discuss discuss discuss discuss  . .";
      .counter-offer-cards {
        grid-area: counteroffercards;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-column-gap: 20px;
      }
    }
  }
}
</style>
