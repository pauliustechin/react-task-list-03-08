import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

const useTasksStore = create(devtools((set) => ({
  tasks: [],

  getAllTasks: async () => {
    const { data } = await axios.get(API_URL)
    set(() => ({tasks: data}))
  },

  addTask: async (formData) => {
    const { data } = await axios.post(API_URL, formData);
    set((state) => ({tasks: [...state.tasks, data]}))
  }
})));

export default useTasksStore;