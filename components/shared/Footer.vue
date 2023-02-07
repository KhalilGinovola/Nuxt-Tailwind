<template>
  <footer class="bg-footerBg pt-[48px]">
    <div class="container">
      <div class="flex flex-wrap justify-between">
        <div class="w-full lg:w-1/3">
          <!-- <ImagePreview
            :src="require('~/assets/images/logo/logo.svg')"
            alt="rekab"
            class="mb-[30px]"
          /> -->
          REKAB
        </div>

        <div class="w-full lg:w-1/5 mt-8 lg:mt-0">
          <p class="text-start text-lg text-text mb-[24px] mt-0">
            {{ $t("footer.hotLinks") }}
          </p>

          <NuxtLink
            :to="localePath('/about')"
            class="block no-underline text-start text-base text-text-dark mb-[24px]"
          >
            {{ $t("footer.aboutrekab") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/events')"
            class="block no-underline text-start text-base text-text-dark mb-[24px]"
          >
            {{ $t("footer.events") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/blogs')"
            class="block no-underline text-start text-base text-text-dark mb-[24px]"
          >
            {{ $t("footer.blogs") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/contact-us')"
            class="block no-underline text-start text-base text-text-dark mb-[24px]"
          >
            {{ $t("footer.contactUs") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/faqs')"
            class="block no-underline text-start text-base text-text-dark mb-[24px]"
          >
            {{ $t("footer.faqs") }}
          </NuxtLink>
        </div>

        <div class="w-full lg:w-1/3 mt-2 lg:mt-0">
          <p class="mt-0 text-start text-lg text-text mb-[24px]">
            {{ $t("footer.contactInfo") }}
          </p>

          <p class="mt-0 text-start text-base text-text-dark mb-[24px]">
            {{ `${$t("footer.email")}: ${$t("footer.siteEmail")}` }}
          </p>

          <p class="mt-0 text-start text-base text-text-dark mb-[24px]">
            {{ `${$t("footer.phone")}: ${$t("footer.sitePhone")}` }}
          </p>

          <p class="mt-0 text-start text-base text-text-dark mb-[24px]">
            {{ `${$t("footer.website")}: ${$t("footer.siteLink")}` }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap justify-between py-[24px]">
        <div class="w-full lg:w-1/3 flex py-2">
          <img
            class="me-3 cursor-pointer"
            :src="require('~/assets/images/icons/facebook.svg')"
            width="40px"
            height="40px"
            @click="openLink(socialLinks.facebook)"
          />
          <img
            class="cursor-pointer"
            :src="require('~/assets/images/icons/linkedIn.svg')"
            width="40px"
            height="40px"
            @click="openLink(socialLinks.instagram)"
          />
        </div>
        <div class="w-full lg:w-1/3 flex py-2">
          <p class="mt-0 text-start text-base text-text-dark mb-[24px]">
            {{ $t("footer.rightsReserved") }}
            <span class="text-primary">rekab</span>
          </p>
          <p class="mt-0 text-start text-base text-text-dark mb-[24px] mx-1">
            2022 ©
          </p>
        </div>

        <div class="w-full lg:w-1/3 flex py-2">
          <NuxtLink
            :to="localePath('/privacy-policy')"
            class="block no-underline text-start text-base text-text-dark mb-[24px]"
          >
            {{ $t("footer.privacyPolicy") }}
          </NuxtLink>

          <NuxtLink
            :to="localePath('/terms-and-conditions')"
            class="block no-underline text-start text-base text-text-dark mb-[24px] ms-5"
          >
            {{ $t("footer.termsAndConditions") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "AppFooter",
  data() {
    return {}
  },
  computed: {
    ...mapState("home", {
      socialLinks: (state) => {
        return state.socialLinks
      },
    }),
    ...mapState("common", {
      generalSetting: (state) => state.generalSetting,
    }),
  },
  methods: {
    openLink(link) {
      if (link) {
        window.open(this.getLink(link), "_blank")
      }
    },
    getLink(link) {
      if (link?.length > 0) {
        if (link.startsWith("http")) {
          return link
        } else {
          return `//${link}`
        }
      }
    },
  },
}
</script>
