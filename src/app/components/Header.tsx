import Image from 'next/image';
import NavBar from '@/app/components/NavBar';

export default function Header({ title }: { title: string } 
) {
  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>{title}</h1> 
      <p> 여기가 헤더 </p>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  padding: '1rem 2rem',
  borderBottom: '1px solid #ddd'
};


const h1Style = {
  fontWeight: 'bold',
  fontSize: '1.2rem'
};
