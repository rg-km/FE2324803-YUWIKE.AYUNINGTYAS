import create from "zustand";

// TODO: answer here

const useItemStore =
  // TODO: answer here
  create((set) => ({
    items: [],
    addItem: (item) =>
      set((state) => ({
        items: [...state.items, item],
      })),
    removeItem: (item) =>
      set((state) => ({
        items: state.items.filter((i) => i !== item),
      })),
  }));

export default useItemStore;
