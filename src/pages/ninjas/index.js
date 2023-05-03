import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();

	return {
		props: { wariors: data },
	};
};

const Ninjas = ({ wariors }) => {
	return (
		<div>
			<h1>All Ninjas</h1>
			{wariors.map((warior) => (
				<Link
					href={'/ninjas/' + warior.id}
					className={styles.single}
					key={warior.id}>
					<h3>{warior.name}</h3>
				</Link>
			))}
		</div>
	);
};

export default Ninjas;
