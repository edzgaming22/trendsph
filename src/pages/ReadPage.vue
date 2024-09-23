<template>
  <div style="margin-top: 0px">
    <p
      style="
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
        font-size: large;
        font-weight: 500;
      "
    >
      {{ this.$route.params.customerid }}
    </p>
  </div>
  <q-separator color="gray" inset />

  <div style="margin-top: 50px">
    <h7
      style="
        color: gray;
        font-weight: 300;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
        font-size: large;
      "
    >
      {{ this.$route.params.customerid }}
    </h7>
  </div>

  <div>
    <q-page class="column flex-center">
      <q-select
        style="width: 350px"
        :loading="fetchingTodos"
        v-model="selectedTodo"
        :options="todos"
        option-label="title"
      />
    </q-page>
  </div>
</template>

<script setup>
import { ref } from "vue";

const todos = ref([]);
const selectTodo = ref();
const fetchingTodos = ref(false);

async function fetchTodos() {
  fetchingTodos.value = true;

  const fetcher = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await fetcher.json();

  fetchingTodos.value = false;

  todos.value = data;
  selectedTodo.value = todos.value[0];
}

fetchTodos();
</script>
