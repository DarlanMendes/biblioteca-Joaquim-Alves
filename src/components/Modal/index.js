import * as C from './styled';

import {ModalLivro} from '../ModalLivro/'
import { useEffect } from 'react';
export const Modal = ({ modalShowed, setModalShowed,livroItemModal}) => {
    
    return (
        <C.ContainerModal modalShowed={modalShowed}>

            <C.ContainerInfoLivro>
                
                <ModalLivro livroItemModal={livroItemModal} setModalShowed={setModalShowed}/>
            </C.ContainerInfoLivro>
        </C.ContainerModal>
    )

}