/** Imported Libraries */
import Head from 'next/head';
import { useEffect, useState } from 'react';

/** Local Files */
import { authEndpoint, clientId, redirectUri, scopes } from '../config_example';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Artists from '../components/Artists';
import Tracks from '../components/Tracks';
import User from '../components/User';
import Genres from '../components/Genres';
import Credits from '../components/Credits';
import Loader from '../components/Loader';

export default function Home() {
  /** Spotify Token State */
  const [token, setToken] = useState(null);

  /** Checking if we have information */
  useEffect(() => {
    let Token = window.location.hash
      .substring(1)
      .split(/[&]/)
      .reduce(function (i, item) {
        if (item) {
          let j = item.split(/[=]/);
          i[j[0]] = decodeURIComponent(j[1]);
        }
        return i;
      }, {})['access_token'];
    setToken(Token);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>I love you Dania</title>
        <meta name="description" content="I love you Dania" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loader/>
      <main className={styles.main}>
        {!token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              '%20',
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
          </a>
        )}
        <div className={styles['spotify-container']}>
        {token && (
          <div className="wrapper">
            <User token={token} />
            <Genres token={token} />
            <Artists token={token} />
            <Tracks token={token} />
            <Credits/>
          </div>
        )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
