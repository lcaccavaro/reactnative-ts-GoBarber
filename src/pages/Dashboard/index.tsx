import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;