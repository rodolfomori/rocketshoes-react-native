import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Icon from "react-native-vector-icons/MaterialIcons";
import api from "../../services/api";

import {
  Container,
  Card,
  AddProductToCartButton,
  AddProductToCartButtonText,
  ProductDescription,
  Price,
  ProductImage,
  AmountItensInCart,
  AmountItensInCartText
} from "./styles";

import * as CartActions from "../../store/modules/cart/actions";
import { formatPrice } from "../../util/format";

class Home extends Component {
  state = {
    products: []
  };

  handleNavigate = () => {
    const { navigation } = this.props;

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

  handleAddProduct = id => {
    const { addToCart } = this.props;

    addToCart(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
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
              <AmountItensInCart>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <AmountItensInCartText>
                  {" "}
                  {amount[item.id] || 0}
                </AmountItensInCartText>
              </AmountItensInCart>
              <AddProductToCartButtonText>Adicionar</AddProductToCartButtonText>
            </AddProductToCartButton>
          </Card>
        )}
      />
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
