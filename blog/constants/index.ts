import {
	Contact2,
	FileCode2,
	FolderArchive,
	Home,
	ListCollapse,
} from 'lucide-react'

export const navLinks = [
	{ name: 'Home', route: '/', icon: Home },
	{ name: 'About', route: '/about', icon: ListCollapse },
	{ name: 'Blogs', route: '/blogs', icon: FileCode2 },
	{ name: 'Archive', route: '/blogs/archive', icon: FolderArchive },
	{ name: 'Contact', route: '/contact', icon: Contact2 },
]

export const popularCategories = [
	{ name: 'Front End', slug: 'front-end' },
	{ name: 'Back End', slug: 'back-end' },
	{ name: 'Full Stack', slug: 'full-stack' },
	{ name: "Sun'iy Intelekt", slug: 'artificial-intelligence' },
]

export const popularTags = [
	{ name: 'ReactJS', slug: 'react-js' },
	{ name: 'JavaScript', slug: 'java-script' },
	{ name: 'NodeJS', slug: 'node-js' },
	{ name: 'NextJS', slug: 'next-js' },
]

export const blogs = [
	{
		title: 'The AGI hype train is running out of steam',
		description:
			'While futurists and fundraisers used to make bullish predictions about artificial general intelligence, they’ve become quieter lately. Peter Thiel.',
		author: 'Husan',
		tags: ['Machine learning'],
		date: 'Dec 5, 2024',
		image: '/blogs/01.png',
	},
	{
		title: 'Creating an object that travels at 1% the speed of light?',
		description:
			'Light is fast. In fact, it is the fastest thing that exists, and a law of the universe is that nothing can move faster than light. Light travels.',
		author: 'Kamol',
		tags: ['Front End'],
		date: 'Jan 12, 2024',
		image: '/blogs/02.jpg',
	},
	{
		title: 'Everything you wanted to know about the metaverse',
		description:
			'In the wake of Facebook rebranding as Meta, reflecting its focus on the “metaverse”, Microsoft has now announced it, too, will launch into this.',
		author: 'Javohir',
		tags: ['Backend'],
		date: 'June 5, 2024',
		image: '/blogs/03.png',
	},
	{
		title:
			'How to hire a developer straight out of bootcamp — without getting burned',
		description:
			'There’s a worldwide talent shortage in software development, and nearly one-third of hiring managers have hired someone from a coding bootcamp to.',
		author: 'Aslan',
		tags: ['Full Stack'],
		date: 'Dec 12, 2024',
		image: '/blogs/04.png',
	},
]

export const authors = [
	{
		name: 'Yuji Itadori',
		image: '/author/itadori.jpg',
	},
	{
		name: 'Yuji Itadori',
		image: '/author/itadori.jpg',
	},
	{
		name: 'Yuji Itadori',
		image: '/author/itadori.jpg',
	},
]

