import { useEffect } from 'react';
import './App.css'
import TaskList from './components/TaskList'
import useTasksStore from './store/tasksStore'

function App() {

  const { getAllTasks }= useTasksStore((state) => state);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks])


  return (
    <>
    <TaskList></TaskList>
    </>
  )
}

export default App
