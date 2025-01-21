import React from "react";
import styled from "styled-components";

const Input = () => {

    return (
        <Container>
            <HideTasksListButton>
                &lsaquo;
            </HideTasksListButton>
            <InputTaskName type="text" placeholder="Что должно быть сделано?" />
        </Container>
    )
};

export default Input;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25rem;
    height: 3rem;
    border-bottom: 0.01rem solid gray;
`;

const HideTasksListButton = styled.button`
    font-size: 2.2rem;
    opacity: 0.5;
    background-color: white;
    width: 3.2rem;
    height: 100%;
    transform: rotate(270deg);
`;

const InputTaskName = styled.input`
    font-size: 1rem;
    font-style: italic;
    height: 100%;
    width: 100%;
    border: none;
    padding-left: 0.8rem;
`;