import React from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  Card,
  AddProductToCartButton,
  AddProductToCartButtonText,
  ProductDescription,
  Price,
  ProductImage,
  Item,
  ContainerItens,
  DivTotalAndQuantity,
  TotalItens,
  NumberOfItens,
  ProductControlButton,
  Total,
  TotalAmount,
  ContainerItem
} from "./styles";

import { formatPrice } from "../../util/format";
import { dispatch } from "rxjs/internal/observable/pairs";

function Cart({ cart, dispatch }) {
  return (
    <Container>
      <Card>
        <ContainerItem
          vertical
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <>
              <Item>
                <ProductImage
                  source={{
                    url: item.image
                  }}
                />
                <ContainerItens>
                  <ProductDescription>{item.title} </ProductDescription>
                  <Price>{item.priceFormatted}</Price>
                </ContainerItens>
                <Icon
                  name="delete-forever"
                  size={30}
                  color="#7151c1"
                  style={{ marginRight: 15 }}
                  onPress={() =>
                    dispatch({
                      type: "REMOVE_TO_CART",
                      id: item.id
                    })
                  }
                />
              </Item>
              <DivTotalAndQuantity>
                <ProductControlButton>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color="#7151c1"
                  />
                </ProductControlButton>
                <NumberOfItens value={String(item.amount)} editable={false} />
                <ProductControlButton>
                  <Icon name="add-circle-outline" size={20} color="#7151c1" />
                </ProductControlButton>
                <TotalItens>R$400,00</TotalItens>
              </DivTotalAndQuantity>
            </>
          )}
        />
        <Total>Total</Total>
        <TotalAmount>R$1000,00</TotalAmount>
        <AddProductToCartButton>
          <AddProductToCartButtonText>
            Finalizar Pedido
          </AddProductToCartButtonText>
        </AddProductToCartButton>
      </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
  priceFormatted: formatPrice(state.cart.price)
});

export default connect(mapStateToProps)(Cart);
