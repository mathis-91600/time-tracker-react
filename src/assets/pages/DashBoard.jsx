import Header from "../components/Header";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const DashBoard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const userTasks = JSON.parse(localStorage.getItem("tasks"));
        setTasks(userTasks);

        // if (userTasks && userTasks.length > 0) {
        //     toast.info("Toutes les tâches ont été récupérées", {
        //         toastId: "info1",
        //         position: "top-right",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "light",
        //     });
        // }
    }, []);

    const handleTaskUpdate = (taskId, newTime) => {
        console.log("handleTaskUpdate", taskId, newTime);
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, time: newTime } : task
            )
        );
        updateTaskInLocalStorage(taskId, newTime);
    };

    const updateTaskInLocalStorage = (taskId, newTime) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, time: newTime } : task
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const deleteTaskFromLocalStorage = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const handleTaskDelete = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        deleteTaskFromLocalStorage(taskId);
    };

    return (
        <div className="bg-[#000006] h-screen font-bold">
            <h1 className="py-3 text-center text-green-500  text-[34px] font-bold">
                Time Tracker
            </h1>
            <Header />
            <div className="my-5 mx-auto w-3/4 py-5 relative">
                {tasks && tasks.length > 0 ? (
                    <Table
                        data={tasks}
                        updateTask={handleTaskUpdate}
                        handleTaskDelete={handleTaskDelete}
                    />
                ) : (
                    <p className="text-white text-center text-2xl">
                        Aucune tâche créée
                    </p>
                )}
            </div>
        </div>
    );
};

export default DashBoard;
