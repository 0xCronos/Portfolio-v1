import Head from 'next/head'

export const Seo = ({pageName}) => {
    return (
        <Head>
            <title>{pageName} | Diego Muñoz</title>
            <meta
                name='description'
                content='Diego Muñoz is a Software Engineering student and also a Full Stack developer. Check out his website!'
            />
            <meta property='og:title' content='Diego Muñoz portfolio.' />
            <meta property='og:type' content='article' />
            <meta httpEquiv='Content-Type' content='text/html' charSet='utf-8' />
            <meta name='theme-color' content='#000000' />
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            <link rel='icon' href='/assets/favicon.png' />
        </Head>
    )
}