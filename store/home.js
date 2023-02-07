import { SET_SOCIAL_LINKS, SET_HOME_BLOGS } from "~/utils/storeMutations"

import { GET_SOCIAL_LINKS, GET_HOME_BLOGS } from "~/utils/storeActions"

import { $axios } from "~/utils/axios"

export default {
  namespaced: true,

  state: () => ({
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
    },
    homeBlogs: [],
  }),
  getters: {},
  mutations: {
    [SET_HOME_BLOGS]: (state, data) => {
      state.homeBlogs = data?.home_articles || []
    },
    [SET_SOCIAL_LINKS]: (state, data) => {
      state.socialLinks = data
    },
  },
  actions: {
    [GET_HOME_BLOGS]: ({ commit }) => {
      return new Promise((resolve) => {
        $axios.$get("get-home-data").then((response) => {
          commit(SET_HOME_BLOGS, response.data)
          resolve(response.data)
        })
      })
    },
    [GET_SOCIAL_LINKS]: ({ commit }) => {
      return new Promise((resolve) => {
        $axios.$get("get-social-links").then((response) => {
          commit(SET_SOCIAL_LINKS, response.data)
          resolve(response.data)
        })
      })
    },
  },
}
