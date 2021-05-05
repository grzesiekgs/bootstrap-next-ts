import { GetServerSidePropsResult, NextPage } from 'next';
import React from 'react';
import { AppActions } from 'logic/app/actions';
import { reduxWrapper } from 'logic/store';
import { PageLayout } from 'src/components/PageLayout/PageLayout';

interface DynamicPageProps {
  buildTime: string;
  initialized: boolean;
  mounted: boolean;
}

const DynamicPage: NextPage<DynamicPageProps> = (props) => (
  <PageLayout>
    <div>{`This page is DYNAMIC and has been build ${props.buildTime}`}</div>
    <div>{`initialized: ${props.initialized}`}</div>
    <div>{`mounted: ${props.mounted}`}</div>
  </PageLayout>
);

export const getServerSideProps = reduxWrapper.getServerSideProps<GetServerSidePropsResult<DynamicPageProps>>(
  ({ store }) => {
    store.dispatch(AppActions.setInitialized(true));

    const state = store.getState();

    return {
      props: {
        buildTime: new Date().toISOString(),
        ...state.app
      }
    };
  }
);

export default DynamicPage;
