import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import styled from 'styled-components'
import {getSortedPostsData} from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({allPostsData}) {
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
                <Header2>Blog</Header2>
                <UList>
                    {allPostsData.map(({id, date, title}) => (
                        <ListItem key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br/>
                            {id}
                            <br/>
                            <Date dateString={date} />
                        </ListItem>
                    ))}
                </UList>
            </Introduction>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const Introduction = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Header2 = styled.h2`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

const UList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin: 0 0 1.25rem;
`;
