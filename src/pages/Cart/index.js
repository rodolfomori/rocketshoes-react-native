import React from 'react';

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
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Card>
        <Item>
          <ProductImage
            source={{
              url:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            }}
          />
          <ContainerItens>
            <ProductDescription>
              Tênis de Caminhada confortável Muito legal
            </ProductDescription>
            <Price>R$ 200,00</Price>
          </ContainerItens>
        </Item>
        <DivTotalAndQuantity>
          <ProductControlButton>
            <Icon name="remove-circle-outline" size={20} color="#7151c1" />
          </ProductControlButton>
          <NumberOfItens />
          <ProductControlButton>
            <Icon name="add-circle-outline" size={20} color="#7151c1" />
          </ProductControlButton>
          <TotalItens>R$400,00</TotalItens>
        </DivTotalAndQuantity>

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
