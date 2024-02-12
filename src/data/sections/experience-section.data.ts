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
      dates: [new Date('2020-02'), null],
      description: `
        - Leading a team of 10 engineers to deliver a cloud-native platform for a major UK bank.
        - Designing and implementing a Kubernetes-based platform on Azure.
        - Developing and maintaining cloud-native applications.
        - Mentoring and supporting team members.
        - Leading the adoption of best practices and quality engineering.
        - Working with stakeholders to understand requirements and deliver solutions.
        - Supporting the sales team in pre-sales activities.
        - Working with the marketing team to create content.
      `,
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
      description: `
        - Built CI/CD pipelines and process to build IaC environments using Azure DevOps.
        - Cost analysis and cloud resource consolidation using cloud governance and compliance tooling.
        - Developed Azure native automation tools using DSC/Runbooks/Managed Service Catalogues
      `,
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
      description: `
        - Managed public cloud hosted on Openstack platform.
        - Dedicated private cloud support on VMware hosted infrastructure.
        - Enterprise support for Windows Server.
        - Health monitoring with SCOM and New Relic.
        - Developed high quality Powershell functions for large scale execution across Rackspace managed services.
      `,
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
