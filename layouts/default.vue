<template>
  <div :key="lang" class="min-h-screen">
    <app-header />
    <Nuxt />
    <success-fail-message />
    <app-footer />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { handleLanguageChange } from "@/utils/langaugeChanger"
import SuccessFailMessage from "~/components/shared/SuccessFailMessage.vue"
import AppFooter from "~/components/shared/Footer.vue"
import AppHeader from "~/components/shared/Header.vue"
import { GET_SEO } from "~/utils/storeActions"

export default {
  name: "DefaultLayout",
  components: {
    SuccessFailMessage,
    AppFooter,
    AppHeader,
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.isBlog || this.isEvent ? "" : this.seo.meta_description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.isBlog || this.isEvent ? "" : this.seo.meta_description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.seo.meta_keyword.join(", "),
        },
      ],
    }
  },
  computed: {
    ...mapState("common", {
      seo: (state) => state.seo,
    }),
    lang() {
      return this.$i18n.locale
    },
    isBlog() {
      return (
        this.$route.fullPath.includes("/blogs/") && this.$route.params?.id > 0
      )
    },
    isEvent() {
      return (
        this.$route.fullPath.includes("/events/") && this.$route.params?.id > 0
      )
    },
  },
  created() {
    if (process.client) {
      const lang = localStorage?.getItem("lang") || this?.$i18n?.locale || "en"
      handleLanguageChange(this, lang)
    }

    this.GET_SEO()
  },
  methods: {
    ...mapActions("common", [GET_SEO]),
  },
}
</script>
