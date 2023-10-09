import React, { useState } from 'react';
import useLanguageStore from '../lib/store';

interface LanguageSwitchButtonsProps {
  // Add props if necessary
}

const LanguageSwitchButtons: React.FC<LanguageSwitchButtonsProps> = () => {
  const { language, setLanguage } = useLanguageStore((state) => {
    return {
      language: state.language,
      setLanguage: state.setLanguage,
    };
  });

  const [isAfrikaans, setIsAfrikaans] = useState(language === 'afr');
  const [isEnglish, setIsEnglish] = useState(language === 'eng');

  const handleAfrikaansClick = () => {
    setIsAfrikaans(true);
    setIsEnglish(false);
    setLanguage('afr');
  };

  const handleEnglishClick = () => {
    setIsAfrikaans(false);
    setIsEnglish(true);
    setLanguage('eng');
  };

  return (
    <div className='flex border-2 border-black rounded-xl sticky top-5 z-50 bg-white'>
      <button
        onClick={handleAfrikaansClick}
        className={` w-[100px] rounded-l-xl ${
          isAfrikaans ? 'bg-[#f1cdcd] ' : 'bg-white'
        }  px-4 py-2`}
      >
        Afrikaans
      </button>
      <button
        onClick={handleEnglishClick}
        className={` w-[100px] rounded-r-xl ${
          isEnglish ? 'bg-[#f1cdcd]' : 'bg-white text-black'
        }  px-4 py-2`}
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitchButtons;
