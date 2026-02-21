import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AppTextInput from '@/components/AppText';
import PrimaryButton from '@/components/Button';
import { Colors, FontSize, Spacing, Radius } from '@/constants/theme';

interface Props {
  onLogin: (username: string, password: string) => void;
  onForgotPassword: () => void;
  loading?: boolean;
}

interface FormErrors {
  username?: string;
  password?: string;
}

export default function LoginForm({
  onLogin,
  onForgotPassword,
  loading = false,
}: Props): React.ReactElement {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors]     = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!username.trim()) e.username = 'Username is required';
    if (!password)        e.password  = 'Password is required';
    return e;
  };

  const handleLogin = (): void => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    onLogin(username.trim(), password);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.card}>

        <Text style={styles.heading}>Login</Text>

        <Text style={styles.subheading}>
          Hello there! Please input your username and{'\n'}password to login
        </Text>

        <AppTextInput
          label="Username"
          placeholder="Enter username here"
          value={username}
          onChangeText={(t) => { setUsername(t); setErrors(e => ({ ...e, username: undefined })); }}
          error={errors.username}
          autoCapitalize="none"
          returnKeyType="next"
        />

        <AppTextInput
          label="Password"
          placeholder="Enter password here"
          value={password}
          onChangeText={(t) => { setPassword(t); setErrors(e => ({ ...e, password: undefined })); }}
          error={errors.password}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleLogin}
        />

        <TouchableOpacity
          onPress={onForgotPassword}
          style={styles.forgotWrapper}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={styles.forgotText}>Forgot username or password?</Text>
        </TouchableOpacity>

        <PrimaryButton
          title="Login"
          onPress={handleLogin}
          loading={loading}
          style={styles.loginBtn}
        />

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 3,
    marginTop: -35,
  },
  heading: {
    fontSize: FontSize.xl,
    fontWeight: '700',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.xs,
  },
  subheading: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: Spacing.lg,
  },
  forgotWrapper: {
    alignSelf: 'flex-start',
    marginTop: -Spacing.sm,
    marginBottom: Spacing.md,
  },
  forgotText: {
    fontSize: FontSize.xs,
    color: Colors.textMuted,
  },
  loginBtn: {
    marginTop: Spacing.xs,
  },
});