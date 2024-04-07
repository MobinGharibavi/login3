<template>
  <Body :class="{ 'overflow-hidden': showAuth }">
    <Transition name="fade">
      <div
        v-if="showAuth"
        @click.self="showAuth = false"
        class="fixed left-0 top-0 w-full h-full bg-[#00000040] z-[10] flex items-center justify-center break-words"
      >
        <div
          class="lg:w-[29rem] relative bg-white rounded-[1rem] py-6 px-10 w-full h-full lg:h-max flex-col flex justify-center lg:pb-5 lg:py-5"
        >
          <!-- <div
            class="absolute top-0 left-0 w-full flex items-center px-4 gap-2 py-4 text-[#1C0E07] font-bold text-xl border-b-[0.25rem] lg:hidden"
          >
          <Icon name="eva:arrow-back-outline" />
          <span class="pt-0.5">Login/Register</span>
          </div> -->
          <button
          @click="showAuth = false"
            class="absolute top-0 left-0 p-5 text-[#1C0E07] lg:hidden"
          >
            <Icon name="eva:arrow-back-outline" />
          </button>
          <h1
            v-if="step == 1"
            class="text-[2rem] font-bold leading-[3.5rem] text-[#1C0E07] text-center"
          >
            Register
          </h1>
          <h1
            v-if="step == 2"
            class="text-[2rem] font-bold leading-[3.5rem] text-[#1C0E07] text-center"
          >
            Login
          </h1>
          <h2 class="text-[#5B4A42] leading-[1.75rem] text-center">
            Welcome to
            <span class="text-orange"> CRS Trip </span>
          </h2>
          <div
            class="flex p-1 py-2 bg-[#F7F7F9] rounded-[0.5rem] text-xs text-[#514037] w-[13.25rem] mx-auto mt-4"
          >
            <button
              @click="step = 1"
              :class="{ ' rounded-[0.5rem] text-orange bg-white': step == 1 }"
              class="w-1/2 py-2 flex items-center justify-center rounded-[0.5rem]"
            >
              Register
            </button>
            <button
              @click="step = 2"
              :class="{ ' rounded-[0.5rem] text-orange bg-white': step == 2 }"
              class="w-1/2 py-2 flex items-center justify-center"
            >
              Login
            </button>
          </div>

          <AuthRegister @step="(n) => (step = n)" v-if="step == 1" />
          <AuthLogin @step="(n) => (step = n)" v-if="step == 2" />
        </div>
      </div>
    </Transition>
  </Body>
</template>

<script setup>
const showAuth = ref(false);
const step = ref(1);
const handleShowAuth = (number) => {
  showAuth.value = true;
  step.value = number;
};

defineExpose({
  handleShowAuth,
});
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>