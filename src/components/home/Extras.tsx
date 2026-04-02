'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';

type Extra = {
  emoji: string;
  title: string;
  description: string;
  price: string;
  accent: string;
};

const EXTRAS: Extra[] = [
  {
    emoji: '👕',
    title: 'Startni komplet opreme',
    description: 'Dres, šorts i čarape FK Junior Loznica. Personalizovano sa imenom i brojem igrača.',
    price: '+ 2.500 RSD',
    accent: 'bg-primary',
  },
  {
    emoji: '⚽',
    title: 'Lična lopta',
    description: 'Zvanična lopta kluba veličine prilagođene uzrastu dece — idealna za trening kod kuće.',
    price: '+ 1.800 RSD',
    accent: 'bg-fun-blue',
  },
  {
    emoji: '🎥',
    title: 'Video analiza igre',
    description: 'Snimanje i analiza nastupa vašeg deteta. Detaljan izveštaj trenera sa preporukama za napredak.',
    price: '+ 1.500 RSD',
    accent: 'bg-secondary',
  },
  {
    emoji: '🏋️',
    title: 'Individualni trening',
    description: 'Sat individualnog rada s trenerom — fokus na slabim tačkama i ubrzani napredak specifičnih veština.',
    price: '+ 1.200 RSD/h',
    accent: 'bg-primary',
  },
  {
    emoji: '☀️',
    title: 'Letnji fudbalski kamp',
    description: 'Intenzivna nedelja treninga, turnira i druženja u julu. Ograničen broj mesta — prijavite se na vreme!',
    price: '6.000 RSD/nedelja',
    accent: 'bg-fun-orange',
  },
  {
    emoji: '📸',
    title: 'Fotografisanje tima',
    description: 'Profesionalna foto-sesija ekipe na terenu. Slike isporučene digitalno u roku od 48h.',
    price: '+ 800 RSD / dete',
    accent: 'bg-fun-green',
  },
];

const Extras = () => (
  <section id={'extras'} className={'relative bg-stone-950 pb-40 pt-20 lg:pb-52 lg:pt-28'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>

      {/* Header */}
      <motion.div
        className={'mb-14 text-center'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-4 block text-sm font-semibold tracking-widest text-secondary uppercase'}>
          {'Dodajte još više'}
        </span>
        <h2 className={'mb-4 text-4xl font-light text-white sm:text-5xl lg:text-6xl'}>
          {'Dodatne Opcije'}
        </h2>
        <p className={'mx-auto max-w-lg text-sm leading-relaxed text-white/40'}>
          {'Opremite svog malog fudbalera ili mu priuštite nešto posebno — izaberite jednu od naših premium opcija.'}
        </p>
      </motion.div>

      {/* Grid */}
      <div className={'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'}>
        {EXTRAS.map((extra, i) => (
          <motion.div
            key={i}
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-40px'}}
            transition={{duration: 0.45, ease: 'easeOut', delay: i * 0.07}}
            className={'group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition hover:border-white/10 hover:bg-white/8'}>
            {/* Top accent bar */}
            <div className={cn('absolute top-0 left-0 right-0 h-1 rounded-t-3xl', extra.accent)} />

            <div className={'mb-4 text-4xl'}>{extra.emoji}</div>
            <h3 className={'mb-2 text-lg font-bold text-white'}>{extra.title}</h3>
            <p className={'mb-5 text-sm leading-relaxed text-white/50'}>{extra.description}</p>
            <div className={'flex items-center justify-between'}>
              <span className={'text-base font-bold text-secondary'}>{extra.price}</span>
              <Link
                href={'/#contact'}
                className={'rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:bg-white/20 hover:text-white'}>
                {'Dodaj →'}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <WaveDivider fill={'#1c1917'} />
  </section>
);

export default memo(Extras);
