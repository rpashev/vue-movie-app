import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLoggedInState: false,
      tokenState: "",
      usernameState: "",
      userIdState: "",
      imageState: "",
      emailState: "",
      watchlistState: [],
      seenlistState: [],
    };
  },

  actions: {
    login() {
      this.isLoggedInState = true;
    },

    logout() {
      this.isLoggedInState = false;
    },
    updateImage() {},
    addToUserList() {},
    removeFromUserList() {},
  },

  getters: {
    isLoggedIn: (state) => state.isLoggedInState,
    token: (state) => state.tokenState,
    username: (state) => state.usernameState,
    userId: (state) => state.userIdState,
    image: (state) => state.imageState,
    email: (state) => state.emailState,
    watchlist: (state) => state.watchlistState,
    seenlist: (state) => state.watchlistState,
  },
});
