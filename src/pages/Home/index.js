import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../services/api";

import {
  Container,
  Card,
  AddProductToCartButton,
  AddProductToCartButtonText,
  ProductDescription,
  Price,
  ProductImage
} from "./styles";

import { formatPrice } from "../../util/format";

class Home extends Component {
  state = {
    products: []
  };

  handleNavigate = () => {
    const navigation = this.props.navigation;

    navigation.navigate("Cart");
  };

  async componentDidMount() {
    const response = await api.get("products");

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;

    dispatch({
      type: "ADD_TO_CART",
      product
    });
  };

  render() {
    const { products } = this.state;
    return (
      <Container
        horizontal
        data={products}
        keyExtractor={product => product.id}
        renderItem={({ item }) => (
          <Card>
            <ProductImage
              source={{
                url: item.image
              }}
            />
            <ProductDescription>{item.title}</ProductDescription>
            <Price>{formatPrice(item.price)}</Price>
            <AddProductToCartButton onPress={() => this.handleAddProduct(item)}>
              <AddProductToCartButtonText>Adicionar</AddProductToCartButtonText>
            </AddProductToCartButton>
          </Card>
        )}
      />
    );
  }
}

export default connect()(Home);
