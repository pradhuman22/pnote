import {
  BracesIcon,
  CloudIcon,
  GaugeIcon,
  GithubIcon,
  InstagramIcon,
  LightbulbIcon,
  MonitorIcon,
  ServerIcon,
  ShieldIcon,
  TwitterIcon,
  WrenchIcon,
  YoutubeIcon,
} from 'lucide-react';

export const navigationMenuItems = [
  { label: 'Home', url: '/' },
  { label: 'Notes', url: '/notes' },
  { label: 'Projects', url: '/projects' },
  { label: "Let's Talk", url: '/contact' },
];

export const categories = [
  {
    label: 'Web Development',
    description: 'Foundational skills in HTML, CSS, and JavaScript for building modern websites.',
    icon: BracesIcon,
    tailwindStyle:
      'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 dark:bg-blue-800 dark:text-blue-100 dark:hover:bg-blue-700 dark:hover:text-blue-50',
  },
  {
    label: 'Frontend Frameworks',
    description: 'Insights on React, Vue, Angular, and other tools for dynamic user interfaces.',
    icon: MonitorIcon,
    tailwindStyle:
      'bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900 dark:bg-green-800 dark:text-green-100 dark:hover:bg-green-700 dark:hover:text-green-50',
  },
  {
    label: 'Backend & Database',
    description: 'Techniques for server-side logic, APIs, and database management.',
    icon: ServerIcon,
    tailwindStyle:
      'bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-900 dark:bg-purple-800 dark:text-purple-100 dark:hover:bg-purple-700 dark:hover:text-purple-50',
  },
  {
    label: 'SEO Performance',
    description: 'Strategies to optimize websites for search engines and performance.',
    icon: GaugeIcon,
    tailwindStyle:
      'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900 dark:bg-yellow-800 dark:text-yellow-100 dark:hover:bg-yellow-700 dark:hover:text-yellow-50',
  },
  {
    label: 'Best Practices & Security',
    description: 'Secure coding practices and standards for reliable web applications.',
    icon: ShieldIcon,
    tailwindStyle:
      'bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-700 dark:hover:text-red-50',
  },
  {
    label: 'DevOps & Deployment',
    description: 'CI/CD pipelines, cloud services, and deployment workflows.',
    icon: CloudIcon,
    tailwindStyle:
      'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:text-indigo-900 dark:bg-indigo-800 dark:text-indigo-100 dark:hover:bg-indigo-700 dark:hover:text-indigo-50',
  },
  {
    label: 'Software & Tools',
    description: 'Reviews and tutorials on essential web development tools and software.',
    icon: WrenchIcon,
    tailwindStyle:
      'bg-teal-100 text-teal-800 hover:bg-teal-200 hover:text-teal-900 dark:bg-teal-800 dark:text-teal-100 dark:hover:bg-teal-700 dark:hover:text-teal-50',
  },
  {
    label: 'Other Tips',
    description: 'Productivity hacks and miscellaneous advice for web developers.',
    icon: LightbulbIcon,
    tailwindStyle:
      'bg-orange-100 text-orange-800 hover:bg-orange-200 hover:text-orange-900 dark:bg-orange-800 dark:text-orange-100 dark:hover:bg-orange-700 dark:hover:text-orange-50',
  },
];

export const tags = [
  'HTML',
  'CSS',
  'Responsive Design',
  'Tailwind CSS',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vue',
  'Svelte',
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL',
  'MongoDB',
  'REST APIs',
  'GraphQL',
  'Docker',
  'CI/CD',
  'GitHub Actions',
  'Vercel',
  'Netlify',
  'AWS',
];

export const quickLinks = [
  { label: 'Notes', url: '/notes' },
  { label: 'Courses', url: '/courses' },
  { label: 'Merch', url: '/merch' },
  { label: 'Privacy', url: '/privacy' },
];

export const socialLinks = [
  {
    icon: TwitterIcon,
    className: '',
    title: 'twitter',
    url: 'https://x.com/home',
  },
  {
    icon: InstagramIcon,
    title: 'instagram',
    className: '',
    url: 'https://www.instagram.com/shrestha.pradhuman/',
  },
  {
    icon: YoutubeIcon,
    title: 'youtube',
    className: '',
    url: 'https://www.youtube.com',
  },
  {
    icon: GithubIcon,
    title: 'github',
    className: '',
    url: 'https://github.com/shresthapradhuman',
  },
];
