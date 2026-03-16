import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function NotFound(): ReactNode {
  return (
    <Layout title="Page Not Found">
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: '2rem',
        }}>
        <div
          style={{
            fontSize: '5rem',
            fontWeight: 800,
            color: '#0284C7',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
          404
        </div>
        <p
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            marginBottom: '0.5rem',
          }}>
          This page doesn't exist.
        </p>
        <p
          style={{
            color: 'var(--ifm-color-emphasis-600)',
            maxWidth: '420px',
            marginBottom: '2rem',
          }}>
          Unlike a Goal Cycle, this path has no clear outcome.
          Let's get you back on the board.
        </p>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Go to Docs
          </Link>
          <Link className="button button--outline button--lg" to="/">
            Back to Home
          </Link>
        </div>
      </main>
    </Layout>
  );
}
