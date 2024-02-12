import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  artifactory,
  chakraUi,
  cloudFunctions,

  cloudRun,
  consul,
  docker,
  eslint,
  firebase,
  flux,
  gcp,
  gitLab,
  githubActions,
  golang,
  helm,
  jenkins,
  jest,
  keycloak,
  kubernetes,
  nestJs,
  nextJs,
  ingressNginx,
  nx,
  pnpm,
  postgreSql,
  prettier,
  pubSub,
  react,
  sass,
  tailwindCss,
  terraform,
  typescript,
  vault,
  kustomize,
  inspec,
  istio,
  azure,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Customer Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Self-Service Landing Zones',
      description: 'A self-service platform for creating and lifecycling GCP landing zones. In my role I put together an initial design and proposal for a platform that helps teams to easily provision a GCP environment so that they can focus on delivering value to the organisation. I also led the development of the platform, which was built using a combination of cloud-native technologies delivered by GCP, Github Actions and Terraform.',
      image: import('@/assets/logos/dft-logo.jpg'),
      dates: [new Date('2023-01'), null],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Lead Developer', 'Cloud Architect'] },
        { label: 'Company', value: 'Department for Transport' },
      ],
      tagsList: {
        title: 'Technologies',
        tags: [
          cloudFunctions(),
          cloudRun(),
          gcp(),
          githubActions(),
          kubernetes({ name: 'GKE' }),
          golang(),
          pubSub(),
          terraform(),
        ],
      },
      links: [],
    },
    {
      name: 'GitOps Platform',
      description: 'A well architected pattern for deploying and managing AKS clusters using GitOps. In my role I was responsible for the initial technical pre-sales and discovery which led to the design and implementation of a Kubernetes platform on Azure with a view to shifting the organisation to a GitOps model. Additional features included canary deployments, automated testing and ephemeral environments to support UAT and QA.',
      image: import('@/assets/logos/ubs-logo.png'),
      dates: [new Date('2021-11'), new Date('2022-12')],
      details: [
        { label: 'Team size', value: '8 people' },
        { label: 'My role', value: ['Lead Developer'] },
        { label: 'Company', value: 'UBS' },
      ],
      tagsList: {
        title: 'Technologies',
        tags: [
          kubernetes({ name: 'AKS' }),
          azure(),
          docker(),
          flux(),
          gitLab(),
          golang(),
          helm(),
          kustomize(),
        ],
      },
      links: [],
    },
    {
      name: 'Shared Services Platform',
      description: 'A Kubernetes platform for shared services and applications. In my role I was responsible for planning and implementing a Kubernetes platform on Azure to host shared services and required to support a new SaaS product from the development team. These features included Vault, Consul, Keycloak, Jenkins and Artifactory. A large degree of focus was placed on standardisation and automation to ensure the platform was easy to operate and maintain. To achieve this I designed a number of desployment patterns to facilitate workload identity, automated DNS and global load balancing.',
      image: import('@/assets/logos/temenos-logo.jpeg'),
      dates: [new Date('2020-10'), new Date('2021-11')],
      details: [
        { label: 'Team size', value: '5 people' },
        { label: 'My role', value: ['Lead Developer'] },
        { label: 'Company', value: 'Temenos' },
      ],
      tagsList: {
        title: 'Technologies',
        tags: [
          kubernetes({ name: 'AKS' }),
          artifactory(),
          azure(),
          consul(),
          golang(),
          helm(),
          ingressNginx(),
          jenkins(),
          keycloak(),
          terraform(),
          vault(),
        ],
      },
      links: [],
    },
    {
      name: 'Service Mesh PoC',
      description: 'A proof of concept for a service mesh on Kubernetes. In my role I played a supporting role during the technical pre-sales and discovery phase to produce supporting documentation and a high-level design for a highly technical client. After the completion of the discovery phase I was responsible for the delivery of the chosen service mesh, Istio, and the development of a deployment pattern that could be used to evaluate the viability of Istio as a global load balancing solution.',
      image: import('@/assets/logos/global-payments-logo.png'),
      dates: [new Date('2020-06'), new Date('2020-09')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: ['Senior Developer'] },
        { label: 'Company', value: 'Global Payments' },
      ],
      tagsList: {
        title: 'Technologies',
        tags: [
          kubernetes({ name: 'AKS' }),
          azure(),
          helm(),
          inspec(),
          istio(),
          jenkins(),
          vault(),
        ],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
