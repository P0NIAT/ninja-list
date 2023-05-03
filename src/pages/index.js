import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>

		<div>
			<h1 className={styles.title} >HomePage</h1>
			<p className={styles.text} >
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
				consectetur distinctio architecto? Rem ad illo in quod esse, odio
				voluptatibus voluptates, fugiat aspernatur iure, nam iusto! Saepe ut
				accusantium perferendis.
			</p>
			<p className={styles.text} >
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
				consectetur distinctio architecto? Rem ad illo in quod esse, odio
				voluptatibus voluptates, fugiat aspernatur iure, nam iusto! Saepe ut
				accusantium perferendis.
			</p>
			<Link  className={styles.btn} href='/ninjas'>See Ninja Listing</Link>
		</div>
    </>
	);
}
