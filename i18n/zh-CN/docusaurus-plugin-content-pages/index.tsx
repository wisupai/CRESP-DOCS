import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';
import featureStyles from '@site/src/components/HomepageFeatures/styles.module.css';

// 定义特性项类型和列表，与英文版保持一致
type FeatureItem = {
  title: string;
  Svg: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '标准化研究环境',
    Svg: require('@site/static/img/features/env_no_bg.png').default,
    description: 'CRESP提供了一种标准化的协议来描述计算研究环境，确保实验在不同平台和系统上的可复现性。',
  },
  {
    title: '多语言支持',
    Svg: require('@site/static/img/features/multi_codes_no_bg.png').default,
    description: 'CRESP支持多种编程语言和研究工具，包括Python、R、MATLAB等，满足不同学科研究人员的需求。',
  },
  {
    title: 'AI驱动的研究',
    Svg: require('@site/static/img/features/computer_use.png').default,
    description: 'CRESP与AI助手集成，帮助研究人员规划、执行和记录实验，提高研究效率和质量。',
  },
];

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
          CRESP 文档
        </Heading>
        <p className="hero__subtitle">计算研究环境标准化协议</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.getStartedButton)}
            to="/docs/intro">
            开始使用 CRESP →
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={FeatureList[0].Svg} className={featureStyles.featureSvg} alt={FeatureList[0].title} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                {FeatureList[0].title}
              </Heading>
              <p>
                {FeatureList[0].description}
              </p>
            </div>
          </div>
          
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={FeatureList[1].Svg} className={featureStyles.featureSvg} alt={FeatureList[1].title} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                {FeatureList[1].title}
              </Heading>
              <p>
                {FeatureList[1].description}
              </p>
            </div>
          </div>
          
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src={FeatureList[2].Svg} className={featureStyles.featureSvg} alt={FeatureList[2].title} />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">
                {FeatureList[2].title}
              </Heading>
              <p>
                {FeatureList[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                为什么选择CRESP？
              </Heading>
              <p className={styles.sectionText}>
                在计算研究时代，可复现性已成为一个关键挑战。CRESP（计算研究环境标准化协议）通过提供一种标准化的方式来描述和共享研究环境，解决了这一挑战。
              </p>
              <div className={styles.sectionHighlights}>
                <div className={styles.highlight}>
                  <Heading as="h3">
                    对于研究人员
                  </Heading>
                  <ul>
                    <li>
                      轻松共享您的研究环境
                    </li>
                    <li>
                      确保实验的可复现性
                    </li>
                    <li>
                      专注于研究，而非环境配置
                    </li>
                  </ul>
                </div>
                <div className={styles.highlight}>
                  <Heading as="h3">
                    对于机构
                  </Heading>
                  <ul>
                    <li>
                      标准化研究实践
                    </li>
                    <li>
                      提高研究质量和可靠性
                    </li>
                    <li>
                      促进协作和知识共享
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
                联系我们
              </Heading>
              <div className={styles.contactInfo}>
                <p>
                  <strong>
                    公司:
                  </strong> Wisup AI Ltd
                </p>
                <p>
                  <strong>
                    邮箱:
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

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="CRESP 文档"
      description="CRESP - 计算研究环境描述和复现的标准化协议">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageContent />
      </main>
    </Layout>
  );
} 