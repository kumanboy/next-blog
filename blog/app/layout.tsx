import {ThemeProvider} from '@/components/providers/theme-provider'
import {Toaster} from '@/components/ui/sonner'
import {ChildProps} from '@/types'
import type {Metadata} from 'next'
import {Crete_Round, Work_Sans} from 'next/font/google'
import './globals.css'
import NextTopLoader from "nextjs-toploader";

const creteRound = Crete_Round({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-creteRound',
})
const workSans = Work_Sans({
    weight: ['500', '600'],
    subsets: ['latin'],
    variable: '--font-workSans',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://talimot.uz'),
    title: 'Dasturlashga oid maqolalar va dars toplamlar',
    description:
        'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
    authors: [{name: 'Husan Davronov', url: 'https://t.me/Coder_davronov'}],
    icons: {icon: '/favicon.jpg'},
    keywords:
        "raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
    openGraph: {
        title: 'Next Blog dasturlashga oid maqolalar',
        description:
            'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
        type: 'website',
        url: 'https://talimot.uz',
        locale: 'en_EN',
        images: '/about/uchiha.jpg',
        countryName: 'Uzbekistan',
        siteName: 'Next Blog',
        emails: 'info@next.edu',
    },
}

function RootLayout({children}: ChildProps) {
    return (
        <html lang='en' suppressHydrationWarning>
        <body
            className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}
        >
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='blog-theme'
        >
            <NextTopLoader/>
            {children}
            <Toaster position='top-center'/>
        </ThemeProvider>
        </body>
        </html>
    )
}

export default RootLayout
