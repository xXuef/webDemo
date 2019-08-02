import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/Login.vue";
import Main from "./components/Main.vue";
// home
import HomeMainRoute from "./components/homePage/HomeMainRouter.vue";
import HomeTabForAhead from "./components/homePage/HomeTabForAhead.vue";
import HomeTabForAI from "./components/homePage/HomeTabForAi.vue";
import HomeTabForFromwork from "./components/homePage/HomeTabForFromwork.vue";
import HomeTabForBlockChain from "./components/homePage/HomeTabForBlockChain.vue";
import HomeTabForComputerCode from "./components/homePage/HomeTabForComputerCode.vue";

//
import WebAheadDetails from "./components/page/WebAheadDetails.vue";
//special
import Special from "./components/specialPage/Special.vue";
import SpecialForTabAHead from "./components/specialPage/SpecialTabForAhead.vue";
import SpecialTabForAI from "./components/specialPage/SpecialTabForAI.vue";
import SpecialTabForFormwork from "./components/specialPage/SpecialTabForFormwork.vue";

import Error from "./components/Error.vue";

// ebook
import EBook from "./components/eBookPage/EBook.vue";
import EBookTabForAHead from "./components/eBookPage/EBookTabForAhead.vue";
import EBookTabForAI from "./components/eBookPage/EBookTabForAI.vue";
// 详情
import RecommendDetails from "./components/page/RecommendDetails.vue";
// 个人中心
import PersonalAll from "./components/PersonalCenter/PersonalAll.vue";
import PersonalSend from "./components/PersonalCenter/PersonalSend.vue";
import ToSend from "./components/PersonalCenter/ToSend.vue";
import PersonalComment from "./components/PersonalCenter/PersonalComment.vue";
import PersonalStar from "./components/PersonalCenter/PersonalStar.vue";
import PersonalFeel from "./components/PersonalCenter/PersonalFeel.vue";
import PersonalFeelDetails from "./components/PersonalCenter/PersonalFeelDetails";
import SpecialDetails from "./components/specialPage/SpecialDetails";

import TestPage from './components/page/TestPage.vue'
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/test",
      name: "test",
      component: TestPage
    },
    {
      path: "/main",
      name: "main",
      component: Main,
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
            },
            {
              path: "specialTabForFormwork",
              name: "specialTabForFormwork",
              components: {
                specialRouter: SpecialTabForFormwork
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
