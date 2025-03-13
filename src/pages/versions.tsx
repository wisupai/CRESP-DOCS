import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {useVersions, useLatestVersion} from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// @ts-ignore
import pkgJson from '../../package.json';

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
      title="CRESP Versions"
      description="CRESP Documentation Versions Page">
      <main className="container margin-vert--lg">
        <Heading as="h1">
          <Translate id="versionsPage.title">CRESP Documentation Versions</Translate>
        </Heading>

        <div className="margin-bottom--lg">
          <div className="margin-bottom--sm">
            <Heading as="h3" id="current">
              <Translate id="versionsPage.current.title">Current Version (Stable)</Translate>
            </Heading>
            <p>
              <Translate id="versionsPage.current.description">
                Here you can find the documentation for current released version.
              </Translate>
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{currentVersion.label}</th>
                  <td>
                    <Link to={currentVersion.path + '/intro'}>
                      <Translate id="versionsPage.current.link.documentation">Documentation</Translate>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th>
                    <Translate id="versionsPage.npm">npm</Translate>
                  </th>
                  <td>v{pkgJson.version}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {pastVersions.length > 0 && (
            <div className="margin-bottom--sm">
              <Heading as="h3" id="archive">
                <Translate id="versionsPage.archived.title">Past Versions (Not maintained anymore)</Translate>
              </Heading>
              <p>
                <Translate id="versionsPage.archived.description">
                  Here you can find documentation for previous versions of CRESP.
                </Translate>
              </p>
              <table>
                <tbody>
                  {pastVersions.map((version) => (
                    <tr key={version.name}>
                      <th>{version.label}</th>
                      <td>
                        <Link to={version.path + '/intro'}>
                          <Translate id="versionsPage.archived.link.documentation">Documentation</Translate>
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