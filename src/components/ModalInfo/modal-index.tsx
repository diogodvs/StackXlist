import { X } from 'phosphor-react';
import Modal from 'react-modal';
import { UserData } from '../../types/types-index';
import { Container, ImageUser, InfoUserContainer } from './modal-style';

interface UserInfoModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    userSelected: UserData | undefined;
}


export function ModalInfo({isOpen, onRequestClose, userSelected }: UserInfoModalProps) 
{
    return(
        <Modal
            isOpen={false}
            onRequestClose={() => {}}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
            contentLabel="Informacoes do Usuario Selecionado"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <X size={24} color="#A8A8D3" weight="bold"/>
            </button>

            <Container>
                <ImageUser>
                    <img src="userSelected?.picture.medium" alt="" />
                </ImageUser>

                <InfoUserContainer>
                    <p>
                        <strong>Nome:</strong>{`${userSelected?.name.first} ${userSelected?.name.last}`}
                    </p>
                    <p>
                        <strong>E-mail:</strong> {userSelected?.email}
                    </p>
                    <p>
                        <strong>Celular:</strong> {userSelected?.cell}
                    </p>
                    <p>
                        <strong>Idade:</strong> {userSelected?.dob.age}
                    </p>
                </InfoUserContainer>
            </Container>
        </Modal>
    );
}