<template>
  <Sidebar
    :visible.sync="isBarVisible"
    :base-z-index="1000"
    :class="[isHome ? 'bg-primary-4' : 'bg-headerBg']"
    :position="isRTL ? 'right' : 'left'"
  >
    <NuxtLink
      :to="localePath('/about')"
      class="mb-[36px] no-underline font-bold text-start text-base text-primary block"
    >
      {{ $t("footer.aboutrekab") }}
    </NuxtLink>

    <NuxtLink
      :to="localePath('/events')"
      class="mb-[36px] no-underline font-bold text-start text-base text-primary block"
    >
      {{ $t("footer.events") }}
    </NuxtLink>

    <NuxtLink
      :to="localePath('/blogs')"
      class="mb-[36px] no-underline font-bold text-start text-base text-primary block"
    >
      {{ $t("footer.blogs") }}
    </NuxtLink>

    <NuxtLink
      :to="localePath('/contact-us')"
      class="mb-[36px] no-underline font-bold text-start text-base text-primary block"
    >
      {{ $t("footer.contactUs") }}
    </NuxtLink>

    <div class="flex justify-center">
      <Button class="primary">
        {{ $t("header.downloadApp") }}
      </Button>
    </div>
  </Sidebar>
</template>

<script>
export default {
  name: "AppSidebar",
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
    isSidebarVisible: {
      type: Boolean,
      default: false,
    },
    setIsSidebarVisible: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    isBarVisible: {
      set(newValue) {
        if (newValue !== this.isSidebarVisible) {
          this.setIsSidebarVisible(newValue)
        }
      },
      get() {
        return this.isSidebarVisible
      },
    },
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {},
}
</script>
