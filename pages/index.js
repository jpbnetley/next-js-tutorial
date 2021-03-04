import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis porttitor enim non consectetur.
          Proin venenatis, mi nec tristique vehicula, lectus turpis gravida lacus, vel fringilla risus urna semper turpis. 
          Curabitur commodo consectetur lacus, vitae semper nisl mollis vitae. Mauris dolor erat, condimentum eu tellus ac, 
          faucibus commodo sapien. In tellus dui, fermentum id auctor consectetur, suscipit ut orci. In in consequat neque. 
          Donec nulla mauris, porta quis arcu at, consequat cursus diam. Proin ligula magna, posuere eget pharetra sollicitudin, 
          facilisis vitae lorem. Sed interdum dolor tempor enim lobortis finibus. Proin non blandit massa. Phasellus venenatis 
          imperdiet feugiat.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}