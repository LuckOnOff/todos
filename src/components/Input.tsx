import React from "react";
import styled from "styled-components";

const Input = ({ taskText, onChangeTaskText, onClickAddNewTask, isShowTasks, onClickShowTasks }: InputProps) => {

    return (
        <Container>
            <HideTasksListButton onClick={onClickShowTasks}>
                <HideShowArrow $isShowTasks={isShowTasks}>
                    &lsaquo;
                </HideShowArrow>
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
    isShowTasks: boolean;
    onClickShowTasks: () => void;
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    border-bottom: 0.01rem solid gray;
    position: relative;
    z-index: 2;
`;

const HideTasksListButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 5rem;
    height: 100%;
`;

const HideShowArrow = styled.button<{ $isShowTasks: boolean }>`
    width: 90%;
    height: 100%;
    opacity: 0.5;
    font-size: 2.2rem;
    transform: ${({ $isShowTasks }) => $isShowTasks ? 'rotate(270deg)' : 'rotate(90deg)'};
    transition: transform 0.3s linear;
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