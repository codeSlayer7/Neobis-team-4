import './App.css';
import { useTranslation } from 'react-i18next'
import LangugeDropdown from './components/langdropdawn';

const languages = [
  {
    code: 'ru',
    name: 'Русский',
  },
  {
    code: 'eng',
    name: 'English',
  }
]


function App() {
  const { t } = useTranslation()

  return (
    <div className="App">
      <h1>{t('home')}</h1>
      <LangugeDropdown languages={languages}/>
    </div>
  );
}

export default App;
