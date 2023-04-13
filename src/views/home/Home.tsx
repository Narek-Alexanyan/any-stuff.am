import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return <div>{t('shared.hi')}</div>;
}

export default Home;
