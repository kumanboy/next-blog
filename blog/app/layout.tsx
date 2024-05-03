import {ThemeProvider} from '@/components/providers/theme-provider'
import {Toaster} from '@/components/ui/sonner'
import {ChildProps} from '@/types'
import type {Metadata} from 'next'
import {Crete_Round, Work_Sans} from 'next/font/google'
import './globals.css'
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from '@vercel/speed-insights/next';


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
        images: 'https://us-east-1-shared-usea1-02.graphassets.com/cluhz35hg2tcy08licbj9djj2/clvqhsnzn08e807k8bp0vs5uo',
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
            <SpeedInsights />
        </ThemeProvider>
        </body>
        </html>
    )
}

export default RootLayout
