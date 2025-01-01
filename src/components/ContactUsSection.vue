<script lang="ts" setup>
import AppFormLabel from "./AppFormLabel.vue";
import AppInputField from "./AppInputField.vue";
import AppSubmitButton from "./AppSubmitButton.vue";
</script>

<template>
  <div>
    <div class="pb-8 relative py-20 lg:py-40" id="contact">
      <div class="container max-w-7xl mx-auto py-8 px-5 md:px-16 2xl:px-0">
        <div class="lg:grid gap-16 grid-cols-12">
          <div class="col-span-4">
            <p class="text-dark-brown text-4xl font-semibold">Contact Us</p>
            <p class="mt-6">
              We appreciate your interest in our website and welcome any
              inquiries you may have. Please don't hesitate to fill the contact
              form if you have any query.
            </p>
          </div>
          <div class="col-span-8 mt-6 lg:mt-0">
            <form
              action="
            "
            >
              <div class="lg:flex gap-8">
                <div class="w-full">
                  <AppFormLabel class="lg:text-xl font-semibold"
                    >First Name</AppFormLabel
                  >
                  <AppInputField></AppInputField>
                </div>

                <div class="w-full mt-4 lg:mt-0">
                  <AppFormLabel class="lg:text-xl font-semibold"
                    >Last Name</AppFormLabel
                  >
                  <AppInputField></AppInputField>
                </div>
              </div>
              <div class="w-full lg:mt-8 mt-4">
                  <AppFormLabel class="lg:text-xl font-semibold"
                    >Email</AppFormLabel
                  >
                  <AppInputField></AppInputField>
                </div>

                <div class="w-full lg:mt-8 mt-4">
                  <AppFormLabel class="lg:text-xl font-semibold"
                    >Write a message</AppFormLabel
                  >
                  <AppInputField as="textarea" class="h-40"></AppInputField>
                </div>

                <AppSubmitButton class="mt-10">Send Message</AppSubmitButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
