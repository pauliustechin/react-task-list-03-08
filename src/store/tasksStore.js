import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL

const useTasksStore = create(devtools((set) => ({
  tasks: [],

  getAllTasks: async () => {
    try {
      const { data } = await axios.get(API_URL);
      set(() => ({ tasks: data.reverse()}));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  },

  addTask: async (formData) => {
    try {
      const { data } = await axios.post(API_URL, formData);
      set((state) => ({ tasks: [data, ...state.tasks]}));
      toast.success("Item added succesfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  },

  deleteTask: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      set((state) => {
        const filteredTasks = state.tasks.filter((task) => task.id !== id);
        return {tasks: filteredTasks}
      })
      toast.success("Item deleted succesfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  },

  editTask: async (id, formData) => {
    try {
      const { data } = await axios.patch(`${API_URL}/${id}`, formData);
      set((state) => {
        const updatedArray = state.tasks.map(task => {
          if(task.id === id){
            return {...task, ...data};
          }
          else{
            return task;
          }
        })
        return {tasks: [...updatedArray]}
      })
      toast.success("Item edited successfully")
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
})));

export default useTasksStore;