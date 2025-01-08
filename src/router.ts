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
          meta: { title: "Home" },
          component: () => import("./pages/LandingPage.vue"),
        },
      
        {
          path: "about",
          name: RouteName.AboutPage,
          meta: { title: "About Us" },
          component: () => import("./pages/AboutPage.vue"),
        },
        {
          path: "services",
          name: RouteName.ProductsPage,
          meta: { title: "Services" },
          component: () => import("./pages/ProductsPage.vue"),
        },
        {
          path: "blog",
          name: RouteName.BlogPage,
          meta: { title: "Blog" },
          component: () => import("./pages/BlogPage"),
        },
      ],
    },
 
    // {
    //   path: "/auth/login",
    //   name: RouteName.Login,
    //   meta: { title: "Login" },
    //   component: () => import("./pages/auth/LoginPage.vue"),
    // },
    // {
    //   path: "/auth/register",
    //   name: RouteName.Register,
    //   meta: { title: "Register" },
    //   component: () => import("./pages/auth/SignUp.vue"),
    // },
    // {
    //   path: "/auth/activate-account",
    //   name: RouteName.ActivateAccount,
    //   meta: { title: "Activate Account" },
    //   component: () => import("./pages/auth/ActivateAccount.vue"),
    // },
    // {
    //   path: "/auth/school-setup",
    //   name: RouteName.AuthSetup,
    //   meta: { title: "School Setup" },
    //   component: () => import("./pages/auth/Setup.vue"),
    // },
    // {
    //   path: "/membership/subscription",
    //   name: RouteName.Subscription,
    //   meta: { title: "Subscription" },
    //   component: () => import("./pages/auth/Subscription.vue"),
    // },
    // {
    //   path: "/auth/reset-password",
    //   name: RouteName.ResetPassword,
    //   meta: { title: "Reset Password" },
    //   component: () => import("./pages/auth/ResetPassword.vue"),
    //   beforeEnter: async (to, _from, next) => {
    //     const authStore = useAuthStore();
    //     const payload = {
    //       token: to.query.token as string,
    //     };
    //     await authStore.validatePasswordResetToken(payload);
    //     next();
    //   },
    // },
    // {
    //   path: "/auth/forgot-password",
    //   name: RouteName.ForgotPassword,
    //   meta: { title: "Forgot Password" },
    //   component: () => import("./pages/auth/ForgotPassword.vue"),
    // },
    // {
    //   path: "/dashboard",
    //   component: () => import("./layouts/AppLayout.vue"),
    //   meta: { auth: true },
    //   children: [
    //     {
    //       name: RouteName.Dashboard,
    //       meta: { title: "Dashboard" },
    //       path: "dashboard",
    //       component: () => import("./pages/Dashboard.vue"),
    //       beforeEnter: async (_to, _from, next) => {
    //         const authStore = useAuthStore();
    //         const examStore = useExamStore();
    //         const studentStore = useStudentStore();
    //         await authStore.fetchDashboardData();
    //         await examStore.getAllExaminations(1, 3);
    //         await studentStore.getAllStudents();
    //         next();
    //       },
    //     },

    //     // {
    //     //   name: RouteName.ScholarshipDetails,
    //     //   path: "/scholarships/:scholarshipId",
    //     //   meta: {
    //     //     title: "Scholarship Details",
    //     //     permissions: RolesPermissionsView.READ_SCHOLARSHIP_PROGRAM,
    //     //   },
    //     //   component: () => import("./pages/scholarships/details.vue"),
    //     //   beforeEnter: (to, from) => {
    //     //     const id = to.params.scholarshipId;
    //     //     const scholarshipStore = useScholarshipStore();
    //     //     scholarshipStore.getSingleScholarshipProgram(id as string);
    //     //   },
    //     // },
    //   ],
    // },

    // {
    //   path: "/:catchAll(.*)",

    //   meta: { title: "Page Not Found" },
    //   component: () => import("./pages/404.vue"),
    // },
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
