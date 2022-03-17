import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NewsCard from '../components/NewsCard';

// In a real project, this would be secret :)
const myAPIKey = '734d1427baf242f6a5cce327947fd375';

const Home: NextPage = () => {
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(false);
  const [filters, setFilters] = React.useState<string[]>([]);
  const [values, setValues] = React.useState<string>('');
  const [isError, setIsError] = React.useState(false);

  // On first load, we populate with the top headlines
  React.useEffect(() => {
    setIsError(false);
    setLoading(true);
    // Improvement: detect user's location and pass it as a parameter in order
    // to show relevant headlines
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${myAPIKey}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  }, []);

  React.useEffect(() => {
    const prepareParams = filters
      .map((query) => encodeURIComponent(query))
      .join(' ');

    setIsError(false);
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${prepareParams}&apiKey=${myAPIKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });

    // Resetting the input after successful fetch
    setValues('');
  }, [filters]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const array = values.split(' ');

    setFilters(array);
  };

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>NewsAPI Test</title>
        <meta name="description" content="A coding test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="my-8 text-3xl font-bold underline text-center">
          Pol Conde Nast Test
        </h1>
      </header>
      <main>
        <form className="mb-8" onSubmit={handleSubmit}>
          <input
            className="shadow appearance-none border rounded w-72 py-2 mx-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="filters"
            id="filters"
            onChange={(e) => setValues(e.target.value)}
            value={values}
            placeholder="Search for something cool"
          ></input>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            Go!
          </button>
        </form>
        {isLoading && <p>Loading...</p>}
        {isError && <p>There was an error!</p>}
        {data?.articles?.length && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            {data?.articles?.map((article, i) => {
              return (
                <li key={`article.title_${i}`}>
                  <NewsCard post={article} />
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
};

export default Home;
