import React from "react";
import { DataTasksTypes } from "../types/dataTasks.ts";
import styled from "styled-components";

const ListTasks = ({ dataTasks }: ListTasksProps) => {

    return (
        <StyledListTasks>
            {dataTasks.map((item: DataTasksTypes) => (
                <ListTasksItem key={item.id}>
                    <HiddenCheckbox
                        type="checkbox"
                        id={item.id.toString()}
                        checked={item.isDone}
                        name="isDone"
                    />
                    <CheckboxLabel
                        title={'Пометить как ' + (item.isDone ? 'не выполненную' : 'выполненную')}
                        htmlFor={item.id.toString()}
                    ></CheckboxLabel>
                    <TaskText>{item.taskText}</TaskText>
                </ListTasksItem>
            ))}
        </StyledListTasks>
    )
};

export default ListTasks;

interface ListTasksProps {
    dataTasks: DataTasksTypes[];
};

const StyledListTasks = styled.ul`
    width: 100%;
    height: 100%;
`;

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
        left: 0.2rem;
        top: -0.3rem;
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
        left: 0.75rem;
        top: -0.1rem;
        width: 0.3rem;
        height: 0.7rem;
        border: solid green;
        border-width: 0 0.16rem 0.19rem 0;
        transform: rotate(45deg);
    }
`;

const TaskText = styled.p`
    margin-left: 2.5rem;
`;