import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { User } from "../../types/user";
import Modal from "../Modal";
import UserProfileForm from "../UserProfileForm";
import { EditButton, UserDataRow, UserProfileWrapper } from "./styles";

const UserProfile = (): React.ReactElement => {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useContext(UserContext)

  const onChangeUser = (newUser:User)=>{
    setUser(newUser)
    setOpen(false)
  }
  return(
    <>
    <UserProfileWrapper>
  {user.name ? (
   <>
    <h3>{user.name}</h3>
    
      <UserDataRow>
        <p>{user.age|| '-'} años</p>
        <p>{user.weight|| '-'} kilos</p>
        <p>{user.height|| '-'} cm</p>
      </UserDataRow>
   </>
  ): (
  <h3>introduce tus datos de perfil</h3> 
  )}
    <EditButton onClick={()=> setOpen(true)}>Editar perfil</EditButton>
  </UserProfileWrapper>
   <Modal open={open}>
    <UserProfileForm
    user ={user}
    onCancel={()=> setOpen(false)}
    onSave={onChangeUser}
    />
   </Modal>

   
   </>
  );
};

export default UserProfile;