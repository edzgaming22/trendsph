<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      style="height: 300px"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated :class="$q.dark.isActive ? 'bg-black' : 'bg-grey-2'">
        <q-toolbar>
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
            color="orange"
          />
          <q-toolbar-title
            to="/trends"
            clickable
            v-ripple
            style="
              font-family: Impact, Haettenschweiler, 'Arial Narrow Bold',
                sans-serif;
              color: orange;
            "
            >Trends PH</q-toolbar-title
          >
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseenter="miniState = false"
        @mouseleave="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="500"
        bordered
        :class="$q.dark.isActive ? 'bg-orange-6' : 'bg-orange-6'"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item to="/trends" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="diversity_3" />
              </q-item-section>

              <q-item-section> Trends </q-item-section>
            </q-item>

            <q-separator />

            <q-item to="/sports" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="sports_basketball" />
              </q-item-section>

              <q-item-section> Sports </q-item-section>
            </q-item>

            <q-separator />

            <q-item to="/gaming" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="sports_esports" />
              </q-item-section>

              <q-item-section> Gaming </q-item-section>
            </q-item>

            <q-separator />

            <q-item to="/news" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="newspaper" />
              </q-item-section>

              <q-item-section> News </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />

          <q-page-scroller position="bottom">
            <q-btn fab icon="keyboard_arrow_up" color="orange" />
          </q-page-scroller>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
    };
  },
};
</script>
