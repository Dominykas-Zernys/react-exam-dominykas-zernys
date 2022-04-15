import { useState } from 'react';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import LogoutButton from '../../UI/LogoutButton/LogoutButton';

function Add() {
  const [addFail, setAddFail] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);

  return (
    <div>
      <Header headerType='contentPage' />
      <Wrapper>
        <LogoutButton />
        <Form
          formType='add skill'
          fetchUrl='v1/content/skills'
          setActionFail={setAddFail}
          setActionSuccess={setAddSuccess}
          actionSuccess={addSuccess}
          actionFail={addFail}
          successMsg='New skill added!'
          failMsg="Couldn't create new skill. Make sure you complete the form correctly."
        />
      </Wrapper>
    </div>
  );
}

export default Add;
