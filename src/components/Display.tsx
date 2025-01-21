import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Input from "./Input.tsx";
import ListTasks from "./ListTasks.tsx";
import { DataTasksTypes } from "../types/dataTasks.ts";

const Display = () => {
    const [dataTasks, setDataTasks] = useState<DataTasksTypes[]>([
        {id: 0, taskText: 'Example1', isDone: false},
        {id: 1, taskText: 'Example2', isDone: true},
        {id: 2, taskText: 'Example3', isDone: false}
    ]);
    const [taskText, setTaskText] = useState<string>('');

    const handleClickAddTask  = () => {
        setTaskText('');
        
        setDataTasks(
            [
              ...dataTasks,
              {'id': Date.now(), 'taskText': taskText, isDone: false}
            ]
          );
    };

    const handleChangeTaskText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    };

    return (
        <>
            <Header />
            <VisualEffect>
                <Main>
                    <Input 
                        taskText={taskText}
                        onChangeTaskText={handleChangeTaskText}
                        onClickAddNewTask={handleClickAddTask}

                    />
                    <ListTasks 
                        dataTasks={dataTasks}
                    />
                </Main>
                <Footer taskLeft={dataTasks.filter(item => item.isDone !== true).length}/>
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