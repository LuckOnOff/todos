import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Input from "./Input.tsx";
import ListTasks from "./ListTasks.tsx";
import { DataTasksTypes } from "./../types/dataTasks.ts";
import { Filter } from "../types/filter.ts";

const Display = () => {
    const [dataTasks, setDataTasks] = useState<DataTasksTypes[]>([
        {id: 0, taskText: 'Example1', isDone: false},
        {id: 1, taskText: 'Example2', isDone: true},
        {id: 2, taskText: 'Example3', isDone: false}
    ]);
    const [taskText, setTaskText] = useState<string>('');
    const [isShowListTasks, setIsShowListTasks] = useState<boolean>(true);
    const [filter, setFilter] = useState<Filter>('all');

    const handleClickAddTask  = () => {
        if(taskText.length === 0) return;

        setTaskText('');
        setDataTasks(
            [
              ...dataTasks,
              {id: dataTasks.length + 1, taskText: taskText, isDone: false}
            ]
          );
    };

    const handleChangeTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    };

    const handleChangeShowTasks = () => {
        setIsShowListTasks(!isShowListTasks);
    };

    const handleChangeIsDoneTask = (id: string) => {
        setDataTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === +id ? { ...task, isDone: !task.isDone } : task
            )
        );
    };

    const handleClickClearCompleteTasks = () => {
        setDataTasks(prevTasks =>
            prevTasks.filter(item => !item.isDone)
        );
    };

    const getFilteredTodos = (): DataTasksTypes[] => {
        switch (filter) {
            case 'active':
                return dataTasks.filter(item => !item.isDone);
            case 'completed':
                return dataTasks.filter(item => item.isDone);
            case 'all':
            default:
                return dataTasks;
        }
    };

    const filteredTodos = getFilteredTodos();
    

    return (
        <>
            <Header />
            <VisualEffect>
                <Main>
                    <Input 
                        taskText={taskText}
                        onChangeTaskText={handleChangeTaskText}
                        onClickAddNewTask={handleClickAddTask}
                        isShowTasks={isShowListTasks}
                        onClickShowTasks={handleChangeShowTasks}
                    />
                    {isShowListTasks && 
                    <ListTasks 
                        dataTasks={filteredTodos}
                        onClickChangeDoneTask={handleChangeIsDoneTask}
                    />
                    }
                </Main>
                <Footer 
                    taskLeft={filteredTodos.length}
                    onClickClearCompleteTasks={handleClickClearCompleteTasks}
                    onClickFilterTasks={(newFilter: Filter) => setFilter(newFilter)}
                    filter={filter}
                />
            </VisualEffect>
        </>
    )
};

export default Display;

const Main = styled.main`
    width: 100%;
`;

const VisualEffect = styled.div`
    width: 100%;
    max-width: 30rem;
    box-shadow: 0 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
    overflow: hidden;
`;