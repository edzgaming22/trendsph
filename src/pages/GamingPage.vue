<template>
  <div>
    <q-toolbar-title style="font-family: sans-serif; color: gray"
      >Gaming</q-toolbar-title
    >
  </div>
  <q-separator color="gray" inset />

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img src="~assets/images/ml/MobileLegends.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Mobile Legends</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn :to="{ name: 'readpage', params: { customerid: lorem } }" flat
          >Open</q-btn
        >
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img src="~assets/images/lol/jinx.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">League Of Legends</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn :to="{ name: 'readpage', params: { customerid: lorem } }" flat
          >Open</q-btn
        >
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
