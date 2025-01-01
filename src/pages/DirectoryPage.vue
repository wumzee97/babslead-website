<script lang="ts" setup>
import AppSubmitButton from "@/components/AppSubmitButton.vue";
import AppTutorCard from "@/components/AppTutorCard.vue";
import IconCaret from "@/components/icons/IconCaret.vue";
import IconDivider from "@/components/icons/IconDivider.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
</script>
<template>
  <div class="relative -mt-[190px] pt-44">
    <!-- Background Image with Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/academic-tutor.png')]"
      
    >
      <div class="absolute inset-0 bg-black bg-opacity-[72%]"></div>
    </div>

    <!-- Content -->
    <div class="relative">
      <Navbar />

      <main class="relative pt-12 pb-16 px-6">
        <div class="max-w-7xl mx-auto text-center">
          <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">Directory</h1>
          <p class="text-lg lg:text-xl text-gray-300 mb-12">
            Search through different teachers and expertise
          </p>

          <div
            class="bg-benefit-gradient mb-6 flex gap-5 items-center px-2 py- lg:px-3 lg:py-2 justify-self-center backdrop-blur-md rounded-[20px] border border-[#F9F9F940] w-full lg:w-[855px]"
          >
            <div
              class="bg-[#E1C031] rounded-[15px] lg:rounded-[20px] lg:h-[45px] h-[40px] w-[40px] lg:w-[45px] flex justify-center items-center"
            >
              <IconSearch />
            </div>
            <div>
              <input
                type="text"
                class="w-[200px] h-[60px] text-sm lg:text-base text-white outline-none  lg:min-w-[500px] bg-transparent"
                placeholder="Search by Name, subject of specialization, license, curriculum"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <div class="bg-[#FAF8F4] lg:py-12 px-5 md:px-16 2xl:px-0">
    <div class="container max-w-7xl mx-auto">
      <div class="flex justify-between flex-col lg:flex-row items-end gap-5">
        <div class="flex lg:gap-3 gap-1 mt-6">
          <AppSubmitButton class="!w-auto  !py-1">All</AppSubmitButton>
          <AppSubmitButton
            outlined
            class="!w-auto !font-normal !py-1 !border-[#584B13]"
            >Academic</AppSubmitButton
          >
          <AppSubmitButton
            outlined
            class="!w-auto !font-normal !py-1 !border-[#584B13]"
            >SEN</AppSubmitButton
          >
          <AppSubmitButton
            outlined
            class="!w-auto !font-normal !py-1 !border-[#584B13]"
            >Consultant</AppSubmitButton
          >
        </div>
        <div>
          <AppSubmitButton
            outlined
            class="!w-auto !font-normal !py-1 !border-[#584B13]"
            >Filter by <IconCaret class="ml-2" />
          </AppSubmitButton>
        </div>
      </div>

      <div class="lg:grid grid-cols-3 gap-6 mt-10">
       <AppTutorCard v-for="i in 15" :key="i" class="mb-6 lg:mb-0"/>
      </div>
    </div>
  </div>
</template>
