import React from "react";
import styled from "styled-components";

const Task = ({ idTask, taskText, isDone, onClickChangeDoneTask }: TaskProps) => {

    return (
        <ListTasksItem>
            <HiddenCheckbox
                type="checkbox"
                id={idTask}
                checked={isDone}
                name="isDone"
            />
            <CheckboxLabel
                onClick={() => onClickChangeDoneTask(idTask)}
                title={'Пометить как ' + (isDone ? 'не выполненную' : 'выполненную')}
                htmlFor={idTask}
            ></CheckboxLabel>
            <TaskText $isDone={isDone}>{taskText}</TaskText>
        </ListTasksItem>
    )
};

export default Task;

interface TaskProps {
    idTask: string;
    taskText: string;
    isDone: boolean;
    onClickChangeDoneTask: (id: string) => void;
};

const ListTasksItem = styled.li`
    width: 100%;
    height: 2.3rem;
    margin: 1rem 0;
    border-bottom: 0.01rem solid gray;
`;

const HiddenCheckbox = styled.input`
    display: none;
`;

const CheckboxLabel = styled.label`
    position: relative;
    cursor: pointer;
    user-select: none;

    &::before {
        content: '';
        position: absolute;
        left: 1rem;
        top: -0.2rem;
        width: 1.3rem;
        height: 1.3rem;
        border: 0.1rem solid black;
        border-radius: 50%;
        background-color: white;
        transition: background-color 0.3s, border-color 0.3s;
    }

    ${HiddenCheckbox}:checked + &::before {
        background-color: white;
        border-color: black;
    }

    ${HiddenCheckbox}:checked + &::after {
        content: '';
        position: absolute;
        left: 1.5rem;
        top: 0rem;
        width: 0.25rem;
        height: 0.7rem;
        border: solid green;
        border-width: 0 0.16rem 0.19rem 0;
        transform: rotate(45deg);
    }
`;

const TaskText = styled.p<{ $isDone: boolean }>`
    ${({ $isDone }) => $isDone && `
        color: rgba(0, 0, 0, 0.5);
        text-decoration: line-through;
    `}
    font-size: 1.1rem;
    margin-left: 3.5rem;
    transition: all 0.3s linear;
`;