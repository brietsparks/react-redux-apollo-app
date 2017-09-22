import React from 'react';

import AuthContainer from '../../containers/Auth';
import ProjectTreeContainer from '../../containers/ProjectTree';

import Dummy from '../../components/Dummy';

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      
      <AuthContainer>
        <ProjectTreeContainer/>
      </AuthContainer>
    </div>
  )
};

export default Home;