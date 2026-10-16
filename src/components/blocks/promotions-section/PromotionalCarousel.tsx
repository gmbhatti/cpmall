'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

const offers = [
  {
    tag: 'FASHION SPECIAL',
    discount: '20% OFF',
    title: 'Refresh Your Style',
    description: 'Discover the latest trends and seasonal collections.',
    button: 'Explore Fashion',
    color: 'from-fuchsia-950/95 via-fuchsia-900/70',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85',
    link: '/offers/fashion'
  },
  {
    tag: 'LIMITED TIME',
    discount: '50% OFF',
    title: 'Home & Lifestyle',
    description: 'Transform your home with something extraordinary.',
    button: 'Discover Deals',
    color: 'from-amber-950/95 via-amber-900/65',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
    link: '/offers/home'
  },
  {
    tag: 'WEEKEND SPECIAL',
    discount: 'BUY 1 GET 1',
    title: 'Tech & Accessories',
    description: 'Amazing deals on selected gadgets and accessories.',
    button: 'Shop Electronics',
    color: 'from-blue-950/95 via-blue-900/70',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1400&q=85',
    link: '/offers/electronics'
  },
  {
    tag: 'FOOD & DINING',
    discount: '25% OFF',
    title: 'A Taste of Something Special',
    description: 'Enjoy delicious moments at participating outlets.',
    button: 'View Dining Offers',
    color: 'from-red-950/95 via-red-900/70',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    link: '/offers/dining'
  },
  {
    tag: 'EXCLUSIVE DEAL',
    discount: '30% OFF',
    title: 'Beauty & Wellness',
    description: 'Treat yourself to your favorite beauty essentials.',
    button: 'Explore Offers',
    color: 'from-purple-950/95 via-purple-900/70',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=85',
    link: '/offers/beauty'
  }
]

export default function PromotionalCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () => setActive(current => (current + 1) % offers.length)

  const previous = () => setActive(current => (current - 1 + offers.length) % offers.length)

  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      setActive(current => (current + 1) % offers.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [paused])

  return (
    <section
      aria-label='Center Point promotional offers'
      className='overflow-hidden px-4 py-14 text-slate-900 sm:px-6 lg:py-20'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false)
        }
      }}
    >
      {/* Heading */}
      <div className='mx-auto mb-10 max-w-3xl text-center sm:mb-14'>
        <span className='inline-flex rounded-full border border-violet-200 bg-violet-100 px-4 py-2 text-xs font-extrabold tracking-[0.2em] text-violet-700'>
          SOMETHING SPECIAL FOR YOU
        </span>

        <h2 className='mt-5 text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl'>
          Discover{' '}
          <span className='bg-gradient-to-r from-violet-700 to-fuchsia-500 bg-clip-text text-transparent'>
            Exclusive Offers
          </span>
        </h2>

        <p className='mt-4 text-base leading-7 text-slate-500 sm:text-lg'>
          Great shopping. Incredible savings. All at Center Point.
        </p>
      </div>

      {/* Carousel */}
      <div className='relative mx-auto mt-0 max-w-[1500px]' aria-roledescription='carousel'>
        <div className='relative h-[430px] sm:h-[450px] lg:h-[490px]'>
          {offers.map((offer, index) => {
            const position = (index - active + offers.length) % offers.length

            const isActive = position === 0
            const isNext = position === 1
            const isPrevious = position === offers.length - 1

            let positionClasses = 'pointer-events-none translate-x-[120%] scale-75 opacity-0'

            if (isActive) {
              positionClasses = 'z-30 -translate-x-1/2 scale-100 opacity-100'
            } else if (isPrevious) {
              positionClasses = 'pointer-events-none z-20 -translate-x-[125%] scale-[0.82] opacity-80'
            } else if (isNext) {
              positionClasses = 'pointer-events-none z-20 translate-x-[25%] scale-[0.82] opacity-80'
            }

            return (
              <article
                key={offer.tag}
                aria-hidden={!isActive}
                aria-roledescription='slide'
                aria-label={`${index + 1} of ${offers.length}: ${offer.title}`}
                className={`absolute top-1/2 left-1/2 h-[88%] w-[86%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-slate-900 shadow-2xl transition-all duration-700 ease-in-out sm:w-[72%] lg:w-[58%] ${positionClasses}`}
              >
                {/* Background image */}
                <img
                  src={offer.image}
                  alt=''
                  loading={isActive ? 'eager' : 'lazy'}
                  className='absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105'
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${offer.color} to-transparent`} />

                {/* Offer content */}
                <div className='absolute inset-0 flex items-center p-5 sm:p-8 lg:p-12'>
                  <div className='max-w-lg text-white'>
                    <span className='inline-flex rounded-full border border-white/40 bg-white/10 px-3 py-2 text-[10px] font-bold tracking-[0.18em] backdrop-blur-sm sm:text-xs'>
                      {offer.tag}
                    </span>

                    <h3 className='mt-6 text-4xl leading-none font-black tracking-tight sm:text-5xl lg:text-6xl'>
                      {offer.discount}
                    </h3>

                    <h4 className='mt-4 text-xl font-bold sm:text-2xl lg:text-3xl'>{offer.title}</h4>

                    <p className='mt-3 max-w-sm text-sm leading-6 text-white/85 sm:text-base sm:leading-7'>
                      {offer.description}
                    </p>

                    <Link
                      href={offer.link}
                      tabIndex={isActive ? 0 : -1}
                      className='mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-violet-600 hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:mt-8'
                    >
                      {offer.button}
                      <span aria-hidden='true'>↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Navigation arrows */}
        <button
          type='button'
          onClick={previous}
          aria-label='Previous offer'
          className='absolute top-1/2 left-0 z-40 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-2xl text-slate-800 shadow-lg transition hover:bg-violet-700 hover:text-white sm:left-2 sm:h-12 sm:w-12'
        >
          &#8592;
        </button>

        <button
          type='button'
          onClick={next}
          aria-label='Next offer'
          className='absolute top-1/2 right-0 z-40 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-2xl text-slate-800 shadow-lg transition hover:bg-violet-700 hover:text-white sm:right-2 sm:h-12 sm:w-12'
        >
          &#8594;
        </button>
      </div>

      {/* Pagination */}
      <div className='mt-6 flex items-center justify-center gap-2.5' aria-label='Select promotional offer'>
        {offers.map((offer, index) => (
          <button
            key={offer.tag}
            type='button'
            onClick={() => setActive(index)}
            aria-label={`Show offer: ${offer.title}`}
            aria-current={active === index ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:outline-none ${
              active === index ? 'w-8 bg-violet-700' : 'w-2.5 bg-slate-300 hover:bg-violet-400'
            }`}
          />
        ))}
      </div>

      {/* Mall benefits */}
      <div className='mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-16'>
        {[
          {
            icon: '✦',
            title: 'Exclusive Deals',
            description: 'Offers worth exploring'
          },
          {
            icon: '♡',
            title: 'Something for Everyone',
            description: 'Fashion, food and lifestyle'
          },
          {
            icon: '⌖',
            title: 'One Great Destination',
            description: 'Visit Center Point, Faisalabad'
          }
        ].map(benefit => (
          <div
            key={benefit.title}
            className='flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'
          >
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-violet-100 text-2xl text-violet-700'>
              {benefit.icon}
            </span>

            <div>
              <h5 className='font-bold text-slate-900'>{benefit.title}</h5>
              <p className='mt-1 text-sm text-slate-500'>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
