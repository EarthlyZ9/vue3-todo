// 최근 날짜의 데이터가 더 위에 나온다.
// 같은 날이라면 뒤늦게 입력한 데이터가 더 위에 나온다

import { inject } from 'vue';

export const userFilter = () => {
    const today = inject('today');
    const fnSort = (a, b) => {
        const a_date = Date.parse(a.date);
        const b_date = Date.parse(b.date);
        if (a_date > b_date) return 1;
        else if (a_date < b_date) return 0;
        else return a.id - b.id;
    };

    // 날짜가 지났지만 완료하지 않은 todos 필터링
    const getPendingTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date < today && !todo.completed)
            .slice()
            .sort(fnSort);
    };

    // 오늘 해야하는 todos 필터링
    const getActiveTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date == today && !todo.completed)
            .slice()
            .sort(fnSort);
    };

    // 오늘 todo 중 완료한 todos 필터링
    const getCompletedTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date == today && todo.completed)
            .slice()
            .sort(fnSort);
    };

    // 오늘 날짜 모든 todos 필터링
    const getAllTodayTodos = (todos) => {
        return getActiveTodayTodos(todos)
            .concat(getCompletedTodayTodos(todos))
            .slice()
            .sort(fnSort);
    };

    // 모든 todos
    const getAllTodos = (todos) => {
        return todos.value.slice().sort(fnSort);
    };
    // slice 메소드 사용하는 이유: 원본 배열은 정렬되지 않은 상태로 두기 위해
    return {
        getPendingTodos,
        getActiveTodayTodos,
        getCompletedTodayTodos,
        getAllTodayTodos,
        getAllTodos,
    };
};
