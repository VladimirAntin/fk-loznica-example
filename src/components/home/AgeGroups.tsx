'use client';
import {memo} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import WaveDivider from '@/components/WaveDivider';

type AgeGroup = {
  emoji: string;
  badge: string;
  title: string;
  ageRange: string;
  description: string;
  features: string[];
  image: string;
  gradient: string;
  border: string;
  badgeColor: string;
  btnColor: string;
};

const GROUPS: AgeGroup[] = [
  {
    emoji: '🌱',
    badge: 'Mlađe grupe',
    title: 'Mlađe grupe',
    ageRange: 'Uzrast 5–8 godina',
    description:
      'Najmlađi fudbaleri uče kroz igru i smejalice! Koordinacija, motorika i ljubav prema lopti — bez pritiska, samo zabava i prijatne uspomene.',
    features: ['U7 — Pionirska škola', 'Fudbal 3v3 i 5v5', 'Igra i zabava', 'Prilagođen tempo'],
    image: 'https://images.pexels.com/photos/8941577/pexels-photo-8941577.jpeg',
    gradient: 'from-emerald-400 to-green-500',
    border: 'border-emerald-200',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    btnColor: 'bg-emerald-500 hover:bg-emerald-600',
  },
  {
    emoji: '⚡',
    badge: 'Srednje grupe',
    title: 'Srednje grupe',
    ageRange: 'Uzrast 8–11 godina',
    description:
      'Pravo vreme za tehničke veštine! Dribling, dodavanje, fudbal 7 na 7 i prve taktičke zamisli — energija i napredak u svakom treningu.',
    features: ['U9 & U11 uzrast', 'Tehnika i dribling', 'Fudbal 5v5 i 7v7', 'Timski rad'],
    image: 'https://images.pexels.com/photos/10347875/pexels-photo-10347875.jpeg',
    gradient: 'from-amber-400 to-orange-500',
    border: 'border-amber-200',
    badgeColor: 'bg-amber-100 text-amber-700',
    btnColor: 'bg-amber-500 hover:bg-amber-600',
  },
  {
    emoji: '🏆',
    badge: 'Starije grupe',
    title: 'Starije grupe',
    ageRange: 'Uzrast 11–14 godina',
    description:
      'Ozbiljno takmičenje, napredna taktika i pun fudbal 11 na 11. Za one koji sanjaju dres profesionalca — treneri koji veruju u svaki talenat.',
    features: ['U13 Kadeti', 'Taktika & fizika', 'Fudbal 11v11', 'Turniri i utakmice'],
    image: 'https://images.pexels.com/photos/10347862/pexels-photo-10347862.jpeg',
    gradient: 'from-sky-400 to-blue-600',
    border: 'border-sky-200',
    badgeColor: 'bg-sky-100 text-sky-700',
    btnColor: 'bg-sky-500 hover:bg-sky-600',
  },
];

const AgeGroups = () => (
  <section
    id={'grupe'}
    className={'relative bg-stone-50 pt-20 pb-40 lg:pt-28 lg:pb-52'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-12 text-center'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span
          className={
            'bg-primary/10 text-primary mb-3 inline-block rounded-full px-4 py-1.5 text-sm font-bold tracking-widest uppercase'
          }>
          {'Za sve uzraste'}
        </span>
        <h2 className={'mb-4 text-4xl font-extrabold text-stone-900 sm:text-5xl lg:text-6xl'}>
          {'Naše Grupe 🎯'}
        </h2>
        <p className={'mx-auto max-w-xl text-base text-stone-500'}>
          {
            'Svako dete je posebno — zato imamo prilagođen program za svaki uzrast. Pronađi grupu koja odgovara tvom detetu!'
          }
        </p>
      </motion.div>

      {/* Cards */}
      <div className={'grid grid-cols-1 gap-6 lg:grid-cols-3'}>
        {GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{opacity: 0, y: 32}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-40px'}}
            transition={{duration: 0.5, ease: 'easeOut', delay: i * 0.12}}
            className={`flex flex-col overflow-hidden rounded-3xl border-2 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl ${group.border}`}>
            {/* Image with gradient header */}
            <div className={'relative h-52 overflow-hidden'}>
              <img
                src={group.image}
                alt={group.title}
                loading={'lazy'}
                className={'h-full w-full object-cover'}
              />
              <div className={'absolute inset-0 bg-linear-to-t from-black/60 to-transparent'} />
              {/* Age badge */}
              <div className={'absolute top-4 left-4'}>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold shadow ${group.badgeColor}`}>
                  {group.ageRange}
                </span>
              </div>
              {/* Emoji */}
              <div className={'absolute right-4 bottom-4 text-4xl'}>{group.emoji}</div>
            </div>

            {/* Content */}
            <div className={'flex flex-1 flex-col p-6'}>
              {/* Title */}
              <h3 className={'mb-2 text-2xl font-extrabold text-stone-900'}>{group.title}</h3>
              <p className={'mb-5 text-sm leading-relaxed text-stone-500'}>{group.description}</p>

              {/* Feature list */}
              <ul className={'mb-6 flex-1 space-y-2'}>
                {group.features.map((f, fi) => (
                  <li
                    key={fi}
                    className={'flex items-center gap-3 text-sm text-stone-700'}>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full bg-linear-to-br ${group.gradient}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={'/#contact'}
                className={`block rounded-2xl py-3 text-center text-sm font-bold text-white shadow transition ${group.btnColor}`}>
                {'Upiši dete ⚽'}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    <WaveDivider fill={'#1c1917'} />
  </section>
);

export default memo(AgeGroups);
