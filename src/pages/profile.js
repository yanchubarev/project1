import React from 'react';
import Container from '@material-ui/core/container';
import Button from '@material-ui/core/button';

const ProfilePage = () => {
  return (
    <section className="page">
      <div className="pageContent">
        <Container maxWidth="md">
          <div className="whiteDiv textCenter">
            <h2>Профиль</h2>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ProfilePage;