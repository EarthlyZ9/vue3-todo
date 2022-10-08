<script>
export default {
  name: 'TodoListContainer',
};
</script>


<script setup>
import { ref, readonly, provide } from 'vue';
import { useStorage } from '../compositions/storage';
import TodoListNew from './TodoListNew.vue';
import TodoListMain from './TodoListMain.vue';

const todos = ref([]);
const { loadTodos, saveTodos, storage_id } = useStorage();

provide('todos', readonly(todos));

// localStorage 로부터 todo 배열에 들어오 ㄹ데이터를 불러오는 함수
const initTodos = (init_todos) => {
  todos.value = init_todos;
};

// todo 추가 함수
const addTodo = (job, date) => {
  todos.value.push({
    id: storage_id.value++,
    job: job,
    date: date,
    completed: false,
  });
  saveTodos(todos);
};

// todo 삭제 함수
const removeTodo = (id) => {
  todos.value.splice(id, 1);
  todos.value.forEach((todo, idx) => {  s;
    todo.id = idx;
  });
  saveTodos(todos.value);
};

// todo 체크 표시 함수
const completeTodo = (id) => {
  todos.value.find((todo) => todo.id == id).completed = true;
  saveTodos(todos);
};

provide('addTodo', addTodo);
provide('removeTodo', removeTodo);
provide('completeTodo', completeTodo);

loadTodos(initTodos);
</script>

<template>
  <todo-list-new/>
  <section class="container">
    <div class="row justify-content-center m-2">
      <todo-list-main/>
    </div>
  </section>
</template>

<style></style>
