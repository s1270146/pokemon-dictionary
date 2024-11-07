import Modal from '@/components/elements/modal/Modal';
import ModalHeader from '@/components/elements/modal/ModalHeader';

interface PropertyModalProps {
  isOpen: boolean;
  closeModal: () => void;
  propertyName: string;
  description: string;
}

export default function PropertyModal({
  isOpen,
  closeModal,
  propertyName,
  description,
}: PropertyModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => closeModal()}
      width="calc((800 / 1280)* 100vw)"
      height="30vh"
    >
      <ModalHeader closeModal={() => closeModal()}>
        <p className="text-xl px-8">{propertyName}</p>
      </ModalHeader>
      <p className="m-4 text-xl px-8">{description}</p>
    </Modal>
  );
}
