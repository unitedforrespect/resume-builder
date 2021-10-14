import create from "zustand";
import { ProfessionalTemplate } from "src/templates/layouts/ProfessionalTemplate";
import { LegacyTemplate } from "src/templates/layouts/LegacyTemplate";

const templates = [ProfessionalTemplate, LegacyTemplate];

export const useTemplates = create((set) => ({
  index: 0,
  template: templates[0],

  setTemplate: (index: number) => set({ index, template: templates[index] }),
}));

export const useItems = create((set) => ({
  isPhotoDisplayed: true,

  setIsPhotoDisplayed: (isPhotoDisplayed: boolean) => set({ isPhotoDisplayed }),
}));
