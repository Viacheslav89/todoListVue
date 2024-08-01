<template>
  <div class="todo__wrapper">
    <h1 class="todo__title">To Do List</h1>
    <input class="todo__input" v-model="taskData.text" type="text" />

    <div class="todo__button--wrapper">
      <button
        class="todo__add--button btn"
        @click="
          createTask(taskData);
          clearInput();
        "
      >
        Добавить
      </button>
      <button class="todo__clear--button btn" @click="clearLocal">Очистить</button>
    </div>

    <AppColumn />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import AppColumn from "../components/AppColumn.vue";
// import AppTask from "../components/AppTask.vue";
import { useTasks } from "../composables/useTasks";
import type { Task } from "@/types";

const initTaskData = (): Task => ({
  text: "",
  active: true,
  isEdit: false,
  id: +(localStorage.getItem("taskId") || 1),
});

const taskData = ref({ ...initTaskData() });

const { tasks, createTask } = useTasks();

const clearInput = () => {
  taskData.value.text = "";
};

const clearLocal = () => {
  localStorage.clear();
  tasks.value = [];
};
</script>

<style scoped>
.todo__wrapper {
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: rgb(248, 248, 210);
  background-size: cover;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}

.todo__title {
  margin: 0;
  margin: 40px auto;
  font-size: 55px;
  font-weight: 400px;
  text-align: center;
}

.todo__input {
  font-size: 16px;
  width: 725px;
  height: 30px;
  margin: 0 auto;
  display: block;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
}

.todo__button--wrapper {
  width: 210px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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

.todo__radio--wrapper {
  width: 350px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.radio {
  cursor: pointer;
}

.content__wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.todo-list-item__input {
  width: 100%;
  background: transparent;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
}

.btn-wrapper {
  display: flex;
  width: 120px;
  justify-content: flex-end;
  height: 25px;
}

.text-completed {
  color: rgb(182, 5, 5);
}

.hidden {
  display: none;
}


@media screen and (max-width: 770px) {
  .todo__title {
    font-size: 50px;
  }

  .todo__input {
    width: 500px;
  }

}

@media screen and (max-width: 550px) {
  .todo__title {
    margin: 25px auto;
  }

  .todo__input {
    width: 450px;
  }

}

@media screen and (max-width: 500px) {
  .todo__title {
    font-size: 45px;
  }

  .todo__input {
    width: 385px;
  }
}

@media screen and (max-width: 420px) {
  .todo__title {
    margin: 20px auto;
    font-size: 40px;
  }

  .todo__input {
    width: 290px;
  }

  .button {
    width: 20px;
    height: 20px;
    font-size: 9px;
  }

  .btn-ok,
  .btn-cancel {
    width: 30px;
    font-size: 7px;
  }
}

@media screen and (max-width: 361px) {
  .todo__title {
    font-size: 35px;
  }

  .todo__input {
    width: 270px;
  }

  .radio-wrapper {
    width: 280px;
    font-size: 12px;
  }

}
</style>
