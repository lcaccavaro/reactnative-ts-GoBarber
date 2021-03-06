import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  /* justify-content: center; */
  padding: 0 30px ${Platform.OS === 'android' ? 0 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  /* font-family: 'RobotoSlab-Medium'; */
  margin: 24px 0;
`;

export const Avatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  /* margin-top: 64px; */
  align-self: center;
`;

export const UserAvatar = styled.TouchableOpacity``;

export const BackButton = styled.TouchableOpacity`
  margin-top: ${Platform.OS === 'ios' ? '60px' : '20px'};
`;

export const BottomButton = styled.View`
  margin-bottom: 20px;
`;
