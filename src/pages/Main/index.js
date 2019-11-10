import React, {Component} from 'react';
import api from '../../services/api';

import {
  Container,
  Card,
  AddProductToCartButton,
  AddProductToCartButtonText,
  ProductDescription,
  Price,
  ProductImage,
} from './styles';

import {formatPrice} from '../../util/format';

export default class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({products: data});
  }

  render() {
    const {products} = this.state;
    return (
      <Container
        horizontal
        data={products}
        keyExtractor={product => product.id}
        renderItem={({item}) => (
          <Card>
            <ProductImage
              source={{
                url: item.image,
              }}
            />
            <ProductDescription>{item.title}</ProductDescription>
            <Price>{formatPrice(item.price)}</Price>
            <AddProductToCartButton>
              <AddProductToCartButtonText>Adicionar</AddProductToCartButtonText>
            </AddProductToCartButton>
          </Card>
        )}
      />
    );
  }
}
