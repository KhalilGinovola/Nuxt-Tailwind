<template>
  <div class="pt-[165px] bg-primary-4">
    <div class="container flex flex-wrap items-center">
      <div class="w-full lg:w-1/2">
        <div class="flex flex-wrap pb-[65px] lg:-mt-[70px]">
          <div class="flex">
            <p class="ms-2 text-text-home text-sm font-bold">
              {{ $t("home.blogs") }}
            </p>
          </div>

          <div class="flex ms-2">
            <p class="ms-2 text-text-home text-sm font-bold">
              {{ $t("home.calendar") }}
            </p>
          </div>
        </div>

      </div>

      <div class="pb-[38px] mt-[50px] lg:mt-0 w-full lg:w-1/2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeading",
}
</script>
