interface InputFieldProps {
  handleInput(text: string): void;
  placeholder?: string;
}

interface PasswordInputProps extends InputFieldProps {
  keyboardType?: string | null;
  rightIcon?: React.ReactNode;
  hidePassword: boolean;
}

export type { InputFieldProps, PasswordInputProps };
