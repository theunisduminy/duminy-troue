// import { create } from 'zustand';
import afr_translation from '../translations/afr_trans.json';
import eng_translation from '../translations/eng_trans.json';

// // Define the state interface
// interface LanguageState {
//   language: 'afr' | 'eng'; // Define the type for the language property
//   setLanguage: (newLanguage: 'afr' | 'eng') => void; // Define the type for the setLanguage method
// }

// const useLanguageStore = create<LanguageState>((set) => ({
//   language: 'afr',
//   setLanguage: (newLanguage) => set({ language: newLanguage }),
// }));

// export default useLanguageStore;

export const getTranslation = (language: 'afr' | 'eng' | undefined) => {
  return language === 'afr' ? afr_translation : eng_translation;
};
