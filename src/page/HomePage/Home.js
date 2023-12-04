import { Container } from '@mui/material';
import css from './Home.module.css';

const Home = () => {
  return (
    <Container>
      <h1 className={css.title}>Welcome to our phone book website! </h1>
      <div className={css.containerHome}>
        <p className={css.text}>
          Manage your contacts with maximum convenience: efficiently add, easily
          sort and, if necessary, delete your contacts. Access the full range of
          our site features with just a simple registration.
        </p>
      </div>
    </Container>
  );
};

export default Home;
