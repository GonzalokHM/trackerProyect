import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { RoutineContext } from "../context/RoutineContext";
import { AddButton } from "../components/shareStyles";
import { Exercise } from "../types/routine";
import Modal from "../components/Modal";
import ExerciseForm from "../components/ExerciseForm";
import ExerciseList from "../components/ExerciseList";

const Routine = (): React.ReactElement | null => {
    const {id} = useParams(); 
    const[routines, , addExercise]= useContext(RoutineContext)


    const routine= routines.find((routineEl)=> routineEl.id === id);
    if (!routine) return null
   

   return (
    <>
      <ExerciseList routine={routine} addExercise={addExercise}/>
    </>    
    )
    }
    
    export default Routine