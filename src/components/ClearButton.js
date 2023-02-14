import React from 'react';

const ClearButton = (props) => {
  return (
    <div className='button-clear' onClick={props.manageClear}>
      {props.children}
    </div>
  );
};

export default ClearButton;
