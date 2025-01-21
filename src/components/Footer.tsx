import React from "react";
import styled from "styled-components";

const Footer = ({ taskLeft }) => {

    return (
        <StyledFooter>
            <StyledTaskLeft>{taskLeft + ' задачи осталось'}</StyledTaskLeft>
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
            <ClearButton>Очистить выполненные</ClearButton>
        </StyledFooter>
    )
};

export default Footer;

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
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