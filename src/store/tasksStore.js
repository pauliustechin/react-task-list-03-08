import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useTasksStore = create(devtools((set) => ({

})));

export default useTasksStore;