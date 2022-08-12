import styled from "styled-components";

export const Container = styled.div`
    background: var(--dark-400);
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 1rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        border: 0;
        border-radius: 50%;
        overflow: hidden;
        width: 3rem;
        height: 3rem;
        background: var(--dark-300);
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            filter: brightness(1.4);

        }

        img{
            width: 2.85rem;
            height: 2.85rem;
            border-radius: 50%;
        }
    }
`;

export const ImageLogo = styled.img`
    padding: 0.3rem 0.5rem;
    background: #3F3F46;
    border-radius: 0.5rem;
`;

