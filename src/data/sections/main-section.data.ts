import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Richard Weston',
  role: 'Principal Cloud Systems Developer',
  details: [
    { label: 'Phone', value: '+44 7738 276 354', url: 'tel:+44 7738 276 354' },
    { label: 'Email', value: 'mail@riweston.io', url: 'mailto:mail@riweston.io' },
    { label: 'From', value: 'London, UK' },
    { label: 'Salary range', value: '£115,000+' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+44 7738 276 354' },
    { label: 'Email', value: 'mail@riweston.io' },
    { label: 'LinkedIn', value: '/in/riweston', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/riweston', url: 'https://github.com' },
  ],
  description:
    'A Principal Cloud Systems Developer with over 10 years of experience in the IT industry. I have a strong background in developing and maintaining cloud-native applications, and I am passionate about cloud computing, DevOps culture and platform engineering. I am a strong advocate for automation and quality engineering practices, and as a technical leader, supporting and mentoring teams so that we all grow together.',
  tags: [
    { name: 'Open to opportunities' },
    { name: 'Remote' },
    { name: 'Full-time' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Richard_Weston.pdf',
  },
  links: [
    github({ url: 'https://github.com/riweston' }),
    linkedin({ url: 'https://linkedin.com/in/riweston' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
