import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'BSc Computer Games Design',
      institution: 'Staffordshire University',
      image: import('@/assets/logos/staffs-logo.png'),
      dates: [new Date('2006.10'), new Date('2010.07')],
      description: 'Bachelor of Science with Honours in Computer Games Design.',
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
