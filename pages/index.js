import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am <strong>Cedric Jian N. Martin.</strong> I am 21 years old, and my hobbies are playing video games and cooking, my favorite genre music are R&B and POP, and lastly my favorite food is Tinola. </p>

        <hr></hr>

        <p>The reason I take IT course is, I was exposed to computers and tech gadgets. I chose IT to further more improve my skills.
        </p>

        <hr></hr>

        <p> The career I see to my self after graduation, is to become a Software Developer. </p>

        <hr></hr>

        <p>I expect learn more about Programming and Coding, so that it can help me improve myself or add into my knowledge.</p>

        
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}