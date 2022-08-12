import styled from "styled-components";

/*
    --background: #09090A
    --white: #FFFFFF
    --white-600: #F0F0F0
    --white-400: #EDEDED
    
    --grey-300: #C6C6D3
    --grey-400: #A1A1AA
    
    --dark-300: #3F3F46
    --dark-400: #27272A
    --dark-500: #3E3E41
    --dark-600: #1C1C1C
*/

export const Container = styled.div`
    height: 100vh;
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    padding: 1rem 5rem;

    h1{
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 2.1rem;
        color: #FFFFFF;
    }

    .loading{
        margin: auto;
        align-items: center;
        justify-content: center;

    }

`;

export const FilterForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2.5rem 0 0 0;

    div{
        display: flex;
        flex-direction: column;
        width: 48%;

        label{
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.3rem;
            color: #C6C6D3;
        }

        input, select {
            background: #27272A;
            border-radius: 0.5rem;
            margin: 0.5rem 0.7rem 0 0;
            border: none;
            padding: 0.7rem 1.2rem;
            color: #F0F0F0;
            font-size: 1rem;

            &::placeholder{
                color: #F0F0F0;
            }
        }

        
    }
`;

export const TableContent = styled.table`

    margin-top: 2rem;
    background:#27272A;
    border-radius: 0.5rem;
    padding: 1.6rem 3.5rem;
    width: 100%;
    

    thead{
        th{
            text-align: initial;
            font-weight: 600;
            font-size: 1rem;
            line-height: 1.3rem;
            color: #A1A1AA;
        }
    }

    tbody{
        td{
            border-top: 1px solid rgba(161, 161, 170, 0.3);
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.6rem;
            color: #EDEDED;
            padding: 0.75rem 0;
        }
        
        button{
            background: #3E3E41 ;
            border-radius: 0.25rem;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 1.1rem;
            line-height: 1.3rem;
            color: #FFFFFF;
            border: none;
            padding: 2px 6px;
        }
    }
`;