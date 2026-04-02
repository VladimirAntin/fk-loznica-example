'use client';
import {memo, Suspense} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@/icons/SendIcon';
import Link from 'next/link';
import {contactItems} from '@/components/data/contact';
import Icon from '@/icons/Icon';
import {motion} from 'framer-motion';

type EnrollmentData = {
  childName: string;
  parentName: string;
  phone: string;
  ageGroup: string;
  message: string;
};

const AGE_GROUPS = [
  'Mlađe grupe — uzrast 5–8 god.',
  'Srednje grupe — uzrast 8–11 god.',
  'Starije grupe — uzrast 11–14 god.',
  'Letnji kamp',
  'Nisam siguran/na — pitam za informacije',
];

const fieldCls = 'w-full rounded-xl border-2 border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-primary focus:bg-white';
const labelCls = 'mb-1.5 block text-xs font-bold tracking-widest text-stone-500 uppercase';

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    formState: {isSubmitted, errors},
  } = useForm<EnrollmentData>({
    defaultValues: {childName: '', parentName: '', phone: '', ageGroup: '', message: ''},
  });

  const onSubmit = (data: EnrollmentData) => {
    console.log('FK Junior Loznica upis:', data);
  };

  if (isSubmitted) {
    return (
      <div className={'flex flex-col items-center justify-center py-16 text-center'}>
        <div className={'mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/20'}>
          <span className={'text-4xl'}>{'⚽'}</span>
        </div>
        <h4 className={'mb-2 text-2xl font-extrabold text-stone-900'}>{'Zahtev primljen!'}</h4>
        <p className={'text-stone-500'}>{'Kontaktiraćemo vas u roku od 24h sa svim detaljima o upisu.'}</p>
      </div>
    );
  }

  return (
    <form className={'space-y-5'} onSubmit={handleSubmit(onSubmit)}>

      {/* Ime deteta + Ime roditelja */}
      <div className={'grid gap-4 sm:grid-cols-2'}>
        <Controller
          name={'childName'}
          control={control}
          rules={{required: 'Unesite ime deteta'}}
          render={({field}) => (
            <div>
              <label className={labelCls}>{'Ime deteta *'}</label>
              <input
                {...field}
                placeholder={'npr. Marko'}
                className={fieldCls + (errors.childName ? ' border-red-400 bg-red-50' : '')}
              />
              {errors.childName && (
                <p className={'mt-1 text-xs text-red-500'}>{errors.childName.message}</p>
              )}
            </div>
          )}
        />
        <Controller
          name={'parentName'}
          control={control}
          rules={{required: 'Unesite ime roditelja'}}
          render={({field}) => (
            <div>
              <label className={labelCls}>{'Ime roditelja *'}</label>
              <input
                {...field}
                placeholder={'npr. Nikola'}
                className={fieldCls + (errors.parentName ? ' border-red-400 bg-red-50' : '')}
              />
              {errors.parentName && (
                <p className={'mt-1 text-xs text-red-500'}>{errors.parentName.message}</p>
              )}
            </div>
          )}
        />
      </div>

      {/* Telefon */}
      <Controller
        name={'phone'}
        control={control}
        rules={{required: 'Unesite broj telefona'}}
        render={({field}) => (
          <div>
            <label className={labelCls}>{'Broj telefona *'}</label>
            <input
              {...field}
              type={'tel'}
              placeholder={'npr. 064 123 4567'}
              className={fieldCls + (errors.phone ? ' border-red-400 bg-red-50' : '')}
            />
            {errors.phone && (
              <p className={'mt-1 text-xs text-red-500'}>{errors.phone.message}</p>
            )}
          </div>
        )}
      />

      {/* Uzrasna grupa */}
      <Controller
        name={'ageGroup'}
        control={control}
        rules={{required: 'Izaberite uzrasnu grupu'}}
        render={({field}) => (
          <div>
            <label className={labelCls}>{'Uzrasna grupa *'}</label>
            <select
              {...field}
              className={fieldCls + ' cursor-pointer' + (errors.ageGroup ? ' border-red-400 bg-red-50' : '')}>
              <option value={''} disabled>{'— Izaberite grupu —'}</option>
              {AGE_GROUPS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            {errors.ageGroup && (
              <p className={'mt-1 text-xs text-red-500'}>{errors.ageGroup.message}</p>
            )}
          </div>
        )}
      />

      {/* Napomena */}
      <Controller
        name={'message'}
        control={control}
        render={({field}) => (
          <div>
            <label className={labelCls}>{'Napomena (opciono)'}</label>
            <textarea
              {...field}
              rows={3}
              placeholder={'Dodatne informacije, pitanja...'}
              className={fieldCls + ' resize-none'}
            />
          </div>
        )}
      />

      <button
        type={'submit'}
        className={'group flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-sm font-extrabold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark'}>
        {'⚽ Pošaljite Zahtev za Upis'}
        <SendIcon className={'transition group-hover:translate-x-1'} height={16} width={16} />
      </button>
    </form>
  );
};

const Contact = () => (
  <section id={'contact'} className={'bg-stone-900 py-24'}>
    <div className={'mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'}>
      {/* Header */}
      <motion.div
        className={'mb-12 text-center'}
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-50px'}}
        transition={{duration: 0.5, ease: 'easeOut'}}>
        <span className={'mb-3 inline-block text-sm font-semibold tracking-widest text-green-400 uppercase'}>
          {'Kontakt & Upis'}
        </span>
        <h2 className={'mb-3 text-4xl text-white sm:text-5xl'}>{'Upiši Dete'}</h2>
        <p className={'mx-auto max-w-xl text-white/50'}>
          {'Ispunite formu i kontaktiraćemo vas u roku od 24h sa svim detaljima i potvrdom upisa'}
        </p>
      </motion.div>

      <motion.div
        initial={{opacity: 0, y: 28}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, margin: '-40px'}}
        transition={{duration: 0.6, delay: 0.1, ease: 'easeOut'}}
        className={'overflow-hidden rounded-3xl lg:grid lg:grid-cols-5'}>

        {/* Left decorative panel */}
        <div className={'relative hidden overflow-hidden bg-primary lg:col-span-2 lg:flex lg:flex-col lg:justify-between lg:p-10'}>
          <div className={'absolute inset-0 opacity-10'}
            style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
          <div className={'relative'}>
            <div className={'mb-8 text-4xl'}>{'⚽'}</div>
            <h3 className={'mb-3 text-2xl font-light text-white'}>{'Direktan kontakt'}</h3>
            <p className={'text-sm leading-relaxed text-white/65'}>
              {'Dostupni smo utorkom, četvrtkom i subotom. Slobodno nam se javite — sa zadovoljstvom ćemo odgovoriti na sva vaša pitanja o upisu.'}
            </p>
          </div>
          <div className={'relative space-y-4'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-3 text-white/80 transition hover:text-white'}>
                <span className={'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10'}>
                  <Icon name={item.icon} height={15} width={15} className={'fill-current'} />
                </span>
                <div>
                  <div className={'text-[10px] font-semibold tracking-wider text-white/40 uppercase'}>{item.title}</div>
                  <div className={'text-sm font-medium'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className={'bg-white lg:col-span-3'}>
          {/* Mobile contact info */}
          <div className={'grid grid-cols-2 gap-3 p-6 lg:hidden'}>
            {contactItems.map((item, i) => (
              <Link
                key={i}
                href={item.href || '#'}
                className={'flex items-center gap-2 rounded-2xl border border-stone-100 bg-stone-50 p-3'}>
                <span className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10'}>
                  <Icon name={item.icon} height={14} width={14} className={'fill-current text-primary'} />
                </span>
                <div className={'min-w-0'}>
                  <div className={'text-[10px] font-semibold tracking-wider text-gray-400 uppercase'}>{item.title}</div>
                  <div className={'truncate text-xs font-semibold text-gray-700'}>{item.value}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Form */}
          <div className={'p-8 lg:p-10'}>
            <Suspense fallback={<div className={'h-64 animate-pulse rounded-2xl bg-stone-100'} />}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Map */}
          <div className={'h-56 w-full overflow-hidden border-t border-stone-100 lg:h-64'}>
            <iframe
              title={'FK Junior Loznica lokacija'}
              src={'https://www.openstreetmap.org/export/embed.html?bbox=19.1%2C44.4%2C19.3%2C44.6&layer=mapnik&marker=44.535%2C19.225'}
              className={'h-full w-full border-0'}
              loading={'lazy'}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default memo(Contact);
