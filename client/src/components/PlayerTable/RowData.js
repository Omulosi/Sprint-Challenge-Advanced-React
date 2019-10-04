import React from 'react';

const RowData = (props) => {
  const { name, country, searches } = props.player;
  return (
    <tr>
      <td>{ name }</td>
      <td>{ country }</td>
      <td>{ searches }</td>
    </tr>
  )

}

export default RowData;
