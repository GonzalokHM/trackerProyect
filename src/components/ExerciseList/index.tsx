import { useState } from 'react';
import { AddExercise } from '../../context/RoutineContext';
import { Exercise, Routine } from '../../types/routine';
import ExerciseForm from '../ExerciseForm';
import Modal from "../Modal";
import { AddButton } from '../shareStyles';

const ExerciseList = ({routine, addExercise}: props): React.ReactElement => {
    const [open, setOpen] = useState(false)

    const handleSaveExercise = (exercise : Exercise) => {
        addExercise(routine.id as string, exercise)
      setOpen(false)
    }

    return(
     <>
        <div>
            <h2>{routine.title}</h2>

            {routine.exercises.map((exercise) =>(
                <div key={exercise.id}>
                    <h3>{exercise.name}</h3>

                    Series: {exercise.series}
                    Repetitions: {exercise.repetitions}
                </div>
            ))}

           <AddButton onClick={() => setOpen(true)}>+</AddButton>
        </div>

        <Modal open = {open}>
            <ExerciseForm
            onCancel= {()=> setOpen(false)}
            onSave={handleSaveExercise}
            />
        </Modal>
     </>

    )
}

export type props = {
    routine: Routine;
    addExercise: AddExercise
}

export default ExerciseList