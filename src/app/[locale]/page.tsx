import { useTranslations } from 'next-intl';
import Button from '../../Components/Buttons/Button';
export default function Home() {
	const t = useTranslations();
	return <div>{t('loginPage.title')}
	<Button text="Login" variant='primary' />
	<Button text="Sign up" variant='secondary' />

	
	</div>;
}
