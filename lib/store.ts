import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the state interface
interface LanguageState {
  language: 'afr' | 'eng'; // Define the type for the language property
  setLanguage: (newLanguage: 'afr' | 'eng') => void; // Define the type for the setLanguage method
}

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'afr',
      setLanguage: (newLanguage) => set({ language: newLanguage }),
    }),
    {
      name: 'language',
    },
  ),
);

export default useLanguageStore;
