// @ts-nocheck
import { createRouter, createWebHistory } from "vue-router";
// import {
//   getAccessTokenFromCookie,
//   getMemberAccessTokenFromCookie,
// } from "./utils/helpers";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { RouteName } from "./utils/enums";
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("./layouts/WebLayout.vue"),
      children: [
        {
          path: "",
          name: RouteName.LandingPage,
          meta: { title: "Home", description: 'Transforming Personal Brand into a Traffic Machine', ogImage: 'https://babslead.com/babslead.jpg'  },
          component: () => import("./pages/LandingPage.vue"),
        },
      
        {
          path: "about",
          name: RouteName.AboutPage,
          meta: { title: "About Us", description: 'Transforming Personal Brand into a Traffic Machine', ogImage: 'https://babslead.com/babslead.jpg' },
          component: () => import("./pages/AboutPage.vue"),
        },
        {
          path: "services",
          name: RouteName.ProductsPage,
          meta: { title: "Services", description: 'Transforming Personal Brand into a Traffic Machine', ogImage: 'https://babslead.com/babslead.jpg' },
          component: () => import("./pages/ProductsPage.vue"),
        },
        {
          path: "blog",
          name: RouteName.BlogPage,
          meta: { title: "Blog", description: 'Transforming Personal Brand into a Traffic Machine', ogImage: 'https://babslead.com/babslead.jpg' },
          component: () => import("./pages/BlogPage.vue"),
        },
      ],
    },
 
  
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.querySelector(to.hash);
      if (element) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

// router.beforeEach(
//   (
//     to: RouteLocationNormalized,
//     _from: RouteLocationNormalized,
//     next: NavigationGuardNext
//   ) => {
//     const nearestWithTitle = to.matched
//       .slice()
//       .reverse()
//       .find((r) => r.meta && r.meta.title);
//     if (nearestWithTitle) {
//       document.title = nearestWithTitle.meta.title + " | Quizzy";
//     }
//     const accessToken = getAccessTokenFromCookie();
//     const memberAccessToken = getMemberAccessTokenFromCookie();

//     if (
//       to.meta.permissions &&
//       hasPermission(to.meta.permissions) == false &&
//       isSuperAdmin() == false
//     ) {
//       toast.success("You do not have the permission to view this page");
//       return next("/login");
//     }

//     // Not logged into a guarded route?
//     if (to.meta.auth && !accessToken) next({ name: RouteName.Login });
//     else if (to.meta.memberAuth && !memberAccessToken)
//       next({ name: RouteName.StudentLogin });
//     // Logged in for an auth route
//     else if (
//       (to.name == RouteName.Login || to.name == "register") &&
//       accessToken
//     )
//       next({ name: RouteName.Dashboard });
//     else if (to.name == RouteName.StudentLogin && memberAccessToken)
//       return next({ name: RouteName.StudentDashboard });
//     // Carry On...
//     else next();
//   }
// );

export default router;
