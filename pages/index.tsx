import { NextPage } from 'next';
import React from 'react';
import { PageLayout } from '../src/components/PageLayout/PageLayout';

interface IndexPageProps {
  testProp: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ testProp }) => (
  <PageLayout>
    <div>{`HELLO WORLD ${testProp}`}</div>
  </PageLayout>
);

IndexPage.getInitialProps = async () => ({
  testProp: 'asd'
});

export default IndexPage;
