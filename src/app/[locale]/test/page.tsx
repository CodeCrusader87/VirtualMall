'use client';
import LocaleSwitcher from '@/components/locale-switcher/locale-switcher';
import { useTranslations } from 'next-intl';

export default function Test() {
	const t = useTranslations();
	return (
		<>
			<LocaleSwitcher />
			<div>{t('common.language')}</div>
		</>
	);
}
