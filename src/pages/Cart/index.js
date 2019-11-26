import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  ContainerItem,
  EmptyContainer,
  EmptyText,
} from './styles';

import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

function Cart({cart, removeFromCart, total, updateAmountRequest}) {
  function increment(item) {
    updateAmountRequest(item.id, item.amount + 1);
  }

  function decrement(item) {
    updateAmountRequest(item.id, item.amount - 1);
  }
  return (
    <Container>
      {cart.length ? (
        <>
          <Card>
            <ContainerItem
              vertical
              data={cart}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <>
                  <Item>
                    <ProductImage
                      source={{
                        url: item.image,
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
                      style={{marginRight: 15}}
                      onPress={() => removeFromCart(item.id)}
                    />
                  </Item>
                  <DivTotalAndQuantity>
                    <ProductControlButton>
                      <Icon
                        onPress={() => decrement(item)}
                        name="remove-circle-outline"
                        size={20}
                        color="#7151c1"
                      />
                    </ProductControlButton>
                    <NumberOfItens
                      value={String(item.amount)}
                      editable={false}
                    />
                    <ProductControlButton>
                      <Icon
                        onPress={() => increment(item)}
                        name="add-circle-outline"
                        size={20}
                        color="#7151c1"
                      />
                    </ProductControlButton>
                    <TotalItens>{item.subtotal}</TotalItens>
                  </DivTotalAndQuantity>
                </>
              )}
            />

            <Total>Total</Total>
            <TotalAmount>{total}</TotalAmount>
            <AddProductToCartButton>
              <AddProductToCartButtonText>
                Finalizar Pedido
              </AddProductToCartButtonText>
            </AddProductToCartButton>
          </Card>
        </>
      ) : (
        <EmptyContainer>
          <Icon
            name="remove-shopping-cart"
            size={64}
            color="#141419"
            style={{textAlign: 'center', marginTop: 30}}
          />
          <EmptyText>Seu carrinho está vazio</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
