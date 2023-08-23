import { Link } from "react-router-dom";
import styled from "styled-components";
import { contentBlockCss } from "../shareStyles";

export const RoutineListWrapper = styled.div`
>h3{
    text-decoration: underline;
    padding-bottom: 1rem;
>div{
    padding-bottom: 1rem;
}
}`

export const RoutinesList = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`

export const RoutineLink =styled(Link)`
${contentBlockCss}
display: flex;
justify-content: space-between;
color: white;
`