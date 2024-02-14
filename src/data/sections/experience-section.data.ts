import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  azure,
  golang,
  kubernetes,
  terraform,
  windowsServer,
  vmware,
  activeDirectory,
  powershell,
  azureDevOps,
  python,
  gcp,
} from '../helpers/skills';


const experienceSectionData = {
  config: {
    title: 'Work Experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Principal Cloud Systems Developer',
      company: 'Cloudreach',
      image: import('@/assets/logos/cloudreach-logo.png'),
      dates: [new Date('2018-10'), null],
      description: 'Principal Cloud Systems Developer at Cloudreach, working with a variety of clients to deliver cloud native solutions. I am responsible for leading the technical delivery of projects, providing technical leadership and mentoring to the team, working with the sales team to provide technical pre-sales support and outlining a level of effort for the delivery of projects. Internally I work closely with the leadership team to support the growth of the business and the development of the engineering practice.',
      previousRoles: [
        {
          role: 'Regional Discipline Lead',
          dates: [new Date('2022-02'), new Date('2023-02')],
        },
        {
          role: 'Senior Cloud Systems Developer',
          dates: [new Date('2019-09'), new Date('2022-02')],
        },
        {
          role: 'Cloud Systems Developer',
          dates: [new Date('2018-10'), new Date('2019-04')],
        },
      ],
      tagsList: {
        title: 'Technologies',
        tags: [
          kubernetes({ name: 'AKS' }),
          azure(),
          gcp(),
          kubernetes({ name: 'GKE' }),
          golang(),
          python(),
          terraform(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/cloudreach' }),
        website({ url: 'https://www.cloudreach.com/' }),
      ],
    },
    {
      role: 'Infrastructure Engineer (Cloud & Automation)',
      company: 'TFL',
      image: import('@/assets/logos/tfl-logo.png'),
      dates: [new Date('2018-04'), new Date('2018-10')],
      description: 'In my role at TFL, I was responsible for supporting the cloud infrastructure and automation of the Azure platform. I was responsible for building CI/CD pipelines and process to build IaC environments using Azure DevOps, cost analysis and cloud resource consolidation using cloud governance and compliance tooling, and developed Azure native automation tools using DSC/Runbooks/Managed Service Catalogues.',
      tagsList: {
        title: 'Technologies',
        tags: [
          azure(),
          azureDevOps(),
          powershell(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/tfl' }),
        website({ url: 'https://tfl.gov.uk/' }),
      ],
    },
    {
      role: 'Windows Systems Administrator',
      company: 'Rackspace',
      image: import('@/assets/logos/rackspace-logo.png'),
      dates: [new Date('2015-03'), new Date('2018-04')],
      description: 'At Rackspace, I was a member of the Windows Systems Administration team in the enterprise support team. I was responsible for providing technical support for Windows Server typically hosted on VMware infrastructure. I also provided support for public cloud hosted on Openstack platform, health monitoring with SCOM and New Relic, and developed reusable Powershell functions for large scale execution across Rackspace managed services.',
      tagsList: {
        title: 'Technologies',
        tags: [
          activeDirectory(),
          powershell(),
          vmware(),
          windowsServer(),
        ],
      },
      links: [
        linkedin({ url: 'https://www.linkedin.com/company/rackspace' }),
        website({ url: 'https://www.rackspace.com/' }),
      ],
    }
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
