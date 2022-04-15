import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SkillCard from '../../components/SkillCard/SkillCard';
import SkillCards from '../../components/SkillCards/SkillCards';
import Wrapper from '../../components/Wrapper/Wrapper';
import fetchGet from '../../helpers/fetchGet';
import AuthContext from '../../store/AuthContext';
import LoadingElement from '../../UI/LoadingElement/LoadingElement';
import LogoutButton from '../../UI/LogoutButton/LogoutButton';
import PageTitle from '../../UI/PageTitle/PageTitle';

function Home() {
  const [skillsArr, setSkillsArr] = useState([]);
  const [loadingArr, setLoadingArr] = useState(true);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    getSkills();
  }, []);

  async function getSkills() {
    setLoadingArr(true);
    const res = await fetchGet('v1/content/skills', token);
    setSkillsArr(res);
    setLoadingArr(false);
  }

  return (
    <div>
      <Header headerType='contentPage' />
      {loadingArr ? (
        <LoadingElement loadingText='Loading...' />
      ) : (
        <Wrapper>
          <PageTitle title='Skills' />
          <LogoutButton />
          <SkillCards>
            {!loadingArr && skillsArr.length === 0 ? (
              <div>No skills found</div>
            ) : (
              skillsArr.map((skillObj) => (
                <SkillCard
                  title={skillObj.title}
                  description={skillObj.description}
                  key={skillObj.id}
                />
              ))
            )}
          </SkillCards>
        </Wrapper>
      )}
    </div>
  );
}

export default Home;
