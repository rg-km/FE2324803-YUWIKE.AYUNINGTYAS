import create from "zustand";
import { immer } from "zustand/middleware/immer";
// TODO: answer here

const cartQuantityMiddleware = (config) => (set, get, api) =>
  config(
    // TODO: answer here
    (args) => {
      const moreThanStockItems = args.items.filter(
        (item) => item.quantity > item.stock
      );

      const lessThanZeroItems = args.items.filter((item) => item.quantity < 1);

      if (moreThanStockItems.length > 0) {
        throw new Error(`tIDAK BOLEH MELEBIHI STOCK`);
      }
      if (lessThanZeroItems.length > 0) {
        throw new Error(`tIDAK BOLEH KURANG DARI NOL`);
      }
    },
    get,
    api
  );

const useCartStore = create;
// TODO: answer here
immer(
  cartQuantityMiddleware((set) => ({
    items: [],
    addItem: (item) =>
      set((state) => ({
        items: [...state.items, item],
      })),
    removeItem: (item) =>
      set((state) => ({
        items: state.items.filter((i) => i !== item),
      })),
  })),

  (set) => ({
    items: [],
    addItem: (item) =>
      set((state) => ({
        items: [...state.items, item],
      })),
    removeItem: (item) =>
      set((state) => ({
        items: state.items.filter((i) => i !== item),
      })),
    changeQuantity: (item, quantity) =>
      set((state) => ({
        items: state.items.map((i) => (i === item ? { ...i, quantity } : i)),
      })),
  })
);

export default useCartStore;
