import React from 'react';
import styles from '../styles/Form.module.css';

interface SelectButtonProps {
  // other prop definitions
  selection: boolean | undefined;
  name: string;
  label: string;
  buttonOptions: Array<string>;
  showIcons: boolean;
  handleSelectChange: (checked: boolean) => void;
}

const SelectButtonComponent: React.FC<SelectButtonProps> = ({
  selection,
  name,
  label,
  buttonOptions,
  showIcons,
  handleSelectChange,
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor='name'>
        {label}
      </label>

      <div className={styles.rsvp}>
        <label className={styles.switch}>
          <input
            type='radio'
            name={name}
            value='yes'
            checked={selection}
            onChange={(e) => handleSelectChange(e.target.checked)}
          />
          <span className={styles.slider}>
            {buttonOptions[0]} {showIcons ? <i className='fa fa-check'></i> : null}
          </span>
        </label>
        <label className={`${styles.switch} ${styles.two}`}>
          <input
            type='radio'
            name={name}
            value='no'
            checked={selection === false}
            onChange={(e) => handleSelectChange(!e.target.checked)}
          />
          <span className={styles.slider}>
            {buttonOptions[1]} {showIcons ? <i className='fa fa-times'></i> : null}
          </span>
        </label>
      </div>
    </div>
  );
};

export default SelectButtonComponent;
