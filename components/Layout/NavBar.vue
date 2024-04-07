<template>
  <div class="p-5 md:px-10 hidden lg:flex justify-between items-center">
    <NuxtLink to="/" class="flex font-bold text-3xl rtl:flex-row-reverse">
      <span class="text-orange-500">C</span>
      <p>rs</p>
      <span class="text-orange-500">T</span>
      <p>rip</p>
      <span class="text-orange-500">.</span>
    </NuxtLink>

    <div class="flex items-center gap-5">
      <NuxtLink to="/"> Home </NuxtLink>
      <NuxtLink to="/" class="text-gray-400"> Connect us </NuxtLink>
      <NuxtLink to="/" class="text-gray-400"> About us </NuxtLink>
    </div>

    <div
                    class="flex p-1 h-[2.5rem] bg-[#F7F7F9] rounded-[0.5rem] min-w-[13.25rem] text-xs text-[#514037] mobile:hidden"
                  >
                    <div
                      :class="{ 'text-orange bg-white': locale == 'fa' }"
                      @click="handleRtlProject('fa')"
                      class="w-1/3 grow cursor-pointer flex items-center justify-center rounded-[0.5rem]"
                    >
                      فارسی
                    </div>
                    <div
                      @click="handleRtlProject('ar')"
                      :class="{ 'text-orange bg-white': locale == 'ar' }"
                      class="w-1/3 grow cursor-pointer flex items-center justify-center rounded-[0.5rem]"
                    >
                      عربی
                    </div>
                    <div
                      @click="handleLtrProject('en')"
                      :class="{ 'text-orange bg-white': locale == 'en' }"
                      class="w-1/3 grow cursor-pointer flex items-center justify-center rounded-[0.5rem]"
                    >
                      English
                    </div>
                  </div>
  </div>

  <div class="flex px-10 py-5 lg:hidden justify-between">
    <button>
      <Icon name="streamline:customer-support-1-solid" />
    </button>

    <NuxtLink to="/" class="text-orange font-bold text-xl"> CRSTRIP </NuxtLink>

    <button>
      <Icon name="mdi:hamburger-menu" />
    </button>
  </div>
</template>

<script setup>
const { setLocale, locale } = useI18n();
const handleRtlProject = (lang) => {
  setLocale(lang);
  document.documentElement.setAttribute("dir", "rtl");
  document.documentElement.setAttribute("lang", lang);
};
const handleLtrProject = (lang) => {
  setLocale(lang);
  document.documentElement.setAttribute("dir", "ltr");
  document.documentElement.setAttribute("lang", lang);
};
</script>