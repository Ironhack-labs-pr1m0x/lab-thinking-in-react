import React from 'react';
import ProductRow from './ProductRow';

export default ({ products }) => {
  const productRows = products.map((product) => {
    return <ProductRow data={product} key={product.id} />;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{productRows}</tbody>
    </table>
  );
};
