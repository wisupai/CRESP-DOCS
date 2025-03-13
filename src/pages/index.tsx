import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';

// 导入package.json中的版本号
// @ts-ignore
import pkgJson from '../../package.json';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroLogo}>
          <img 
            src="/img/cresp_logo_no_text_no_bg_2000x2000.png" 
            alt="CRESP Logo" 
            width="180" 
            height="180" 
          />
        </div>
        <Heading as="h1" className="hero__title">
          <Translate id="title">{siteConfig.title}</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="tagline">{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.getStartedButton)}
            to="/docs/intro">
            <Translate id="homepage.hero.getStarted">Get Started with CRESP →</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageContent() {
  return (
    <>
      <div className={clsx('padding-vert--xl', styles.sectionAlt)}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.whyCresp.title">Why CRESP?</Translate>
              </Heading>
              <p className={styles.sectionText}>
                <Translate id="homepage.whyCresp.description">In the era of computational research, reproducibility has become a critical challenge. CRESP (Computational Research Environment Standardization Protocol) addresses this challenge by providing a standardized way to describe and share research environments.</Translate>
              </p>
              <div className={styles.sectionHighlights}>
                <div className={styles.highlight}>
                  <Heading as="h3">
                    <Translate id="homepage.whyCresp.forResearchers.title">For Researchers</Translate>
                  </Heading>
                  <ul>
                    <li>
                      <Translate id="homepage.whyCresp.forResearchers.point1">Easily share your research environment</Translate>
                    </li>
                    <li>
                      <Translate id="homepage.whyCresp.forResearchers.point2">Ensure reproducibility of your experiments</Translate>
                    </li>
                    <li>
                      <Translate id="homepage.whyCresp.forResearchers.point3">Focus on research, not environment setup</Translate>
                    </li>
                  </ul>
                </div>
                <div className={styles.highlight}>
                  <Heading as="h3">
                    <Translate id="homepage.whyCresp.forInstitutions.title">For Institutions</Translate>
                  </Heading>
                  <ul>
                    <li>
                      <Translate id="homepage.whyCresp.forInstitutions.point1">Standardize research practices</Translate>
                    </li>
                    <li>
                      <Translate id="homepage.whyCresp.forInstitutions.point2">Improve research quality and reliability</Translate>
                    </li>
                    <li>
                      <Translate id="homepage.whyCresp.forInstitutions.point3">Facilitate collaboration and knowledge sharing</Translate>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionBanner}>
        <div className={styles.bannerContent}>
          <img 
            src="/img/cresp_banner_3000x1000.png" 
            alt="CRESP Banner" 
            className={styles.bannerImage}
          />
        </div>
      </div>
      <div className={clsx('padding-vert--lg', styles.sectionContact)}>
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 text--center">
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.contact.title">Contact Us</Translate>
              </Heading>
              <div className={styles.contactInfo}>
                <p>
                  <strong>
                    <Translate id="homepage.contact.company">Company:</Translate>
                  </strong> Wisup AI Ltd
                </p>
                <p>
                  <strong>
                    <Translate id="homepage.contact.email">Email:</Translate>
                  </strong>{' '}
                  <a href="mailto:team@wisup.ai">team@wisup.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="CRESP - A standardized protocol for computational research environment description and reproduction">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageContent />
      </main>
    </Layout>
  );
}
