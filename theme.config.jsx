import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
 

export default {
  logo: (
    <>
      <span style={{ marginRight: '4px' }}>
        <Image
          src='/mpesalogo.png'
          width={32}
          height={32}
          className='w-32 h-32'
        />
      </span>
      <span>Mpesa Pay</span>
    </>
  ),
  project: {
    link: 'https://github.com/justinelut/mpesapay',
  },
  darkMode: true,
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a
          href='https://verixr.com/mpesapay'
          target='_blank'>
          Mpesa Pay
        </a>
        .
      </span>
    ),
  },

  editLink: {
    text: 'Edit this page',
    component: () => {
      return (
        <Link href='https://github.com/justinelut/mpesapaydocs/'>
          Edit this page
        </Link>
      );
    },
  },
  feedback: {
    content: 'Feedback',
    useLink: () => 'https://github.com/justinelut/mpesapay/issues',
  },

   useNextSeoProps() {
    return {
      titleTemplate: '%s – Mpesapay'
    }
  },

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://justinedev.verixr.com/' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <link
          rel='icon'
          href='/mpesalogo.png'
          type='image/x-icon'></link>
        <meta
          property='og:url'
          content={url}
        />
  
        <meta
          name='keywords'
          content='MpesaPay, M-Pesa, payment integration, Nextjs, Node.js, Nuxtjs, Sveltkit, payments, transaction status, account balance'
        />

        <meta
          property='og:description'
          content={
            frontMatter.description ||
            'The mpesapay module is a Javascript library for integrating M-Pesa payments into Node.js applications. It simplifies payment initiation, transaction status retrieval, and account balance checking.'
          }
        />
        <meta
          property='description'
          content={
            frontMatter.description ||
            'The mpesapay module is a Javascript library for integrating M-Pesa payments into Node.js applications. It simplifies payment initiation, transaction status retrieval, and account balance checking.'
          }
        />
      </>
    );
  },
};
