import { useTranslations } from 'next-intl';

export default function Home() {
	const t = useTranslations();
	console.log(t);
	return <div>{t('loginPage.title')}</div>;
}
