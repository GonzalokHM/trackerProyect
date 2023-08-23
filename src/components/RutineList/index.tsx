import { useContext, useState } from 'react';
import { RoutineContext } from '../../context/RoutineContext';
import { Routine } from '../../types/routine';
import Modal from "../Modal";
import RoutineForm from '../RoutineForm';
import { RoutineLink, RoutineListWrapper, RoutinesList } from "./styles";
import { AddButton } from '../shareStyles';

const RoutineList = (): React.ReactElement => {
    const [open, setOpen] = useState(false)
    const [routines, addRoutine ]= useContext(RoutineContext)

    const onAddRoutine =  (routine: Routine)=> {
        addRoutine(routine)
        setOpen(false)
    }

    return(
     <>
       <RoutineListWrapper>
        <h3>Tus rutinas</h3>
        <RoutinesList>
        {routines.map(({title, id})=> (
            <RoutineLink key ={id} to= {`/routine/${id}`}>
                <h3>{title}</h3>
                <span>➡️</span>
            </RoutineLink>
        ))}
        </RoutinesList>
        
        <AddButton onClick={() => setOpen(true)}>+</AddButton>
       </RoutineListWrapper>
       <Modal open={open}>
        <RoutineForm
        onCancel={()=> setOpen(false)}
        onSave={onAddRoutine}/>
       </Modal>
     </>

    )
}

export default RoutineList