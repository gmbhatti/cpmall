import Link from 'next/link'

import FacebookIcon from '@/assets/svg/facebook-icon'
import InstagramIcon from '@/assets/svg/instagram-icon'
import TwitterIcon from '@/assets/svg/twitter-icon'
import YoutubeIcon from '@/assets/svg/youtube-icon'

import { Separator } from '@/components/ui/separator'

import BistroLogo from '@/assets/svg/bistro-logo'
import { footerData } from '@/assets/data/footer'

const Footer = () => {
  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8'>
        <Link href='/#home'>
          <div className='flex items-center gap-3'>
            <BistroLogo className='gap-3' />
            <div className='flex flex-col leading-none'>
              <h1 className='text-primary text-bold text-[24px] leading-none font-semibold tracking-tight'>
                CENTER POINT
              </h1>
              <p className='mt-0 text-[4px] leading-none font-semibold text-slate-500 uppercase md:text-base'>
                FAISALABAD
              </p>
            </div>
          </div>
        </Link>

        <div className='flex items-center gap-5 whitespace-nowrap'>
          {footerData.map(item => (
            <Link
              key={item.title}
              href={item.href}
              className='text-foreground hover:text-primary text-base! hover:bg-transparent'
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-4'>
          <Link
            href='https://facebook.com/centerpointmall'
            className='hover:text-primary'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FacebookIcon className='size-5' />
          </Link>
          <Link
            href='https://instagram.com/centerpointmall'
            className='hover:text-primary'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramIcon className='size-5' />
          </Link>
          <Link
            href='https://x.com/centerpointmall'
            className='hover:text-primary'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon className='size-5' />
          </Link>
          <Link
            href='https://youtube.com/centerpointfaisalabad'
            className='hover:text-primary'
            target='_blank'
            rel='noopener noreferrer'
          >
            <YoutubeIcon className='size-5' />
          </Link>
        </div>
      </div>

      <Separator />

      <div className='flex w-full justify-between px-4 py-8 sm:px-6'>
        <p className='text-muted-foreground mx-auto text-center text-balance'>
          <span className='mx-2'>{`©${new Date().getFullYear()}`} CENTER POINT</span>
        </p>
        <p className='text-muted-foreground mx-auto text-center text-balance'>
          <span className='mx-2'>
            Designed by{' '}
            <Link href='https://konvenience.net' className='hover:underline' target='_blank' rel='noopener noreferrer'>
              KONVENIENCE
            </Link>
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
