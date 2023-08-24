import ReactDOM from 'react-dom';
import { ModalContent, ModalPopover } from './styles';
const Modal = ({open, children} : Props) : React.ReactElement => {
    return(
     <>
     {open ? ReactDOM.createPortal(
     <ModalPopover>
        <ModalContent>{children}</ModalContent>
        </ModalPopover>,
        document.getElementById('portal') as HTMLDivElement
        ) 
     : null}
     </>
    )
} 

export type Props ={
    children: React.ReactNode;
    open : boolean;
}
export default Modal