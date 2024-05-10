import type { CertificatesSection } from '@/types/sections/certificates-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const certificatesSectionData = {
  config: {
    title: 'Certificates',
    slug: 'certificates',
    icon: 'healthicons:i-exam-multiple-choice',
    visible: true,
  },
  certificates: [
    {
      title: 'GCP',
      image: import('@/assets/logos/gcp-ca.png'),
      dates: [new Date('2024.01'), new Date('2026.01')],
      description: 'Professional Cloud Architect',
      links: [],
    },
    {
      title: 'GCP',
      image: import('@/assets/logos/gcp-cd.png'),
      dates: [new Date('2023.04'), new Date('2025.04')],
      description: 'Professional Cloud Developer',
      links: [],
    },
    {
      title: 'Linux Foundation',
      image: import('@/assets/logos/cka.png'),
      dates: [new Date('2022.10'), new Date('2025.10')],
      description: 'Certified Kubernetes Administrator',
      links: [],
    },
    {
      title: 'Linux Foundation',
      image: import('@/assets/logos/ckad.png'),
      dates: [new Date('2021.10'), new Date('2024.10')],
      description: 'Certified Kubernetes Application Developer',
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<CertificatesSection>;

export default certificatesSectionData;
