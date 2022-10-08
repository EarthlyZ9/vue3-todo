<script>
export default {
  name: 'App',
};
</script>

<script setup>
import { inject } from 'vue';
import TodoListContainer from './components/TodoListContainer.vue';

// <script setup> 에서는 따로 컴포넌트 선언이나 변수를 return 해주지 않아도 됨

const today = inject('today');

</script>

<template>
  <header>
    <hgroup class="my-5">
      <h1>나의 할일</h1>
      <em>{{today}}</em>
    </hgroup>
  </header>
  <todo-list-container />
</template>

<style scoped>
hgroup {
  text-align: center;
  font-family: 'Arial Bold',sans-serif;
}

hgroup h1 {
  font-weight: bolder;
}
</style>
