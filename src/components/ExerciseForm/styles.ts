import { styled } from "styled-components";

export const Form = styled.form`
color: #242424;

>label{
    display: block;
    padding-bottom: 0.5rem;
    font-weight: bold;

    &:last-of-type{
        padding: 1rem;
    }
    > p {
        margin-bottom: 0.25rem;
    }

    >input {
        font-size: 1rem;
        padding: 0.5rem;
        width: 100%;
    }
}
`;

export const ActionsWrapper= styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
gap: 0.5rem;
`;

export const CancelButton = styled.button`
background-color:#ce3838;
color: white;
font-weight: bold;
`;
export const SaveButton = styled.button`
background-color:#17bd17;
font-weight: bold;
`;