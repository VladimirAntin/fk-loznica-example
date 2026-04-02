'use client';
import {memo, useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {cn} from '@/utils/CN';
import LogoIcon from '@/icons/LogoIcon';

const homeLinks = [
	{
		href: '/',
		title: 'Početna',
		section: '',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<path d={'M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.5z'} />
				<path d={'M9 21V12h6v9'} />
			</svg>
		),
	},
	{
		href: '/#programs',
		title: 'Programi',
		section: 'programs',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<circle cx={'12'} cy={'12'} r={'9'} />
				<path d={'M12 3c0 0-3 4.5-3 9s3 9 3 9'} />
				<path d={'M12 3c0 0 3 4.5 3 9s-3 9-3 9'} />
				<path d={'M3.6 9h16.8M3.6 15h16.8'} />
			</svg>
		),
	},
	{
		href: '/#grupe',
		title: 'Grupe',
		section: 'grupe',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<path d={'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'} />
				<circle cx={'9'} cy={'7'} r={'4'} />
				<path d={'M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'} />
			</svg>
		),
	},
	{
		href: '/#contact',
		title: 'Kontakt',
		section: 'contact',
		icon: (
			<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
				<path d={'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z'} />
			</svg>
		),
	},
];

const linkCls = (isActive: boolean) =>
	cn(
		'flex flex-col items-center gap-1 w-full rounded-2xl px-1 py-2.5 transition-all duration-200',
		isActive
			? 'bg-primary/20 text-primary'
			: 'text-white/40 hover:text-white hover:bg-white/8',
	);

const Navigation = () => {
	const [activeSection, setActiveSection] = useState<string>('');
	const pathname = usePathname();
	const isHome = pathname === '/';

	useEffect(() => {
		if (!isHome) return;
		const sections = homeLinks
			.filter(l => l.section !== '')
			.map(l => ({id: l.section, el: document.getElementById(l.section)}))
			.filter(s => s.el !== null) as {id: string; el: HTMLElement}[];

		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY < 80) {
				setActiveSection('');
				return;
			}
			let current = '';
			for (const s of sections) {
				if (s.el.offsetTop - window.innerHeight * 0.45 <= scrollY) current = s.id;
			}
			setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll, {passive: true});
		handleScroll();
		return () => {
			window.removeEventListener('scroll', handleScroll);
			setActiveSection('');
		};
	}, [isHome]);

	const isLinkActive = (link: (typeof homeLinks)[0]) =>
		isHome && (link.section === '' ? activeSection === '' : activeSection === link.section);

	return (
		<>
			{/* ── Desktop: fixed left sidebar (w-20) ── */}
			<nav className={'hidden md:flex fixed left-0 top-0 h-screen w-20 z-50 flex-col items-center py-5 bg-green-950 shadow-xl'}>
				{/* Logo */}
				<Link
					href={'/'}
					aria-label={'FK Junior Loznica — početna'}
					className={'mb-6 flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-primary transition hover:bg-white/10'}>
					<LogoIcon width={28} height={28} className={'text-primary'} />
					<span className={'text-[9px] font-bold tracking-wide text-primary/70'}>{'FK JUNIOR'}</span>
				</Link>

				{/* Nav links — icon + label always visible */}
				<div className={'flex flex-col items-center gap-1 w-full px-2 flex-1'}>
					{homeLinks.map(link => (
						<Link key={link.href} href={link.href} className={linkCls(isLinkActive(link))}>
							{link.icon}
							<span className={'text-[9px] font-semibold leading-none tracking-wide'}>{link.title}</span>
						</Link>
					))}
				</div>

				{/* Upiši se CTA at bottom */}
				<div className={'w-full px-2'}>
					<Link
						href={'/#contact'}
						className={'flex flex-col items-center gap-1 w-full rounded-2xl bg-primary/20 px-1 py-2.5 text-primary transition-all duration-200 hover:bg-primary hover:text-white'}>
						<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
							<path d={'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2'} />
							<circle cx={'9'} cy={'7'} r={'4'} />
							<path d={'M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'} />
						</svg>
						<span className={'text-[9px] font-semibold leading-none tracking-wide'}>{'Upiši se'}</span>
					</Link>
				</div>
			</nav>

			{/* ── Mobile: bottom tab bar ── */}
			<nav className={'md:hidden fixed bottom-0 left-0 right-0 h-14 z-50 flex items-center justify-around bg-green-950 shadow-[0_-1px_20px_rgba(22,163,74,0.25)]'}>
				{homeLinks.map(link => (
					<Link
						key={link.href}
						href={link.href}
						className={cn(
							'flex flex-col items-center justify-center gap-0.5 px-2 py-1 transition-all duration-200',
							isLinkActive(link) ? 'text-primary' : 'text-white/40 hover:text-white',
						)}>
						{link.icon}
						<span className={'text-[9px] font-semibold tracking-wide'}>{link.title}</span>
					</Link>
				))}
				<Link
					href={'/#contact'}
					className={'flex flex-col items-center justify-center gap-0.5 px-2 py-1 text-primary/80 transition hover:text-primary'}>
					<svg viewBox={'0 0 24 24'} fill={'none'} stroke={'currentColor'} strokeWidth={1.8} strokeLinecap={'round'} strokeLinejoin={'round'} className={'h-5 w-5'}>
						<path d={'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2'} />
						<circle cx={'9'} cy={'7'} r={'4'} />
						<path d={'M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75'} />
					</svg>
					<span className={'text-[9px] font-semibold tracking-wide'}>{'Upiši se'}</span>
				</Link>
			</nav>
		</>
	);
};

export default memo(Navigation);
