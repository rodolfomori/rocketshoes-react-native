import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.FlatList`
  flex: 1;
  padding: 10px;
  background-color: #141419;
  display: flex;
  flex-direction: row;
`;

export const Card = styled.View`
  margin: 30px;
  margin-top: 100px;
  background-color: #ffffff;
  width: 220px;
  height: 358px;
  border-radius: 5px;
`;

export const AddProductToCartButton = styled(RectButton)`
  /* position: relative;
  top: 270px; */
  width: 180px;
  height: 36px;
  border-radius: 4px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const AddProductToCartButtonText = styled.Text`
  text-transform: uppercase;
  color: white;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  padding-top: 0;
`;

export const ProductDescription = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 15px;
  padding: 10px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;
