'use client';
import {memo, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {cn} from '@utils/CN';
import WaveDivider from '@/components/WaveDivider';

type Slot = {
  time: string;
  activity: string;
  emoji: string;
  color: string;
  note?: string;
  isPause?: boolean;
};

type DayGroup = {
  id: string;
  label: string;
  accentColor: string;
  slots: Slot[];
};

const SCHEDULE: DayGroup[] = [
  {
    id: 'utorak',
    label: 'Utorak',
    accentColor: 'bg-primary text-white',
    slots: [
      {time: '16:00 – 17:00', activity: 'U7 — Pionirska škola', emoji: '⚽', color: 'bg-emerald-50 border-l-4 border-primary text-emerald-900', note: 'Uzrast 5–7 god.'},
      {time: '17:00 – 18:00', activity: 'U9 — Mlađi pioniri', emoji: '🏃', color: 'bg-sky-50 border-l-4 border-fun-blue text-sky-900', note: 'Uzrast 7–9 god.'},
      {time: '18:00 – 19:15', activity: 'U11 — Pioniri', emoji: '🎯', color: 'bg-amber-50 border-l-4 border-fun-yellow text-amber-900', note: 'Uzrast 9–11 god.'},
      {time: '19:15 – 20:30', activity: 'U13 — Kadeti', emoji: '🏆', color: 'bg-violet-50 border-l-4 border-violet-400 text-violet-900', note: 'Uzrast 11–13 god.'},
    ],
  },
  {
    id: 'cetvrtak',
    label: 'Četvrtak',
    accentColor: 'bg-fun-blue text-white',
    slots: [
      {time: '16:00 – 17:00', activity: 'U7 — Pionirska škola', emoji: '⚽', color: 'bg-emerald-50 border-l-4 border-primary text-emerald-900', note: 'Uzrast 5–7 god.'},
      {time: '17:00 – 18:00', activity: 'U9 — Mlađi pioniri', emoji: '🏃', color: 'bg-sky-50 border-l-4 border-fun-blue text-sky-900', note: 'Uzrast 7–9 god.'},
      {time: '18:00 – 19:15', activity: 'U11 — Pioniri', emoji: '🎯', color: 'bg-amber-50 border-l-4 border-fun-yellow text-amber-900', note: 'Uzrast 9–11 god.'},
      {time: '19:15 – 20:30', activity: 'U13 — Kadeti', emoji: '🏆', color: 'bg-violet-50 border-l-4 border-violet-400 text-violet-900', note: 'Uzrast 11–13 god.'},
    ],
  },
  {
    id: 'subota',
    label: 'Subota',
    accentColor: 'bg-secondary text-white',
    slots: [
      {time: '09:00 – 10:00', activity: 'U7 — Pionirska škola', emoji: '⚽', color: 'bg-emerald-50 border-l-4 border-primary text-emerald-900', note: 'Uzrast 5–7 god.'},
      {time: '10:00 – 11:15', activity: 'U9 — Mlađi pioniri', emoji: '🏃', color: 'bg-sky-50 border-l-4 border-fun-blue text-sky-900', note: 'Uzrast 7–9 god.'},
      {time: '11:15 – 12:30', activity: 'Turnir / Prijateljska utakmica', emoji: '🏆', color: 'bg-orange-50 border-l-4 border-fun-orange text-orange-900', note: 'U11 & U13'},
    ],
  },
];

const LEGEND = [
  {emoji: '⚽', label: 'U7 Pionirska škola', color: 'bg-primary'},
  {emoji: '🏃', label: 'U9 Mlađi pioniri', color: 'bg-fun-blue'},
  {emoji: '🎯', label: 'U11 Pioniri', color: 'bg-fun-yellow'},
  {emoji: '🏆', label: 'U13 Kadeti', color: 'bg-violet-400'},
  {emoji: '🥅', label: 'Turniri / Utakmice', color: 'bg-fun-orange'},
];

const Timetable = () => {
  const [activeDay, setActiveDay] = useState('utorak');
  const active = SCHEDULE.find(d => d.id === activeDay) ?? SCHEDULE[0];

  return (
    <section id={'timetable'} className={'relative bg-white pb-40 pt-20 lg:pb-52 lg:pt-28'}>
      <div className={'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'}>

        {/* Header */}
        <motion.div
          className={'mb-10 text-center'}
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-50px'}}
          transition={{duration: 0.5, ease: 'easeOut'}}>
          <span className={'mb-3 inline-block text-sm font-semibold tracking-widest text-primary uppercase'}>
            {'Raspored'}
          </span>
          <h2 className={'mb-3 text-4xl text-stone-900 sm:text-5xl'}>{'Termini Treninga'}</h2>
          <p className={'mx-auto max-w-lg text-sm text-stone-500'}>
            {'Treninzi se održavaju utorkom, četvrtkom i subotom. Svaka uzrasna grupa ima prilagođen termin.'}
          </p>
        </motion.div>

        {/* Legend */}
        <div className={'mb-8 flex flex-wrap items-center justify-center gap-3'}>
          {LEGEND.map(l => (
            <span key={l.label} className={'flex items-center gap-1.5 text-sm text-stone-600'}>
              <span className={cn('h-2.5 w-2.5 rounded-full', l.color)} />
              {l.emoji} {l.label}
            </span>
          ))}
        </div>

        {/* Day selector tabs */}
        <div className={'mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'}>
          {SCHEDULE.map(day => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={cn(
                'shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200',
                activeDay === day.id
                  ? cn(day.accentColor, 'shadow-md')
                  : 'border border-stone-200 bg-white text-stone-500 hover:border-stone-400 hover:text-stone-800',
              )}>
              {day.label}
            </button>
          ))}
        </div>

        {/* Schedule slots */}
        <AnimatePresence mode={'wait'}>
          <motion.div
            key={activeDay}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -6}}
            transition={{duration: 0.25, ease: 'easeOut'}}
            className={'space-y-3'}>
            {active.slots.map((slot, i) => (
              <motion.div
                key={i}
                initial={{opacity: 0, x: -12}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.25, delay: i * 0.06}}
                className={cn('flex items-center gap-4 rounded-2xl p-4 text-sm', slot.color)}>
                <span className={'text-2xl'}>{slot.emoji}</span>
                <div className={'min-w-0 flex-1'}>
                  <div className={'font-semibold'}>{slot.activity}</div>
                  {slot.note && (
                    <div className={'mt-0.5 text-xs opacity-65'}>{slot.note}</div>
                  )}
                </div>
                <span className={'shrink-0 rounded-full bg-white/60 px-3 py-1 font-mono text-xs font-bold backdrop-blur-sm'}>
                  {slot.time}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Info note */}
        <motion.p
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{delay: 0.3}}
          className={'mt-8 text-center text-xs text-stone-400'}>
          {'* Raspored je podložan promenama tokom turnirske sezone. Pratite nas na Instagramu za aktuelne informacije.'}
        </motion.p>
      </div>
      <WaveDivider fill={'#f8fafc'} inverted />
    </section>
  );
};

export default memo(Timetable);
