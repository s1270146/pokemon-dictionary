import Modal from "@/components/elements/Modal";

interface SearchModalProps {
    isOpen: boolean;
    closeModal: ()=>void;
};

export default function SearchModal({
    isOpen,
    closeModal
}: SearchModalProps) {
    return <Modal isOpen={isOpen} closeModal={()=>closeModal()}>
        
    </Modal>
}