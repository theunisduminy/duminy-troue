import afr_translation from '../translations/afr_trans.json';
import eng_translation from '../translations/eng_trans.json';

export const getTranslation = (language: 'afr' | 'eng' | undefined) => {
  return language === 'afr' ? afr_translation : eng_translation;
};
