'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Test() {
	const t = useTranslations();
	const path = usePathname();
	console.log(path);
	return (
		<>
			<Link href={`sr${path}`}>Serbian</Link>
			<Link href={`en${path}`}>English</Link>
			<Link href={`sq${path}`}>Albanian</Link>
			<div>{t('title')}</div>
		</>
	);
}
