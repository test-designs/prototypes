import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Offers from '@/pages/Offers';
import PersonalInfo from '@/pages/PersonalInfo';
import CounterOffer from '@/pages/CounterOffer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/offers',
      name: 'Offers',
      component: Offers,
    },
    {
      path: '/personal-info',
      name: 'PersonalInfo',
      component: PersonalInfo,
    },
    {
      path: '/counter-offer',
      name: 'CounterOffer',
      component: CounterOffer,
    },
  ],
});
