import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import afr_translation from '../translations/afr_trans.json';
import eng_translation from '../translations/eng_trans.json';

interface GenerationState {
  language: 'afr' | 'eng';
  setLanguage: (language: 'afr' | 'eng') => void;
}

export const useGenerationStore = create(
  persist<GenerationState>(
    (set, get) => ({
      language: 'afr',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'lang-storage', // name of the item in the storage
    },
  ),
);

export const getTranslation = (language: 'afr' | 'eng' | undefined) => {
  return language === 'afr' ? afr_translation : eng_translation;
};
