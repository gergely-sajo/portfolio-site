import React from 'react';

function StackItems(props) {
  return (
      <li>
        {props.stackIcon} {props.stackName}
      </li>
  )
}
  
export default StackItems;