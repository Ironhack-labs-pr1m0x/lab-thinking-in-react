import React from 'react';

export default ({ data }) => {
  return (
    <tr>
      {data.stocked ? (
        <td>{data.name}</td>
      ) : (
        <td style={{ color: 'red' }}>{data.name}</td>
      )}
      <td>{data.price}</td>
    </tr>
  );
};
