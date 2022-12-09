import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        color: #fafafa;
    }

    p{
        font-size: 16px;
        color: #FAFAFA70;
    }

    a{
        text-decoration: none;
        display: flex;
        margin: 15px 0;

        &:hover{
            cursor: pointer;
        }
    }

    a.remover{
        color: #FF0000;
        text-decoration: none;
        display: flex;
        margin: 15px 0;

        &:hover{
            cursor: pointer;
        }
    }


    hr{
        color: #FAFAFA70;
        margin-top: 20px 0;
    }
`