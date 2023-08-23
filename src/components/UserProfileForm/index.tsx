import { useForm } from 'react-hook-form';
import { User } from '../../types/user';
import { Form, SaveButton, CancelButton, ActionsWrapper } from './styles';
const UserProfileForm = ({user,onCancel, onSave}: Props): React.ReactElement => {
    const {handleSubmit, register} = useForm({
        defaultValues: user,
    });

    const onSubmit = (values : User ) => {
        onSave(values)

    }

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
    
     <label>
        <p>intruduce tu nombre:</p>
        <input type="text" {...register ( 'name',{required: true})} />
     </label>
     <label>
     <p>intruduce tu edad:</p>
        <input type="number" {...register ( 'age',{required: true})} />
     </label>
     <label>
     <p>intruduce tu peso (kg):</p>
        <input type="number" {...register ( 'weight',{required: true})} />
     </label>
     <label>
     <p>intruduce tu altura (cm):</p>
        <input type="number" {...register ( 'height',{required: true})} />
     </label>
 <ActionsWrapper>

    <CancelButton type='button' onClick={onCancel}>Cancelar edición</CancelButton>
    <SaveButton type='submit' >Guardar</SaveButton>
 </ActionsWrapper>
   </Form>
  );
};

export type Props = {
    user: User;
    onCancel: ()=> void
    onSave: (newUser: User)=> void
}

export default UserProfileForm;