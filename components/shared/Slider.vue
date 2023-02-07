<template>
  <VueSlickCarousel v-bind="settings" :rtl="isRTL">
    <slot></slot>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"

export default {
  name: "SliderComponent",
  components: {
    VueSlickCarousel,
  },
  props: {
    slidesToShow: {
      type: Number,
      default: 3,
    },
    slidesToScroll: {
      type: Number,
      default: 3,
    },
    responsive: {
      type: Array,
      default: () => [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  },
  data() {
    return {
      settings: {
        arrows: false,
        dots: true,
        dotsClass: "slick-dots custom-slick-dots",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: this.slidesToShow,
        slidesToScroll: this.slidesToScroll,
        autoplay: true,
        responsive: this.responsive,
      },
    }
  },
  computed: {
    isRTL() {
      return this.$i18n.locale === "ar"
    },
  },
  methods: {},
}
</script>
