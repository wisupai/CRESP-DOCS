import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Standardized Research Environment',
    Svg: require('@site/static/img/env_no_bg.png').default,
    description: (
      <>
        CRESP provides a standardized protocol to describe computational research environments,
        ensuring experiment reproducibility across different platforms and systems.
      </>
    ),
  },
  {
    title: 'Multi-Language Support',
    Svg: require('@site/static/img/multi_codes_no_bg.png').default,
    description: (
      <>
        Compatible with various programming languages including Python (<code>pyproject.toml</code>),
        MATLAB (<code>matproject.toml</code>), and R (<code>rproject.toml</code>), making it versatile
        for different research fields.
      </>
    ),
  },
  {
    title: 'AI-Powered Research',
    Svg: require('@site/static/img/computer_use.png').default,
    description: (
      <>
        Part of the Rescience Lab platform, CRESP works seamlessly with AI agents to help researchers
        plan, code, execute, and document their computational experiments.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Svg} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
