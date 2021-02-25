// Generals
import React from 'react';
// Components
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
// Data
import { data as products } from '../data.json';

class FilterableProductTable extends React.Component {
  state = {
    searchBarInput: '',
    productList: products,
    onlyShowInStock: false,
  };

  handleUserInput = (childData) => {
    this.setState({ searchBarInput: childData });
    this.filterProductList();
  };

  handleCheckBox = (childData) => {
    this.setState({ onlyShowInStock: childData });
    this.filterProductList();
  };

  filterProductList = () => {
    this.setState((state) => {
      let filtered = [...products].filter((product) => {
        return product.name
          .toLowerCase()
          .includes(state.searchBarInput.toLowerCase());
      });

      if (state.onlyShowInStock) {
        filtered = filtered.filter((product) => {
          return product.stocked;
        });
      }
      return { productList: filtered };
    });
  };

  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          searchBarInput={this.state.searchBarInput}
          handleUserInput={this.handleUserInput}
          handleCheckBox={this.handleCheckBox}
        />
        <ProductTable products={this.state.productList} />
      </div>
    );
  }
}

export default FilterableProductTable;
