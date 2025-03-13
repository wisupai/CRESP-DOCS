import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>> | string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Standardized Research Environment',
    Svg: require('@site/static/img/features/env_no_bg.png').default,
    description: 'CRESP provides a standardized protocol to describe computational research environments, ensuring experiment reproducibility across different platforms and systems.',
  },
  {
    title: 'Multi-Language Support',
    Svg: require('@site/static/img/features/multi_codes_no_bg.png').default,
    description: 'Compatible with various programming languages including Python (pyproject.toml), MATLAB (matproject.toml), and R (rproject.toml), making it versatile for different research fields.',
  },
  {
    title: 'AI-Powered Research',
    Svg: require('@site/static/img/features/computer_use.png').default,
    description: 'Part of the Rescience Lab platform, CRESP works seamlessly with AI agents to help researchers plan, code, execute, and document their computational experiments.',
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={FeatureList[0].Svg as string} className={styles.featureSvg} alt={FeatureList[0].title} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                <Translate id="homepage.features.standardizedEnvironment.title">
                  Standardized Research Environment
                </Translate>
              </Heading>
              <p>
                <Translate id="homepage.features.standardizedEnvironment.description">
                  CRESP provides a standardized protocol to describe computational research environments, ensuring experiment reproducibility across different platforms and systems.
                </Translate>
              </p>
            </div>
          </div>
          
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={FeatureList[1].Svg as string} className={styles.featureSvg} alt={FeatureList[1].title} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                <Translate id="homepage.features.multiLanguageSupport.title">
                  Multi-Language Support
                </Translate>
              </Heading>
              <p>
                <Translate id="homepage.features.multiLanguageSupport.description">
                  Compatible with various programming languages including Python (pyproject.toml), MATLAB (matproject.toml), and R (rproject.toml), making it versatile for different research fields.
                </Translate>
              </p>
            </div>
          </div>
          
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={FeatureList[2].Svg as string} className={styles.featureSvg} alt={FeatureList[2].title} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                <Translate id="homepage.features.aiPoweredResearch.title">
                  AI-Powered Research
                </Translate>
              </Heading>
              <p>
                <Translate id="homepage.features.aiPoweredResearch.description">
                  Part of the Rescience Lab platform, CRESP works seamlessly with AI agents to help researchers plan, code, execute, and document their computational experiments.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
