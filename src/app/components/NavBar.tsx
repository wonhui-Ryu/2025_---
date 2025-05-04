'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button'; // 👈 버튼 컴포넌트 불러오기

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav style={navStyle}>
      {/* 왼쪽: 링크들 */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <CustomLink href="/" current={pathname === '/'}>홈</CustomLink>
        <CustomLink href="/about" current={pathname === '/about'}>소개</CustomLink>
        <CustomLink href="/contact" current={pathname === '/contact'}>연락처</CustomLink>
      </div>

      {/* 오른쪽: 검색 버튼 */}
      <Button
        fullWidth={false}
        boxColor="#3884FF"
        textColor="#FFFFFF"
        fontSize="14px"
        padding="8px"
        label="검색"
        disabled={false}
      />
    </nav>
  );
}

function CustomLink({
  href,
  children,
  current,
}: {
  href: string;
  children: React.ReactNode;
  current: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        ...linkStyle,
        color: current ? '#0070f3' : '#333',
        textDecoration: current ? 'underline' : 'none',
      }}
    >
      {children}
    </Link>
  );
}

// 네비 전체 바 (좌우 정렬)
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between', // 👈 좌우로 퍼뜨리기!
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#f4f4f4',
  borderBottom: '1px solid #ddd',
};

// 각 링크
const linkStyle: React.CSSProperties = {
  fontWeight: 'bold',
  transition: 'color 0.2s',
};
