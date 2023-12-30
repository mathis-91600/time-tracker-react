import { useState } from "react";
import AddTaskModal from "./AddTaskModal";

const AddButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (state) => {
        setShowModal(state);
    };

    return (
        <div>
            <button
                onClick={() => handleShowModal(true)}
                className="bg-green-500 border-2 border-white rounded-md w-[36px] h-[36px] flex justify-center items-center"
            >
                <span className="font-bold text-white text-[20px]">+</span>
            </button>
            {showModal && <AddTaskModal hideModal={handleShowModal} />}
        </div>
    );
};

export default AddButton;
