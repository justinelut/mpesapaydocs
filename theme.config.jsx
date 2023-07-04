import Image from 'next/image'
import Link from 'next/link';

export default {
  logo: (
    <>
      <span style={{marginRight: '4px'}}>
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
        return(
            <Link href="https://github.com/justinelut/mpesapay/blob/master/README.md">Edit this page</Link>
        )
    }
  },
  feedback: {
    content: 'Feedback',
    useLink: () => 'https://github.com/justinelut/mpesapay/issues',
  },
};
