import React from 'react';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';

function LoadingPage() {
  return (
    <div>
      <Header headerType='contentPage' />
      <Wrapper>
        <div>checking authorization...</div>
      </Wrapper>
    </div>
  );
}

export default LoadingPage;
