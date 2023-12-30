import TableLine from "./TableLine";

const Table = ({ data, updateTask, handleTaskDelete }) => {
    return (
        <div className="border-2 border-white rounded-lg">
            <table className="text-white w-full">
                <thead className="border-b-2 border-white">
                    <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3">Task name</th>
                        <th className="p-3">Time</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data ? (
                            data.map((task) => (
                                <TableLine
                                    key={task.id}
                                    data={task}
                                    updateTask={updateTask}
                                    handleTaskDelete={handleTaskDelete}
                                />
                            ))
                        ) : (
                            <p>Pas de data dispo</p>
                        )
                        //
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
