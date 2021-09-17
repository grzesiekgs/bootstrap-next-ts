import { NextPage } from 'next';
import React from 'react';
import { PageLayout } from 'src/components';

interface IndexPageProps {
  buildTime: string;
  initialized: boolean;
  mounted: boolean;
}

const IndexPage: NextPage<IndexPageProps> = () => (
  <PageLayout>
    <div>INDEX PAGE</div>
  </PageLayout>
);

export default IndexPage;
