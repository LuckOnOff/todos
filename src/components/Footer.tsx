import React from "react";
import styled from "styled-components";

const Footer = ({ taskLeft, onClickClearCompleteTasks }: FooterProps) => {

    return (
        <StyledFooter>
            <StyledTaskLeft>{taskLeft + ' задач осталось'}</StyledTaskLeft>
            <SortedButtonsContainer>
                <SortedButtonsItem>
                    Все
                </SortedButtonsItem>
                <SortedButtonsItem>
                    Активные
                </SortedButtonsItem>
                <SortedButtonsItem>
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

const SortedButtonsItem = styled.button`
    font-size: 1.1rem;
`;

const ClearButton = styled.button`
    font-size: 1.1rem;
`;