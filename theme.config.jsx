import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useConfig } from 'nextra-theme-docs';
import { useEffect } from 'react';

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

  chat: {
    link: 'https://twitter.com/justinegichana7',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 248 204'>
        <path
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='16'
          d='M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z'
        />
      </svg>
    ),
    link: 'https://me.verixr.com',
    icon: (
      <svg
        fill='#000000'
        width='800px'
        height='800px'
        viewBox='0 0 1000 1000'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M910 423V246q0-42-21-78t-57-57-78-21H246q-42 0-78 21t-57 57-21 78v508q0 42 21 78t57 57 78 21h508q42 0 78-21t57-57 21-78V584H793v92q0 32-16 58.5T734.5 777 676 793H324q-32 0-58.5-16T223 734.5 207 676V324q0-32 16-58.5t42.5-42.5 58.5-16h352q32 0 58.5 16t42.5 42.5 16 58.5v99h117zm-491-91q-25-12-47-7.5T337 347t-13 46v214q0 28 13 46t35 22.5 47-7.5l279-125q26-12 35-27.5t0-31-35-27.5z' />
        <style>
          {`
        path { fill: #000; }
        @media (prefers-color-scheme: dark) {
          path { fill: #FFF; }
        }
      `}
        </style>
      </svg>
    ),

    link: 'https://linkedin.com/in/justine-gichana-879904155',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 248 204'>
        <rect
          width='184'
          height='184'
          x='36'
          y='36'
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='16'
          rx='8'
        />
        <path
          fill='none'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='16'
          d='M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36'
        />
        <circle
          stroke='none'
          cx='88'
          cy='80'
          r='12'
        />
      </svg>
    ),
    link: 'https://github.com/justinelut',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 248 204'>
        <path
          fill='none'
          stroke-width='14.7'
          d='M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3'
        />
        <path
          fill='none'
          stroke-width='16'
          d='M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3'
        />
        <path
          fill='none'
          stroke-width='16'
          d='M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z'
        />
        <path
          fill='none'
          stroke-width='18.7'
          d='m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5'
        />
        <path
          fill='none'
          stroke-width='22.7'
          d='m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13'
        />
        <path
          fill='none'
          stroke-width='13.3'
          d='M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8'
        />
      </svg>
    ),
  },
  banner: {
    key: '4.4.0-release',
    text: (
      <a
        href='https://mpesapay.verixr.com/mpesaexpress/stkpushquery'
        target='_blank'>
        🎉 MpesaPay 4.4.0 is released.{' '}
        <blockquote>StkPush Payment Status Check Read more →</blockquote>
      </a>
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
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Mpesapay',
      };
    } else {
      return {
        titleTemplate: 'Mpesapay',
      };
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      'https://justinedev.verixr.com/' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

        useEffect(() => {
    // This will execute when the component mounts

    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-R7ERRQ7TXB';
    script.async = true;

    // Append the script to the document's head
    document.head.appendChild(script);

    // Define the gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }

    // Call gtag('js', new Date()) and gtag('config', 'G-R7ERRQ7TXB')
    gtag('js', new Date());
    gtag('config', 'G-R7ERRQ7TXB');

    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
          property='og:image'
          content='/mpesaimage.jpg'
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
