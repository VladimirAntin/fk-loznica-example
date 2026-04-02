'use client';
import {FC, memo, ReactNode, useEffect, useState} from 'react';
import Link from 'next/link';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';
import {motion} from 'framer-motion';

const HERO_IMAGE = 'https://images.pexels.com/photos/25525188/pexels-photo-25525188.jpeg';

const SLIDES = [
  'https://images.pexels.com/photos/8941577/pexels-photo-8941577.jpeg',
  'https://images.pexels.com/photos/10347875/pexels-photo-10347875.jpeg',
  'https://images.pexels.com/photos/10347862/pexels-photo-10347862.jpeg',
];

const STATS = [
  {value: '3', label: 'Uzrasne grupe', emoji: '🎯'},
  {value: '5–13', label: 'Godina uzrast', emoji: '⭐'},
  {value: '2×', label: 'Nedeljno', emoji: '📅'},
];

const Highlight: FC<{children?: ReactNode}> = ({children}) => (
  <span className={'bg-linear-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent'}>
    {children}
  </span>
);

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className={'relative flex min-h-screen flex-col items-center justify-center overflow-hidden'}>
      {/* ── Background layers ── */}
      <div className={'absolute inset-0'}>
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={''}
            aria-hidden={'true'}
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-1000',
              i === current ? 'opacity-100' : 'opacity-0',
            )}
          />
        ))}
        {/* Cheerful vivid gradient overlay */}
        <div
          className={
            'absolute inset-0 bg-linear-to-b from-green-800/80 via-emerald-900/70 to-green-950/85'
          }
        />
        {/* Decorative blobs */}
        <div
          className={'absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-yellow-400/15 blur-3xl'}
        />
        <div
          className={
            'absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl'
          }
        />
        <div
          className={'absolute top-1/2 right-1/3 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl'}
        />
      </div>

      {/* ── Content ── */}
      <div className={'relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8'}>
        {/* Badge */}
        <motion.div
          initial={{opacity: 0, y: -10}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className={
            'mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/15 px-4 py-1.5 backdrop-blur-sm'
          }>
          <span className={'h-2 w-2 animate-pulse rounded-full bg-yellow-400'} />
          <span className={'text-xs font-bold tracking-widest text-yellow-200 uppercase'}>
            {'🎉 Upis u toku — sezona 2025/26'}
          </span>
        </motion.div>

        {/* ── CIRCULAR HERO IMAGE ── */}
        <motion.div
          initial={{opacity: 0, scale: 0.7}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.7, delay: 0.15, ease: 'backOut'}}
          className={'relative mx-auto mb-8 h-52 w-52 sm:h-64 sm:w-64'}>
          {/* Gradient ring */}
          <div
            className={
              'absolute inset-0 rounded-full bg-linear-to-br from-green-400 via-yellow-400 to-emerald-500 p-1 shadow-2xl shadow-green-500/40'
            }>
            <div
              className={'h-full w-full overflow-hidden rounded-full border-4 border-green-950/30'}>
              <img
                src={HERO_IMAGE}
                alt={'Deca igraju fudbal — FK Junior Loznica'}
                className={'h-full w-full object-cover'}
              />
            </div>
          </div>
          {/* Rotating football */}
          <motion.div
            className={
              'absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-lg'
            }
            animate={{rotate: 360}}
            transition={{duration: 8, repeat: Infinity, ease: 'linear'}}>
            {'⚽'}
          </motion.div>
          {/* Pulsing star */}
          <motion.div
            className={
              'absolute -bottom-2 -left-2 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-xl shadow-lg'
            }
            animate={{scale: [1, 1.2, 1]}}
            transition={{duration: 2, repeat: Infinity, ease: 'easeInOut'}}>
            {'⭐'}
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          className={
            'mb-4 text-4xl leading-tight font-extrabold text-white sm:text-5xl lg:text-6xl'
          }>
          {'Škola Fudbala '}
          <Highlight>{'FK Junior'}</Highlight>
          <br />
          <span
            className={'text-2xl font-bold tracking-wider text-white/80 sm:text-3xl lg:text-4xl'}>
            {'Loznica 🏆'}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.4}}
          className={'mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl'}>
          {
            'Stručna škola fudbala za decu uzrasta 5–13 godina — razvijamo mlade talente kroz disciplinu, timski duh i ljubav prema igri! 🌟'
          }
        </motion.p>

        {/* Stats pills */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.5}}
          className={'mb-8 flex flex-wrap items-center justify-center gap-3'}>
          {STATS.map(s => (
            <div
              key={s.label}
              className={
                'flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm'
              }>
              <span className={'text-lg'}>{s.emoji}</span>
              <span className={'text-base font-black text-white'}>{s.value}</span>
              <span className={'text-xs text-white/70'}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.6}}
          className={'flex flex-col items-center justify-center gap-4 sm:flex-row'}>
          <Link
            href={'/#contact'}
            className={
              'group flex items-center gap-2 rounded-full bg-linear-to-r from-green-500 to-emerald-600 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-green-600/40 transition hover:scale-105 hover:shadow-green-500/60'
            }>
            {'⚽ Upiši Dete'}
            <span className={'transition-transform duration-200 group-hover:translate-x-1'}>
              {'→'}
            </span>
          </Link>
          <Link
            href={'/#programs'}
            className={
              'group flex items-center gap-2 rounded-full border-2 border-white/50 bg-white/15 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:scale-105 hover:border-white hover:bg-white/25'
            }>
            {'🏃 Naši Programi'}
            <span className={'transition-transform duration-200 group-hover:translate-x-1'}>
              {'→'}
            </span>
          </Link>
        </motion.div>

        {/* Slide dots */}
        <div className={'mt-8 flex items-center justify-center gap-2'}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slika ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === current ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70',
              )}
            />
          ))}
        </div>
      </div>

      <WaveDivider fill={'#0c0a09'} />
    </section>
  );
};

export default memo(Hero);
