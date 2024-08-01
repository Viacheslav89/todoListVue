<template>
  <li class="task__wrapper">
    <p
      class="task__text"
      v-if="!task.isEdit"
      :class="{ 'task__text--completed': !task.active }"
    >
      {{ task.text }}
    </p>
    <input class="task__text--edit" v-if="task.isEdit" v-model="taskTextEdit" />
    <div class="task__btn--wrapper" v-if="!task.isEdit">
      <button
        class="task__btn--completed button"
        @click="changeStatusTask(task)"
      >
        v
      </button>
      <button class="task__btn--edit button" @click="openInputEditTask">
        ..
      </button>
      <button class="task__btn--delete button" @click="deleteTask(task.id)">
        x
      </button>
    </div>
    <div class="task__btn--wrapper" v-if="task.isEdit">
      <button
        class="task__btn--ok button"
        @click="editTask(task, taskTextEdit)"
      >
        ok
      </button>
      <button class="task__btn--off button" @click="closeInputEditTask">
        off
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Task } from "@/types";
import { ref } from "vue";
import { useTasks } from "@/composables/useTasks";

const props = defineProps<{
  task: Task;
}>();

const taskTextEdit = ref(props.task.text);

const openInputEditTask = () => {
  props.task.isEdit = true;
};

const closeInputEditTask = () => {
  props.task.isEdit = false;
};

const { changeStatusTask, editTask, deleteTask } = useTasks();
</script>

<style scoped>
.task__wrapper {
  margin: 0;
  padding: 0 70px 0 70px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
}

.task__text {
  padding-left: 4px;
  margin: 0;
  width: 100%;
  border-bottom: 1px solid black;
}

.task__text--completed {
  color: rgb(177, 44, 44);
}

.task__text--edit {
  padding-left: 4px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
}

.task__btn--wrapper {
  width: 75px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  width: 100px;
  height: 35px;
  border: 1px solid black;
  border-radius: 12px;
  background-color: rgb(114, 173, 41);
  cursor: pointer;
  margin-bottom: 30px;
  color: black;

  &:hover {
    opacity: 10px;
    background-color: #618f24;
  }
}

.button {
  width: 25px;
  height: 25px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  color: black;
}

.task__btn--ok {
  width: 37.5px;
  background-color: rgb(114, 173, 41);
  font-size: 12px;
  font-weight: bold;
}

.task__btn--off {
  width: 37.5px;
  background-color: rgb(246, 61, 61);
  font-size: 12px;
  font-weight: bold;
}

.task__btn--completed {
  background-color: rgb(114, 173, 41);
}

.task__btn--edit {
  background-color: rgb(248, 248, 78);
}

.task__btn--delete {
  background-color: rgb(246, 61, 61);
}

@media screen and (max-width: 770px) {
  .task__wrapper {
    padding: 0 30px 0 30px;
  }
}

@media screen and (max-width: 500px) {
  .task__wrapper {
    padding: 0 15px 0 15px;
  }
}
</style>
