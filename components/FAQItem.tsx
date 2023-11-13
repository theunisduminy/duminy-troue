import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-2 border-black rounded-2xl mb-4 w-[85%] max-w-[85%] text-[#102135]'>
      <button
        className={`w-full text-left p-4 bg-[#f1cdcd] text-[#102135] focus:outline-none ${
          !isOpen ? 'rounded-2xl' : 'rounded-tl-2xl rounded-tr-2xl'
        }`}
        onClick={toggleAccordion}
      >
        <div className='flex justify-between items-center'>
          <span className='font-semibold text-sm'>{question}</span>
          <i
            className={`fa fa-arrow-down text-lg transform ${
              isOpen ? 'rotate-0' : 'rotate-180'
            } transition-transform`}
            aria-hidden='true'
          ></i>
        </div>
      </button>
      {isOpen && (
        <div className='p-4 bg-white rounded-br-2xl rounded-bl-2xl text-sm'>
          <p className='text-[#102135]'>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
