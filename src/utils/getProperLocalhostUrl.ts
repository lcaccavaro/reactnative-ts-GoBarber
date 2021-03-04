import { Platform } from 'react-native';

export default function getProperLocalhostUrl(url: string): string {
  let response = url;

  if (Platform.OS === 'android') {
    response = url.replace('localhost', '10.0.2.2');
  }
  return response;
}
