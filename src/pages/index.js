import Head from 'next/head';
import Header from '../pages/Home'; 
import styled from '@emotion/styled';

const MainContainer = styled.main`
  padding: 20px;
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Internship Assignment</title>
        <meta name="description" content="Next.js Internship Assignment" />
      </Head>
      <Header />
    </div>
  );
}
