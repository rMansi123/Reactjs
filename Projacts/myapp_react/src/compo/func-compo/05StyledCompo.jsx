import React from 'react';
import styled from 'styled-components';

const Blog=styled.section`
padding:20px;
background:grey;
text-align:center
`;
const Title =styled.h1`
color:red
`

function StyledCompo(props) {
    return (
        <>
        <Blog>
            <Title>Welcome to Styled Compo</Title>
        </Blog>
        </>
    );
}

export default StyledCompo;