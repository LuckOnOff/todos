import React from "react";
import styled from "styled-components";

const Input = ({ taskText, onChangeTaskText, onClickAddNewTask }: InputProps) => {

    return (
        <Container>
            <HideTasksListButton>
                &lsaquo;
            </HideTasksListButton>
            <InputTaskName 
                type="text"
                value={taskText}
                onChange={onChangeTaskText}
                placeholder="Что должно быть сделано?" 
            />
            <AddNewTask onClick={onClickAddNewTask}>
                +
            </AddNewTask>
        </Container>
    )
};

export default Input;

interface InputProps {
    taskText: string;
    onChangeTaskText: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickAddNewTask: () => void;
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    border-bottom: 0.01rem solid gray;
`;

const HideTasksListButton = styled.button`
    font-size: 2.2rem;
    opacity: 0.5;
    background-color: white;
    width: 4rem;
    height: 100%;
    transform: rotate(270deg);
`;

const InputTaskName = styled.input`
    font-size: 1.1rem;
    font-style: italic;
    height: 100%;
    width: 100%;
    border: none;
    padding: 0.8rem;
    z-index: 1;
`;

const AddNewTask = styled.button`
    width: 5rem;
    height: 100%;
    font-size: 1.5rem;
`;