import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Nutrition',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		pic: 'https://cdn.fs.teachablecdn.com/ZVtblpzQMuz66985Ls59',
		description: (
			<>
				We design personalized dietary plans based on your current goals and
				your preferences for favorite foods. Learn about calorie and how to
				adjust your daily food choices accordingly.
			</>
		),
	},
	{
		title: 'Training System',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		pic: 'https://cdn.fs.teachablecdn.com/3FalutE5SMnIcYLTz2AQ',
		description: (
			<>
				We tailor a comprehensive training program to the number of available
				days per week. This detailed system includes selected exercises and
				workout intensity, based on the equipment available.
			</>
		),
	},
	{
		title: 'Follow-Up',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		pic: 'https://cdn.fs.teachablecdn.com/oNnspThRRjyxdaVC2hew',
		description: (
			<>
				Get assessments on your calorie progress and corrections. Evaluate your
				exercise performance and intensity through videos, and receive
				explanations and clarifications on aspects of the program.
			</>
		),
	},
];

function Feature({ title, description, pic }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<img src={pic} height="300" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
