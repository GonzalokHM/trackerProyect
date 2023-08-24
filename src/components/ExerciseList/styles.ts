import { Link } from "react-router-dom";
import styled from "styled-components";
import { contentBlockCss } from "../shareStyles";

export const ExerciseListWrapper = styled.div`
>h2{
    padding-bottom: 2 rem;
}
`

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

export const Exercises = styled.div`
${contentBlockCss}
margin-bottom: 1rem;

>h3{
    margin-bottom: 1rem;
}
`

export const Series = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`