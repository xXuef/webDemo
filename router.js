import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./src/components/Login.vue";
import Home from "./src/components/Home.vue";
// home
import HomeMainRoute from "./src/components/homePage/HomeMainRouter.vue";
import HomeTabForAhead from "./src/components/homePage/HomeTabForAhead.vue";
import HomeTabForAI from "./src/components/homePage/HomeTabForAi.vue";
import HomeTabForFromwork from "./src/components/homePage/HomeTabForFromwork.vue";
import HomeTabForBlockChain from "./src/components/homePage/HomeTabForBlockChain.vue";
import HomeTabForComputerCode from "./src/components/homePage/HomeTabForComputerCode.vue";

//
import WebAheadDetails from "./src/components/page/WebAheadDetails.vue";
//special
import Special from "./src/components/specialPage/Special.vue";
import SpecialForTabAHead from "./src/components/specialPage/SpecialTabForAhead.vue";
import SpecialTabForAI from "./src/components/specialPage/SpecialTabForAI.vue";

import Error from "./src/components/Error.vue";

// ebook
import EBook from "./src/components/eBookPage/EBook.vue";
import EBookTabForAHead from "./src/components/eBookPage/EBookTabForAhead.vue";
import EBookTabForAI from "./src/components/eBookPage/EBookTabForAI.vue";
// 
import RecommendDetails from "./src/components/page/RecommendDetails.vue";

import PersonalAll from "./src/components/PersonalCenter/PersonalAll.vue";
import PersonalSend from "./src/components/PersonalCenter/PersonalSend.vue";
import ToSend from "./src/components/PersonalCenter/ToSend.vue";
import PersonalComment from "./src/components/PersonalCenter/PersonalComment.vue";
import PersonalStar from "./src/components/PersonalCenter/PersonalStar.vue";
import PersonalFeel from "./src/components/PersonalCenter/PersonalFeel.vue";
import PersonalFeelDetails from "./src/components/PersonalCenter/PersonalFeelDetails";
import SpecialDetails from "./src/components/specialPage/SpecialDetails";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "homeMainRoute",
          name: "homeMainRoute",
          components: {
            navContainer: HomeMainRoute
          },
          children: [
            {
              path: "HomeTabForAhead",
              name: "HomeTabForAhead",
              components: {
                homeTabRouter: HomeTabForAhead
              }
            },
            {
              path: "HomeTabForAi",
              name: "HomeTabForAi",
              components: {
                homeTabRouter: HomeTabForAI
              }
            },
            {
              path: "HomeTabForFromwork",
              name: "HomeTabForFromwork",
              components: {
                homeTabRouter: HomeTabForFromwork
              }
            },
            {
              path: "HomeTabForBlockChain",
              name: "HomeTabForBlockChain",
              components: {
                homeTabRouter: HomeTabForBlockChain
              }
            },
            {
              path: "HomeTabForComputerCode",
              name: "HomeTabForComputerCode",
              components: {
                homeTabRouter: HomeTabForComputerCode
              }
            }
          ]
        },
        {
          path: "webAheadDetails",
          name: "webAheadDetails",
          components: {
            navContainer: WebAheadDetails
          }
        },
        {
          path: "special",
          name: "special",
          components: {
            navContainer: Special
          },
          children: [
            {
              path: "specialTabForAhead",
              name: "specialTabForAhead",
              components: {
                specialRouter: SpecialForTabAHead
              }
            },
            {
              path: "specialTabForAI",
              name: "specialTabForAI",
              components: {
                specialRouter: SpecialTabForAI
              }
            }
          ]
        },
        {
          path: "specialDetails",
          name: "specialDetails",
          components: {
            navContainer: SpecialDetails
          }
        },
        {
          path: "eBook",
          name: "eBook",
          components: {
            navContainer: EBook
          },
          children: [
            {
              path: "eBookTabForAHead",
              name: "eBookTabForAHead",
              components: {
                eBookRouter: EBookTabForAHead
              }
            },
            {
              path: "eBookTabForAI",
              name: "eBookTabForAI",
              components: {
                eBookRouter: EBookTabForAI
              }
            }
          ]
        },
        {
          path: "recommendDetails",
          name: "recommendDetails",
          components: {
            navContainer: RecommendDetails
          }
        },
        
        {
          path: "personalAll",
          name: "personalAll",
          components: {
            navContainer: PersonalAll
          },
          children: [
            {
              path: "personalSend",
              name: "personalSend",
              components: {
                myView: PersonalSend
              }
            },
            {
              path: "personalComment",
              name: "personalComment",
              components: {
                myView: PersonalComment
              }
            },
            {
              path: "personalStar",
              name: "personalStar",
              components: {
                myView: PersonalStar
              }
            },
            {
              path: "personalFeel",
              name: "personalFeel",
              components: {
                myView: PersonalFeel
              }
            }
          ]
        },
        {
          path: "toSend",
          name: "toSend",
          components: {
            navContainer: ToSend
          }
        },
        {
          path: "toFeelDetails",
          name: "toFeelDetails",
          components: {
            navContainer: PersonalFeelDetails
          }
        }
      ]
    },
    {
      path: '/*',
      redirect: '/login'
    }
  ]
});
