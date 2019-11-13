import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  padding-top: 10px;
  background-color: #141419;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Card = styled.View`
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const ContainerItem = styled.FlatList`
  width: 360px;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
`;

export const AddProductToCartButton = styled(RectButton)`
  /* position: relative;
  top: 270px; */
  height: 36px;
  border-radius: 4px;
  background: #7159c1;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const AddProductToCartButtonText = styled.Text`
  text-transform: uppercase;
  color: white;
  font-weight: bold;
`;

export const ContainerItens = styled.View`
  align-self: baseline;
  flex: 1;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  padding-top: 0;
  align-self: baseline;
`;

export const ProductDescription = styled.Text.attrs({
  numberOfLines: 2
})`
  font-size: 15px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 200px;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
  margin: 10px;
`;

export const DivTotalAndQuantity = styled.View`
  height: 40px;
  background-color: #eeeeee;
  margin: 0 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
`;

export const TotalItens = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
  align-self: center;
  text-align: right;
  flex: 1;
`;

export const NumberOfItens = styled.TextInput`
  width: 51px;
  height: 26px;
  background-color: white;
  align-self: center;
  border-radius: 5px;
  border: 1px solid #eeeeee;
`;

export const ProductControlButton = styled.TouchableOpacity`
  align-self: center;
  padding: 0 10px;
`;

export const Total = styled.Text`
  font-size: 26px;
  text-align: center;
  padding-top: 25px;
`;
export const TotalAmount = styled.Text`
  font-size: 30px;
  text-align: center;
  padding-top: 5px;
  font-weight: bold;
  padding-bottom: 15px;
`;
