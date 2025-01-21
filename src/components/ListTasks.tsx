import React from "react";
import { DataTasksTypes } from "../types/dataTasks.ts";
import styled from "styled-components";
import Task from "./Task.tsx";

const ListTasks = ({ dataTasks, onClickChangeDoneTask }: ListTasksProps) => {

    return (
        <StyledListTasks>
            {dataTasks.map((item: DataTasksTypes) => (
                <Task 
                    key={item.id}
                    idTask={item.id.toString()}
                    taskText={item.taskText}
                    isDone={item.isDone}
                    onClickChangeDoneTask={() => onClickChangeDoneTask(item.id.toString())}
                />
            ))}
        </StyledListTasks>
    )
};

export default ListTasks;

interface ListTasksProps {
    dataTasks: DataTasksTypes[];
    onClickChangeDoneTask: (id: string) => void;
};

const StyledListTasks = styled.ul`
    width: 100%;
    height: 100%;
`;