import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MyButton from '../components/NewsCard';
import NewsCard from '../components/NewsCard';
import styles from '../styles/Home.module.css';

const myAPIKey = '734d1427baf242f6a5cce327947fd375';

const Home: NextPage = ({ articles }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NewsAPI Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline">aloha</h1>
      <main>
        <ul className="grid grid-cols-4 gap-4">
          {articles.articles.map((article) => {
            return (
              <li key={article.title}>
                <NewsCard post={article} />
              </li>
            );
          })}
        </ul>
      </main>

      <footer className={styles.footer}>by Pol Milian</footer>
    </div>
  );
};
export async function getStaticProps() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${myAPIKey}`
  );
  const articles = await res.json();
  console.log(articles);

  return {
    props: {
      articles,
    },
  };
}

export default Home;
