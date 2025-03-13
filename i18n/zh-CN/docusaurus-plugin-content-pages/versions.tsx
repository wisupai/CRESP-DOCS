import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import {useVersions, useLatestVersion} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// @ts-ignore
import pkgJson from '../../../package.json';

function VersionsPage() {
  const {siteConfig} = useDocusaurusContext();
  const versions = useVersions();
  const latestVersion = useLatestVersion();
  const currentVersion = versions.find(
    (version) => version.name === 'current',
  );
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== 'current',
  );

  return (
    <Layout
      title="CRESP 文档版本"
      description="CRESP 文档版本页面">
      <main className="container margin-vert--lg">
        <Heading as="h1">
          CRESP 文档版本
        </Heading>

        <div className="margin-bottom--lg">
          <div className="margin-bottom--sm">
            <Heading as="h3" id="current">
              当前版本 (稳定版)
            </Heading>
            <p>
              这里是当前发布版本的文档。
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{currentVersion.label}</th>
                  <td>
                    <Link to={currentVersion.path + '/intro'}>
                      文档
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th>
                    npm 版本
                  </th>
                  <td>v{pkgJson.version}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {pastVersions.length > 0 && (
            <div className="margin-bottom--sm">
              <Heading as="h3" id="archive">
                历史版本 (不再维护)
              </Heading>
              <p>
                这里可以找到 CRESP 的历史版本文档。
              </p>
              <table>
                <tbody>
                  {pastVersions.map((version) => (
                    <tr key={version.name}>
                      <th>{version.label}</th>
                      <td>
                        <Link to={version.path + '/intro'}>
                          文档
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default VersionsPage; 