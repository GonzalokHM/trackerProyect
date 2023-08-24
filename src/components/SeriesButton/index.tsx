import { useState } from 'react';
import { StyledSeriesButton } from './styles';

export const SeriesButton = ({repetitions,}: Props): React.ReactElement => {
    const [completed, setCompleted] = useState(false);


    console.log("Valor de completed:", completed)
    return(
        <StyledSeriesButton completed= {completed} onClick={() => setCompleted(true)}>{repetitions}</StyledSeriesButton>
    )
};

export type Props = {
    repetitions: number;
};
