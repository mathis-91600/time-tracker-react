import { useState } from "react";
import { toast } from "react-toastify";

const AddTaskModal = ({ hideModal }) => {
    const randomId = Math.floor(Math.random() * 1000) + 1;

    const [newTask, setNewTask] = useState({
        id: randomId,
        taskName: "",
        time: 0,
        color: "",
    });

    const handleTaskChange = (e) => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value,
        });
    };

    const onSave = () => {
        const existingTasksJSON = localStorage.getItem("tasks");
        const existingTasks = existingTasksJSON
            ? JSON.parse(existingTasksJSON)
            : [];
        const updatedtasks = [...existingTasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(updatedtasks));
        hideModal(false);
        toast.success("Tâche ajoutée à la liste", {
            toastId: "successTask",
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setInterval(() => {
            location.reload();
        }, 3000);
    };

    return (
        <div className="absolute h-screen w-screen bg-black bg-opacity-80 left-0 top-0 z-50 flex items-center justify-center">
            <div className="text-white w-2/6 h-2/4 rounded-md border-white border-2 bg-[#000006]">
                <p className="p-3 text-center text-2xl border-b-2 border-white">
                    Add task
                </p>
                <div className="mt-[6em] w-2/4 mx-auto flex flex-col h-full gap-3">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl">Task name :</label>
                        <input
                            name="taskName"
                            className="text-black rounded-md pl-1 h-[30px]"
                            type="text"
                            placeholder="Enter a task name"
                            onChange={(e) => handleTaskChange(e)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl">Background color :</label>
                        <input
                            name="color"
                            type="color"
                            className="h-[30px] w-full bg-[#000006]"
                            onChange={(e) => handleTaskChange(e)}
                        />
                    </div>
                    <div className="flex gap-3 mt-3">
                        <button
                            onClick={() => hideModal(false)}
                            className="text-xl border-2 border-white p-1 rounded-md transition-all hover:bg-red-600 w-1/2"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onSave}
                            className="text-xl border-2 border-white p-1 rounded-md transition-all hover:bg-green-600 w-1/2"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;
