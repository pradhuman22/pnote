import {
  BracesIcon,
  CloudIcon,
  GaugeIcon,
  LightbulbIcon,
  MonitorIcon,
  ServerIcon,
  ShieldIcon,
  WrenchIcon,
} from 'lucide-react';

export const navigationMenuItems = [
  { label: 'Home', url: '/' },
  { label: 'Notes', url: '/notes' },
  { label: 'Courses', url: '/courses' },
  { label: "Let's Talk", url: '/contact' },
];

export const trendingNote = {
  title: "Mastering Next.js 15: What's New and How to Leverage It",
  excerpt:
    'Discover the powerful new features in Next.js 15, including the latest improvements in App Router, server actions, and caching. Learn how to use them to build faster, scalable, and modern web apps.',
  publishedAt: '2025-06-18',
  category: 'Next.js',
  tags: ['nextjs', 'react', 'web development', 'mdx', 'app router'],
  readingTime: '7 min',
  thumbnail:
    'https://res.cloudinary.com/dq3hy0q5z/image/upload/c_thumb,w_200,g_face/v1750347794/notes/udsaajymmvkgvtgbeepa.jpg',
  banner:
    'https://res.cloudinary.com/dq3hy0q5z/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1750347794/notes/udsaajymmvkgvtgbeepa.jpg',
};

export const notes = [
  {
    title: "Mastering Next.js 15: What's New and How to Leverage It",
    excerpt:
      'Discover the powerful new features in Next.js 15, including the latest improvements in App Router, server actions, and caching.',
    publishedAt: '2025-06-18',
    category: 'Next.js',
    tags: ['nextjs', 'react', 'web development', 'mdx', 'app router'],
    readingTime: '7 min',
    thumbnail:
      'https://res.cloudinary.com/dq3hy0q5z/image/upload/c_thumb,w_200,g_face/v1750347794/notes/udsaajymmvkgvtgbeepa.jpg',
    banner:
      'https://res.cloudinary.com/dq3hy0q5z/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1750347794/notes/udsaajymmvkgvtgbeepa.jpg',
  },
  {
    title: 'Using MDX to Supercharge Your Blog',
    excerpt:
      'MDX brings the power of JSX into your markdown. Learn how to create interactive blog content using MDX in a Next.js app.',
    publishedAt: '2025-06-12',
    category: 'MDX',
    tags: ['mdx', 'markdown', 'nextjs', 'jsx'],
    readingTime: '5 min',
    thumbnail:
      'https://res.cloudinary.com/dq3hy0q5z/image/upload/c_thumb,w_200,g_face/v1750347794/notes/udsaajymmvkgvtgbeepa.jpg',
    banner:
      'https://res.cloudinary.com/dq3hy0q5z/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1750347794/notes/udsaajymmvkgvtgbeepa.jpg',
  },
];

export const categories = [
  {
    label: 'Basic Web Development',
    description: 'Foundational skills in HTML, CSS, and JavaScript for building modern websites.',
    icon: BracesIcon,
    tailwindStyle: 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900',
  },
  {
    label: 'Frontend Frameworks',
    description: 'Insights on React, Vue, Angular, and other tools for dynamic user interfaces.',
    icon: MonitorIcon,
    tailwindStyle: 'bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900',
  },
  {
    label: 'Backend & Database',
    description: 'Techniques for server-side logic, APIs, and database management.',
    icon: ServerIcon,
    tailwindStyle: 'bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-900',
  },
  {
    label: 'SEO Performance',
    description: 'Strategies to optimize websites for search engines and performance.',
    icon: GaugeIcon,
    tailwindStyle: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900',
  },
  {
    label: 'Best Practices & Security',
    description: 'Secure coding practices and standards for reliable web applications.',
    icon: ShieldIcon,
    tailwindStyle: 'bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900',
  },
  {
    label: 'DevOps & Deployment',
    description: 'CI/CD pipelines, cloud services, and deployment workflows.',
    icon: CloudIcon,
    tailwindStyle: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 hover:text-indigo-900',
  },
  {
    label: 'Software & Tools',
    description: 'Reviews and tutorials on essential web development tools and software.',
    icon: WrenchIcon,
    tailwindStyle: 'bg-teal-100 text-teal-800 hover:bg-teal-200 hover:text-teal-900',
  },
  {
    label: 'Other Tips',
    description: 'Productivity hacks and miscellaneous advice for web developers.',
    icon: LightbulbIcon,
    tailwindStyle: 'bg-orange-100 text-orange-800 hover:bg-orange-200 hover:text-orange-900',
  },
];
