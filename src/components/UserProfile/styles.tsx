import styled from "styled-components";
import { contentBlockCss } from "../shareStyles";



export const UserProfileWrapper = styled.div`
${contentBlockCss}

display: flex;
flex-direction: column;
gap: 1rem;
`;

export const UserDataRow = styled.div`
display: flex;
flex-wrap: wrap;
gap: 2rem;
`;

export const EditButton = styled.button`
color: white;
max-width: 8rem;
align-self: flex-end;
`;