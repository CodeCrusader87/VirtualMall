'use client';

import { usePathname } from 'next/navigation';
import DropdownOne from '../dropdown-one/dropdown-one';
import { useLocale, useTranslations } from 'next-intl';

export default function LocaleSwitcher() {
	const path = usePathname();
	const t = useTranslations();
	const locale = useLocale() as 'en' | 'sq' | 'sr';
	const localeOptions = [
		{
			text: t('locales.en'),
			href: `en${path}`,
		},
		{
			text: t('locales.sq'),
			href: `sq${path}`,
		},
		{
			text: t('locales.sr'),
			href: `sr${path}`,
		},
	];
	return (
		<DropdownOne buttonText={t(`locales.${locale}`)} options={localeOptions} />
	);
}
