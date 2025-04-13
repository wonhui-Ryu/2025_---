import Header from '@/app/components/Header';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head/> 
      <body style={layoutStyle}>
        <div style={logoWrapperStyle}>
        <Image src="/logo.png" alt="로고" width={100} height={60} />
        <p>여기가 레이아웃 </p>
        </div>
        <NavBar />
        <main style={mainStyle}>{children}</main>
        <footer style={footerStyle}>
          <p style={{ margin: 0 }}>© 2025 유원희. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}


const layoutStyle = {
  margin: 0,
  padding: 0,
  fontFamily: "'Segoe UI', sans-serif",
  backgroundColor: '#f9f9f9',
  color: '#222',
};

const footerStyle = {
  backgroundColor: '#fff',
  borderTop: '1px solid #ddd',
  textAlign: 'center' as const,
  padding: '1rem',
   gap: '2rem',
  marginTop: '4rem',
  fontSize: '0.9rem',
  color: '#555',
};

const mainStyle = {
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '1rem',
  gap: '2rem',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  fontSize: '1.2rem',
};

const logoWrapperStyle = {
  padding: '1rem',
  textAlign: 'center' as const,
  backgroundColor: '#fff',
};