import * as C from './styled';
import { TiDelete } from 'react-icons/ti';
import {ModalLivro} from '../ModalLivro/'
export const Modal = ({ modalShowed, setModalShowed,livroItemModal}) => {
    return (
        <C.ContainerModal modalShowed={modalShowed}>

            <C.ContainerInfoLivro>
                <TiDelete
                    style={{ color: "red", fontSize: "40px", margin: "5px 10px auto auto" }}
                    onClick={()=>setModalShowed(false)}
                />
                <ModalLivro livroItemModal={livroItemModal}/>
            </C.ContainerInfoLivro>
        </C.ContainerModal>
    )

}