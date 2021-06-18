import logo from './logo.svg';
import './App.css';
import Main from '../src/components/Main/Main';
import Section from '../src/components/Section/Section';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Main>
      <Section>
        <MainPage />
      </Section>
    </Main>
  );
}

export default App;
