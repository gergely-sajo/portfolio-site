import React from 'react';
import StackItems from '../projects/projectComponents/StackItems';

function Skillset(props) {
  return (
    <>
      <p className="page-section__text-title page-section__text-title--white">{props.skillsetTitle}</p>
      <ul className="page-section__text-desc">
        {props.stackList.map(item => (
          <StackItems
            stackIcon={item.stackIcon} 
            stackName={item.stackName} 
          />
        ))}
      </ul>
    </>
  )
}
  
export default Skillset ;