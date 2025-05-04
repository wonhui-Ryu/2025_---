interface ButtonProps {
  fullWidth: boolean;
  boxColor: string;
  textColor: string;
  fontSize: string;
  padding: string;
  label: string;
  disabled: boolean;
}

export default function Button({
  fullWidth,
  boxColor,
  textColor,
  fontSize,
  padding,
  label,
  disabled,
}: ButtonProps) {
  const style = {
    width: fullWidth ? '100%' : 'auto',
    backgroundColor: boxColor,
    color: textColor,
    fontSize,
    padding,
    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    borderRadius: '4px',
  } as const;

  return (
    <button style={style} disabled={disabled}>
      {label}
    </button>
  );
}
