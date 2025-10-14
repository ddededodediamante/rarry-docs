import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Visual Block Editor',
    description: (
      <>
        Write code by snapping blocks together, no typing required.
      </>
    ),
  },
  {
    title: 'Custom Extensions',
    description: (
      <>
        Extend your projects with custom blocks, new categories, and powerful features.
      </>
    ),
  },
  {
    title: 'Themes',
    description: (
      <>
        Switch between light and dark modes to match your style.
      </>
    ),
  },
];

/*
<div className="text--center">
  <Svg className={styles.featureSvg} role="img" />}
</div>
*/

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
