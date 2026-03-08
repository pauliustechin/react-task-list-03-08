import { useEffect } from 'react';
import './App.css'
import TaskList from './components/TaskList'
import useTasksStore from './store/tasksStore'
import { Toaster } from 'react-hot-toast';

function App() {

  const { getAllTasks }= useTasksStore((state) => state);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks])


  return (
    <>
    <TaskList></TaskList>
    <Toaster position='bottom-center' />
    </>
  )
}

export default App
