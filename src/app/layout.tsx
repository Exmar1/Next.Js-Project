import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '700'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Create Next',
	icons: {
		icon: '/favicon2.ico',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={notoSans.className}>{children}</body>
		</html>
	)
}
