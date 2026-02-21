import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Alert } from 'react-native';
import FoodParadiseLogo from '@/components/FoodParadiselogo';
import LoginForm from '@/components/LoginForm';
import { Colors, Spacing } from '@/constants/theme';

type Variant = 'light' | 'dark';

interface Props {
  onLoginSuccess: (username: string) => void;
  onForgotPassword: () => void;
  variant?: Variant;
}

export default function LoginScreen({
  onLoginSuccess,
  onForgotPassword,
  variant = 'dark',
}: Props): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);

  const bg = variant === 'dark' ? Colors.greyBg : Colors.white;

  const handleLogin = async (username: string, password: string): Promise<void> => {
    setLoading(true);
    try {
      // TODO: Replace with your real auth call
      await new Promise<void>(resolve => setTimeout(resolve, 1200));

      if (username && password) {
        onLoginSuccess(username);
      } else {
        Alert.alert('Login Failed', 'Invalid username or password.');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      Alert.alert('Error', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.root, { backgroundColor: bg }]}>
      <StatusBar
        barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={bg}
      />
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.logoWrapper}>
          <FoodParadiseLogo size="medium" showSubtitle={false} />
        </View>
        <LoginForm
          onLogin={handleLogin}
          onForgotPassword={onForgotPassword}
          loading={loading}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xl,
  },
  logoWrapper: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
});