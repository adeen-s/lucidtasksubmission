import create from "zustand";

const useFormulaStore = create((set) => ({
  formula: "",
  tags: [],
  addTag: (tag) => set((state) => ({ tags: [...state.tags, tag] })),
  removeTag: (tagIndex) =>
    set((state) => ({
      tags: state.tags.filter((_, index) => index !== tagIndex),
    })),
  updateTag: (index, newContent) =>
    set((state) => ({
      tags: state.tags.map((tag, i) => (i === index ? newContent : tag)),
    })),
  setFormula: (formula) => set(() => ({ formula })),
}));

export default useFormulaStore;
