import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import HomePage from "../pages/HomePage.vue";
import ExplorePage from "../pages/ExplorePage.vue";
import DetailsPage from "../pages/DetailsPage.vue";
import DatabasePage from "../pages/DatabasePage.vue";
import ProfilePage from "../pages/ProfilePage.vue";
import SeenlistPage from "../pages/SeenlistPage.vue";
import WatchlistPage from "../pages/WatchlistPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/details/:movieId",
    component: DetailsPage,
  },
  {
    path: "/seenlist",
    component: SeenlistPage,
  },
  {
    path: "/watchlist",
    component: WatchlistPage,
  },
  {
    path: "/database",
    component: DatabasePage,
  },
  {
    path: "/profile",
    component: ProfilePage,
  },
  {
    path: "/explore",
    component: ExplorePage,
  },
  { path: "/:pathMatch(.*)*", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
