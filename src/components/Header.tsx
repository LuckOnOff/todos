import React from "react";
import styled from "styled-components";

const Header = () => {

    return (
        <header>
            <Title>
                todos
            </Title>
        </header>
    )
};

export default Header;

const Title = styled.h1`
    font-size: 2.5rem;
`;