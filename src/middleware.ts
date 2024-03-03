import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'sq', 'sr'],

	// Used when no locale matches
	defaultLocale: 'en',
	localePrefix: 'never',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(en|sq|sr)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
