import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserType = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState('User'); // Default selection

  const handleProceed = () => {
    if (selectedRole === 'User') {
      navigation.navigate('UserSignup'); // Navigate to User Screen
    } else if (selectedRole === 'Driver') {
      navigation.navigate('DriverSignup'); // Navigate to Driver Screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Select Your Role</Text>

      {/* Role Selection */}
      <View style={styles.roleContainer}>
        <TouchableOpacity style={styles.radioContainer} onPress={() => setSelectedRole('User')}>
          <Ionicons
            name={selectedRole === 'User' ? 'radio-button-on' : 'radio-button-off'}
            size={24}
            color="green"
          />
          <Text style={styles.roleText}>User</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.radioContainer} onPress={() => setSelectedRole('Driver')}>
          <Ionicons
            name={selectedRole === 'Driver' ? 'radio-button-on' : 'radio-button-off'}
            size={24}
            color="green"
          />
          <Text style={styles.roleText}>Driver/Walker</Text>
        </TouchableOpacity>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F9F9F9',
    backgroundColor: '#FFCC00',
    padding: 16,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  roleContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  roleText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  proceedButton: {
    marginTop: 40,
    backgroundColor: '#34C759',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UserType;