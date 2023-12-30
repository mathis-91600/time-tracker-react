import React, { useState, useEffect } from "react";
import { FiTrash } from "react-icons/fi";
import { FaStop } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const TableLine = ({ data, updateTask, handleTaskDelete }) => {
    const [time, setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;

        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds =
            remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => {
        setTime(data.time);
    }, []);

    const startTimer = () => {
        const id = window.setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        setIntervalId(id);
    };

    const stopTimer = () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            setIntervalId(null);
            updateTask(data.id, time);
        }
    };

    const deleteTask = () => {
        // Appelle la fonction fournie par le composant parent pour supprimer la tâche
        handleTaskDelete(data.id);
    };

    useEffect(() => {
        // Nettoie l'intervalle lorsque le composant est démonté
        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    return (
        <tr className="text-center border-b-2 border-white last:border-0">
            <td className="p-3">#{data.id}</td>
            <td className="p-3">
                <span
                    style={{ color: data.color ? data.color : "" }}
                    //className={`${data.color ? `text-[${data.color}]` : ""}`}
                >
                    {data.taskName}
                </span>
            </td>
            <td className="p-3">{formatTime(time)}</td>
            <td className="p-3">
                <span className="flex gap-2 justify-center">
                    <button onClick={() => startTimer()}>
                        <FaPlay />
                    </button>
                    <button onClick={() => stopTimer()}>
                        <FaStop />
                    </button>
                    <button onClick={() => deleteTask()}>
                        <FiTrash />
                    </button>
                </span>
            </td>
            {/* <td>Simple cell</td>
            <td>Simple cell</td>
            <td>Simple cell</td>
            <td>Simple cell</td> */}
        </tr>
    );
};

export default TableLine;
