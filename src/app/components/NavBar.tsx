'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    
  const pathname = usePathname();

  return (
    <nav style={navStyle}>
        
      <CustomLink href="/" current={pathname === '/'}>홈</CustomLink>
      <CustomLink href="/about" current={pathname === '/about'}>소개</CustomLink>
      <CustomLink href="/contact" current={pathname === '/contact'}>연락처</CustomLink>
    </nav>
  );
}

function CustomLink({ href, children, current }: { href: string; children: React.ReactNode; current: boolean }) {
  return (
    <Link
      href={href}
      style={{
        ...linkStyle,
        color: current ? '#0070f3' : '#333', // 🔵 현재 페이지면 파란색
        textDecoration: current ? 'underline' : 'none', // 밑줄 강조
      }}
    >
      {children}
    </Link>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  padding: '1rem',
  backgroundColor: '#f4f4f4',
  borderBottom: '1px solid #ddd',
};

const linkStyle: React.CSSProperties = {
  fontWeight: 'bold',
  transition: 'color 0.2s',
};
const logoWrapperStyle = {
    padding: '1rem',
    textAlign: 'center' as const,
    backgroundColor: '#fff',
  };