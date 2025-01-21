import React from "react";
import styled from "styled-components";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Input from "./Input.tsx";

const Display = () => {

    return (
        <>
            <Header />
            <VisualEffect>
                <Main>
                    <Input />
                </Main>
                <Footer />
            </VisualEffect>
        </>
    )
};

export default Display;

const Main = styled.main`
    
`;

const VisualEffect = styled.div`
    box-shadow: 0 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem -0.1rem rgba(0, 0, 0, 0.06);
`;