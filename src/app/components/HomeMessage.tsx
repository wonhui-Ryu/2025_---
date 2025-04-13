// src/components/HomeMessage.tsx
export default function HomeMessage() {
  return (
    <div style={messageStyle}>
      <p style={messageTextStyle}>홈 페이지</p>
    </div>
  );
}

const messageStyle = {
  padding: '1.5rem',
  backgroundColor: '#f0f0f0',
  fontSize: '1.5rem',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const messageTextStyle = {
  margin: 0,
  fontWeight: '700',
};
