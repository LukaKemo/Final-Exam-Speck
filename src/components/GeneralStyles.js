import styled from 'styled-components';

export const Grid = styled.div `
    display: grid;
    row-gap: 32px;

    @media screen and (min-width 500px) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media screen and (min-width 800px)) {
    grid-template-columns: repeat(3, 1fr);
    ${props => props.columns === 3
    }
`;