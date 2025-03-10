import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

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
            width="150" 
            height="150" 
          />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started with CRESP →
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
                Why CRESP?
              </Heading>
              <p className={styles.sectionText}>
                In the era of computational research, reproducibility has become a critical challenge.
                CRESP (Computational Research Environment Standardization Protocol) addresses this
                challenge by providing a standardized way to describe and share research environments.
              </p>
              <div className={styles.sectionHighlights}>
                <div className={styles.highlight}>
                  <Heading as="h3">For Researchers</Heading>
                  <ul>
                    <li>Easily share your research environment</li>
                    <li>Ensure reproducibility of your experiments</li>
                    <li>Focus on research, not environment setup</li>
                  </ul>
                </div>
                <div className={styles.highlight}>
                  <Heading as="h3">For Institutions</Heading>
                  <ul>
                    <li>Standardize research practices</li>
                    <li>Improve research quality and reliability</li>
                    <li>Facilitate collaboration and knowledge sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('padding-vert--xl', styles.sectionBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.bannerContent}>
                <img 
                  src="/img/cresp_banner_3000x1000.png" 
                  alt="CRESP Banner" 
                  className={styles.bannerImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx('padding-vert--lg', styles.sectionContact)}>
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 text--center">
              <Heading as="h2" className={styles.sectionTitle}>
                Contact Us
              </Heading>
              <div className={styles.contactInfo}>
                <p>
                  <strong>Company:</strong> Wisup AI Ltd
                </p>
                <p>
                  <strong>Email:</strong>{' '}
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
