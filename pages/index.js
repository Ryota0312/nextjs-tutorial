import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styled from 'styled-components'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Introduction>
          <p>[Your Self Introduction]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </Introduction>
      </Layout>
  )
}

const Introduction = styled.section`
    font-size: 1.2rem;
    line-height: 1.5;
`;