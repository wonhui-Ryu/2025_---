import Link from 'next/link';
import HomeMessage from '@/app/components/HomeMessage';

export default function Home() {
  return (
    <main>
      <HomeMessage />
      <section style={sectionStyle}>
        <p>침사모 웹사이트에 오신 것을 환영합니다!</p>
        <p>상단 네비게이션 바를 통해 소개 / 연락처 페이지로 이동해보세요.</p>
      </section>
      <nav>
        <ul>
          <li><Link href="/about">소개</Link></li>
          <li><Link href="/contact">연락처</Link></li>
        </ul>
      </nav>
    </main>
  );
}

const sectionStyle = {
  marginTop: '2rem',
  lineHeight: '1.6',
  fontSize: '1.1rem',
};