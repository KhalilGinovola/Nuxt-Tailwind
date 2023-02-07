<template>
  <div>
    <header
      :class="[
        'app-header bg-primary-4 h-[136px] flex items-center fixed w-full z-[1000]',

      ]"
    >
      <div class="container">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex flex-wrap items-center">
            <div class="cursor-pointer me-0 sm:me-12" @click="openHome">
              <!-- <ImagePreview
                :src="require('~/assets/images/logo/logo.svg')"
                alt="rekab"
              /> -->
              REKAB
            </div>

            <NuxtLink
              :to="localePath('/about')"
              class="me-4 no-underline font-bold text-start text-base text-primary mb-0 hidden lg:block"
            >
              {{ $t("footer.aboutrekab") }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/events')"
              class="me-4 no-underline font-bold text-start text-base text-primary mb-0 hidden lg:block"
            >
              {{ $t("footer.events") }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/blogs')"
              class="me-4 no-underline font-bold text-start text-base text-primary mb-0 hidden lg:block"
            >
              {{ $t("footer.blogs") }}
            </NuxtLink>

            <NuxtLink
              :to="localePath('/contact-us')"
              class="me-8 no-underline font-bold text-start text-base text-primary mb-0 hidden lg:block"
            >
              {{ $t("footer.contactUs") }}
            </NuxtLink>
          </div>

          <div class="flex flex-wrap items-center">
            <Button
              :label="$i18n.locale == 'ar' ? 'en' : 'ar'"
              class="p-button-text text-primary"
              @click="changeLanguage"
            />
            <Button
              class="p-button-text block lg:hidden"
              @click="setIsSidebarVisible(true)"
            >
              <i class="pi pi-bars text-2xl text-primary"></i>
            </Button>
            <Button class="primary hidden lg:block">
              {{ $t("header.downloadApp") }}
            </Button>
          </div>
        </div>
      </div>
    </header>
    <AppSidebar
      :is-home="isHome"
      :is-sidebar-visible="isSidebarVisible"
      :set-is-sidebar-visible="setIsSidebarVisible"
    />
  </div>
</template>

<script>
import { handleLanguageChange } from "@/utils/langaugeChanger"
import AppSidebar from "@/components/shared/AppSidebar.vue"

export default {
  name: "AppHeader",
  components: {
    AppSidebar,
  },
  data() {
    return {
      isSidebarVisible: false,
    }
  },
  computed: {

    isHome() {
      return this.$route.fullPath === "/" || this.$route.fullPath === "/en"
    },

  },
  methods: {
    changeLanguage() {
      const newLang = this.$i18n.locale === "en" ? "ar" : "en"

      handleLanguageChange(this, newLang)
    },
    setIsSidebarVisible(value) {
      this.isSidebarVisible = value
    },
    openHome() {
      this.$router.push(this.localePath("/"))
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header.eventHeader {
  z-index: 0 !important;

  .hidden {
    visibility: visible !important;
  }
}
</style>
