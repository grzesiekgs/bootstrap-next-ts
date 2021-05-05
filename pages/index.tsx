import { GetStaticPropsResult, NextPage } from 'next';
import React from 'react';
import { AppActions } from 'logic/app/actions';
import { reduxWrapper } from 'logic/store';
import { PageLayout } from 'src/components/PageLayout/PageLayout';

interface IndexPageProps {
  buildTime: string;
  initialized: boolean;
  mounted: boolean;
}

const IndexPage: NextPage<IndexPageProps> = (props) => (
  <PageLayout>
    <div>{`This page is STATIC and has been build ${props.buildTime}`}</div>
    <div>{`initialized: ${props.initialized}`}</div>
    <div>{`mounted: ${props.mounted}`}</div>
  </PageLayout>
);

export const getStaticProps = reduxWrapper.getStaticProps<GetStaticPropsResult<IndexPageProps>>(({ store }) => {
  store.dispatch(AppActions.setInitialized(true));

  const state = store.getState();

  return {
    props: {
      buildTime: new Date().toISOString(),
      ...state.app
    }
  };
});

export default IndexPage;
