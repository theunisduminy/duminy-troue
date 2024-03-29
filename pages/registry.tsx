import Head from 'next/head';
import Header from '../components/Header';
import useLanguageStore from '../lib/store';
import { getTranslation } from '../lib/language';
import LanguageSwitchButtons from '../components/LanguageSwitchButtons';

export default function Registry() {
  const { language, setLanguage } = useLanguageStore((state) => {
    return {
      language: state.language,
      setLanguage: state.setLanguage,
    };
  });

  const translation = getTranslation(language);

  return (
    <>
      <Head>
        <title>Registry | Duminy Troue</title>
        <meta name='description' content='RSVP Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col align-center justify-center text-center py-5 bg-gradient-to-b from-[#EFDDCD] to-white'>
        <LanguageSwitchButtons />
        <Header link='lord-milner-no-bg-min.png' />

        <div className='text-4xl text-[#102135] pt-1'>
          <h1>{language === 'afr' ? 'Geskenk idees' : 'Present ideas'}</h1>
        </div>
        <div className='border-l-4 border-[#f1cdcd] h-8 mx-auto my-4'></div>

        <div className='px-10 text-justify'>
          <p className='text-center'>{translation.registry_gift}</p>
          <div className='flex flex-col py-5'>
            <a
              href={
                'https://www.yuppiechef.com/registry.htm?action=view&orderid=7009286'
              }
              target='_blank'
              className='border-2 border-black inline-block items-center bg-[#f1cdcd] px-8 py-4 text-center font-semibold text-[#102135] rounded-xl mb-10'
            >
              <i className='fa fa-external-link' aria-hidden='true'></i>{' '}
              Yuppiechef Registry
            </a>
            <p className='text-center'>{translation.registry_bank}</p>
            <p className='text-center my-5 py-3 border-2 rounded-xl border-black bg-[#f1cdcd]'>
              TL Duminy <br></br>
              ABSA <br></br>
              Cheque <br></br>
              4089925708
            </p>
            <p className='text-center'>
              {language === 'afr'
                ? 'Of gebruik hierdie SnapScan link'
                : 'Or use this SnapScan link'}
            </p>
            <a
              href={
                'https://pos.snapscan.io/qr/p2p/theunis-duminy?act=pay&token=4J5h9r'
              }
              target='_blank'
              className='border-2 border-black inline-block items-center bg-[#f1cdcd] px-8 py-4 text-center font-semibold text-[#102135] rounded-xl mt-5 mb-10'
            >
              <i className='fa fa-credit-card' aria-hidden='true'></i> SnapScan
            </a>
          </div>
        </div>
      </main>
      <footer className='border-solid border-t-2 border-[#102135]'>
        <span>
          Gebou met <i className='fa fa-heart' aria-hidden='true'></i> deur
          Theunis, 2023.
        </span>
      </footer>
    </>
  );
}
