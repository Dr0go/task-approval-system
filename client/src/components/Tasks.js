import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/tasks', {
        headers: { Authorization: token },
      });
      setTasks(response.data);
    } catch (error) {
      alert('Failed to fetch tasks');
    }
  };

  const approveTask = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`http://localhost:5000/tasks/${id}/approve`, {}, {
        headers: { Authorization: token },
      });
      alert('Task approved');
      fetchTasks(); // Refresh tasks
    } catch (error) {
      alert('Failed to approve task');
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.status}
            {task.status === 'Pending' && (
              <button onClick={() => approveTask(task.id)}>Approve</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
