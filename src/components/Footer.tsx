import React from "react";
import styled from "styled-components";
import { Filter } from "../types/filter.ts";

const Footer = ({ taskLeft, onClickClearCompleteTasks, onClickFilterTasks, filter }: FooterProps) => {

    return (
        <StyledFooter>
            <StyledTaskLeft>{taskLeft + ' задач осталось'}</StyledTaskLeft>
            <SortedButtonsContainer>
                <SortedButtonsItem
                    role="button"
                    aria-label="Все"
                    onClick={() => onClickFilterTasks('all')}
                    $isActive={filter === 'all'}
                >
                    Все
                </SortedButtonsItem>
                <SortedButtonsItem
                    role="button"
                    aria-label="Активные"
                    onClick={() => onClickFilterTasks('active')}
                    $isActive={filter === 'active'}
                >
                    Активные
                </SortedButtonsItem>
                <SortedButtonsItem
                    role="button"
                    aria-label="Выполненные"
                    className="category-completed"
                    onClick={() => onClickFilterTasks('completed')}
                    $isActive={filter === 'completed'}
                >
                    Выполненные
                </SortedButtonsItem>
            </SortedButtonsContainer>
            <ClearButton onClick={onClickClearCompleteTasks}>Очистить выполненные</ClearButton>
        </StyledFooter>
    )
};

export default Footer;

interface FooterProps {
    taskLeft: number;
    onClickClearCompleteTasks: () => void;
    onClickFilterTasks: (newFilter: Filter) => void;
    filter: string;
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;

const StyledTaskLeft = styled.span`
    font-size: 1.1rem;
`;

const SortedButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    min-width: 18rem;
    margin: 1.5rem 0 2rem 0;
`;

const SortedButtonsItem = styled.button<{ $isActive: boolean }>`
    font-size: 1.1rem;
    padding: 0.2rem;

    ${({ $isActive }) => $isActive && `
        border: 0.1rem solid black;
    `}
`;

const ClearButton = styled.button`
    font-size: 1.1rem;
    padding: 0.2rem;
`;