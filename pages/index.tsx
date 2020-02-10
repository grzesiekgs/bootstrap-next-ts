import { NextPage } from 'next';
import React from 'react';

interface IndexPageProps {
  testProp: string;
}

const IndexPage: NextPage<IndexPageProps> = ({ testProp }) => <div>{`HELLO WORLD ${testProp}`}</div>;

IndexPage.getInitialProps = async () => ({
  testProp: 'asd'
});

export default IndexPage;
