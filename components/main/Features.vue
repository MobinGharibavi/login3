<template>
      <Auth ref="child"/>
  <div
    class="bg-[#FFF3EC] rounded-[1rem] flex justify-between items-center my-[3.5rem] lg:flex-row lg:text-start flex-col text-center"
  >
    <div class="lg:px-10 lg:pt-0 pt-6 px-4">
      <h1
        class="lg:text-[3rem] lg:leading-[3.625rem] font-black mt-1 text-4xl leading-[3rem]"
        style="letter-spacing: -0.03rem"
      >
        And many other
        <span class="text-orange"> features </span>
        that you should try
      </h1>
      <p class="text-[#514037] leading-[1.75rem] mt-6">
        We have put many features for your convenience in CRSTRIP that you can
        experience on the website or app.
      </p>
      <div class="flex gap-2 mt-6 justify-center lg:justify-start">
        <button @click="childValue(1)"
          class="flex items-center justify-center gap-2 h-12 rounded-[0.625rem] bg-[#307FF8] text-white px-7"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<g id="Diamonds (é»ç³)">
<path id="Vector" d="M6 4H18L22 9L12 21L2 9L6 4Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M2 9H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M12 21L8 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M12 21L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" d="M4 6.5L2 9L12 21L22 9L20 6.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg> Register
        </button>
        <button  @click="childValue(2)"
          class="flex items-center justify-center gap-2 h-12 rounded-[0.625rem] text-[#307FF8] px-7"
        >
        <Icon name="material-symbols:login" :rotate="2" size="2rem"/> Login
        </button>
      </div>
    </div>
    <img
      class="lg:w-1/2 my-[3rem] mb-0 mx-4 w-full"
      src="/img/feature.png"
      alt=""
    />
  </div>
</template>
<script setup>
const child = ref(null);

const childValue = (step) => {
  child.value.handleShowAuth(step)
}
</script>