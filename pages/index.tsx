import { NextPage } from 'next';
import React from 'react';
import { PageLayout } from '../src/components/PageLayout/PageLayout';

interface IndexPageProps {
  companyName: string;
}

const IndexPage: NextPage<IndexPageProps> = (props) => (
  <PageLayout>
    <div>{`HELLO ${props.companyName}`}</div>
  </PageLayout>
);

IndexPage.getInitialProps = async () => {
  // This executes only for given view. Perform initial data fetching or set anything that You need in redux store.
  // This action will perform only on server side, and on route change.
  return {
    companyName: 'Grzegorz Dunin-Ślęczek'
  };
};

export default IndexPage;
