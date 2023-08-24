import { useForm } from 'react-hook-form';
import { Routine } from '../../types/routine';
import { ActionsWrapper, CancelButton, Form, SaveButton } from './styles';
const RoutineForm = ({onCancel, onSave}: Props): React.ReactElement => {
    const {handleSubmit, register} = useForm<Routine>();

    const onSubmit = (values : Routine ) => {
        onSave(values)

    }

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
    
     <label>
        <p>Nombre de la rutina:</p>
        <input type="text" {...register ( 'title' )} />
     </label>

 <ActionsWrapper>

    <CancelButton type='button' onClick={onCancel}>Cancelar edición</CancelButton>
    <SaveButton type='submit' >Guardar</SaveButton>
 </ActionsWrapper>
   </Form>
  );
};

export type Props = {
    onCancel: () => void
    onSave: (newRoutine: Routine) => void
}

export default RoutineForm;