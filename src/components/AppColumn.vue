<template>
  <div class="todo__radio--wrapper">
    <input
      class="all-radio"
      @change="renderTodos"
      name="radio"
      type="radio"
      value="all"
      v-model="currentColumn"
      checked
    />
    <label for="all-radio">Весь список</label>
    <br />
    <input
      class="active-radio"
      @change="renderTodos"
      name="radio"
      type="radio"
      value="active"
      v-model="currentColumn"
    />
    <label for="active-radio">Активные</label>
    <br />
    <input
      class="completed-radio"
      @change="renderTodos"
      name="radio"
      type="radio"
      value="completed"
      v-model="currentColumn"
    />
    <label for="completed-radio">Выполненые</label>
  </div>

  <ul class="column__wrapper">
    <AppTask
      v-for="taskItem in renderTodos()"
      :key="taskItem.id"
      :task="taskItem"
    />
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTasks } from "@/composables/useTasks";
import AppTask from "../components/AppTask.vue";


let currentColumn = ref("");
const { tasks } = useTasks();


const renderTodos = () => {
  if (currentColumn.value === "active") {
    return tasks.value.filter((task) => task.active);
  }
  if (currentColumn.value === "completed") {
    return tasks.value.filter((task) => !task.active);

  }
  return tasks.value;
};

</script>

<style scoped>
.todo__radio--wrapper {
  width: 400px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.column__wrapper {
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  margin-top: 60px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  word-break: break-all;
}

@media screen and (max-width: 770px) {
  .todo__radio--wrapper {
    width: 300px;
    font-size: 13px;
  }

  .column__wrapper {
    font-size: 15px;
  }
}

@media screen and (max-width: 550px) {
  .todo__radio--wrapper {
    width: 300px;
    font-size: 12px;
  }

  .column__wrapper {
    font-size: 14px;
    /* width: 400px; */
  }
}

@media screen and (max-width: 500px) {
  .todo__radio--wrapper {
    width: 270px;
  }

  .column__wrapper {
    font-size: 14px;
  }
}

@media screen and (max-width: 420px) {
  .column__wrapper {
    font-size: 13px;
  }

  .todo__radio--wrapper {
    width: 250px;
    font-size: 11px;
  }
}

@media screen and (max-width: 361px) {
  .column__wrapper {
    font-size: 12px;
    /* width: 270px; */
  }
}
</style>
