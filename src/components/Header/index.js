import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Wrapper,
  Container,
  BasketContainer,
  ItemCount,
  Logo,
  LogoContainer
} from "./styles";

class Header extends Component {
  render() {
    const navigation = this.props.navigation;
    const { cartSize } = this.props;

    return (
      <Wrapper>
        <Container>
          <LogoContainer onPress={() => navigation.navigate("Home")}>
            <Logo />
          </LogoContainer>
          <BasketContainer onPress={() => navigation.navigate("Cart")}>
            <Icon name="shopping-basket" color="#FFF" size={24} />
            <ItemCount>{cartSize}</ItemCount>
          </BasketContainer>
        </Container>
      </Wrapper>
    );
  }
}
// export default connect(state => ({
//   cartSize: state.cart.length
// }))(Header);

const mapStateToProps = state => ({
  cartSize: state.cart.length
});

export default connect(mapStateToProps)(Header);
