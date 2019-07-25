import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './src/components/Login.vue'
import Home from "./src/components/Home.vue";
import WebAhead from "./src/components/page/WebAhead.vue";
import WebAheadDetails from "./src/components/page/WebAheadDetails.vue";
import Special from "./src/components/specialPage/Special.vue";
import Error from "./src/components/Error.vue";
import EBook from "./src/components/eBookPage/EBook.vue";
import RecommendDetails from "./src/components/page/RecommendDetails.vue";
import ForAI from "./src/components/page/ForAI.vue";
import PersonalAll from "./src/components/PersonalCenter/PersonalAll.vue";
import PersonalSend from "./src/components/PersonalCenter/PersonalSend.vue";
import ToSend from "./src/components/PersonalCenter/ToSend.vue";
import PersonalComment from "./src/components/PersonalCenter/PersonalComment.vue";
import PersonalStar from "./src/components/PersonalCenter/PersonalStar.vue";
import PersonalFeel from "./src/components/PersonalCenter/PersonalFeel.vue";
import PersonalFeelDetails from "./src/components/PersonalCenter/PersonalFeelDetails";
import SpecialDetails from "./src/components/specialPage/SpecialDetails";
import ForFramework from "./src/components/page/ForFramework";
import ForBlockChain from "./src/components/page/ForBlockChain";
import ForComputerLanguage from "./src/components/page/ForComputerLanguage";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
          path: 'webAhead',
          name: 'webAhead',
          components: {
            homeContainer: WebAhead
          }
        },
        {
          path: 'webAheadDetails',
          name: 'webAheadDetails',
          components: {
            homeContainer: WebAheadDetails
          }
        },
        {
          path: 'special',
          name: 'special',
          components: {
            homeContainer: Special
          }
        },
        {
          path: 'specialDetails',
          name: 'specialDetails',
          components: {
            homeContainer: SpecialDetails
          }
        },
        {
          path: 'eBook',
          name: 'eBook',
          components: {
            homeContainer: EBook
          }
        },
        {
          path: 'recommendDetails',
          name: 'recommendDetails',
          components: {
            homeContainer: RecommendDetails
          }
        },
        {
          path: 'forAi',
          name: 'forAi',
          components: {
            homeContainer: ForAI
          }
        },
        {
          path: 'forFramework',
          name: 'forFramework',
          components: {
            homeContainer: ForFramework
          }
        },
        {
          path: 'forBlockChain',
          name: 'forBlockChain',
          components: {
            homeContainer: ForBlockChain
          }
        },
        {
          path: 'forComputerLanguage',
          name: 'forComputerLanguage',
          components: {
            homeContainer: ForComputerLanguage
          }
        },
        {
          path: 'personalAll',
          name: 'personalAll',
          components: {
            homeContainer: PersonalAll
          },
          children: [{
              path: 'personalSend',
              name: 'personalSend',
              components: {
                myView: PersonalSend
              }
            },
            {
              path: 'personalComment',
              name: 'personalComment',
              components: {
                myView: PersonalComment
              }
            },
            {
              path: 'personalStar',
              name: 'personalStar',
              components: {
                myView: PersonalStar
              }
            },
            {
              path: 'personalFeel',
              name: 'personalFeel',
              components: {
                myView: PersonalFeel
              }
            },

          ]
        },
        {
          path: 'toSend',
          name: 'toSend',
          components: {
            homeContainer: ToSend
          }
        },
        {
          path: 'toFeelDetails',
          name: 'toFeelDetails',
          components: {
            homeContainer: PersonalFeelDetails
          }
        }
      ]
    },
    // {
    //   path: '/*',
    //   redirect: '/login'
    // }
  ]
})