import React from 'react';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import LoadingElement from '../../UI/LoadingElement/LoadingElement';

function LoadingPage() {
  return (
    <div>
      <Header headerType='empty' />

      <LoadingElement loadingText='Checking authorization...' />
    </div>
  );
}

export default LoadingPage;
