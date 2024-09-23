<template>
  <div>
    <q-toolbar-title
      style="
        font-family: cursive, sans-serif, 'Lucida Sans', Arial, sans-serif;
        font-weight: 500;
        color: black;
      "
      >CATEGORIES</q-toolbar-title
    >
  </div>
  <q-separator color="gray" inset />

  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-green-13 text-white">
      <q-card-section>
        <div class="text-h6">TRENDS</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <!-- <q-btn to="/readpage" flat>Read</q-btn> -->
        <q-btn :to="{ name: 'readpage', params: { customerid: lorem } }" flat
          >Open</q-btn
        >
      </q-card-actions>
    </q-card>

    <q-card class="my-card bg-pink-5 text-white">
      <q-card-section>
        <div class="text-h6">SPORTS</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <!-- <q-btn to="/readpage" flat>Read</q-btn> -->
        <q-btn :to="{ name: 'readpage', params: { customerid: lorem } }" flat
          >Open</q-btn
        >
      </q-card-actions>
    </q-card>

    <q-card class="my-card bg-red-12 text-white">
      <q-card-section>
        <div class="text-h6">GAMING</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <!-- <q-btn to="/readpage" flat>Read</q-btn> -->
        <q-btn :to="{ name: 'readpage', params: { customerid: lorem } }" flat
          >Open</q-btn
        >
      </q-card-actions>
    </q-card>

    <q-card class="my-card bg-blue-12 text-white">
      <q-card-section>
        <div class="text-h6">NEWS</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <!-- <q-btn to="/readpage" flat>Read</q-btn> -->
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
