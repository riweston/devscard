import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  azure,
  bash,
  cue,
  chakraUi,
  cypress,
  eslint,
  firebase,
  flux,
  gcp,
  githubActions,
  golang,
  kubernetes,
  mongoDb,
  nestJs,
  nix,
  pnpm,
  postgreSql,
  prettier,
  python,
  react,
  sass,
  supabase,
  tailwindCss,
  terraform,
  typescript,
  cilium,
  prometheus,
  grafana,
  dataPipeline,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        azure({
          level: 4,
          description: `- AKS
          - GitOps
          - Azure DevOps
          - Azure Functions
          - SQL
          - AAD
          - DNS
          - Front Door`
        }),
        gcp({
          level: 4,
          description: `- GKE
          - CloudFunctions
          - CloudRun
          - Firestore
          - Pub/Sub
          - CloudLogging`
        }),
        terraform({
          level: 5,
          description: `Building robust, high quality modules aided by static code analysis and automated integration testing, maintained with tagged version control and dependency management tooling.

          As a personal project I have also developed a custom provider to understand the underlying engineering.`,
        }),
        githubActions({
          level: 5,
        }),
        bash({
          level: 4,
        }),
        golang({
          level: 3,
          description: 'Developed and maintained a number of microservices and CLI tools in Go and used to automate integration testing and deployment for terraform modules.'
        }),
        typescript({
          level: 2,
        }),
        python({
          level: 3,
        }),
        kubernetes({
          level: 4,
          description: `Developed and maintained a number of shared services and applications in Kubernetes (AKS & GKE) including;
          - Vault
          - Consul
          - Keycloak
          - Jenkins
          - Artifactory

          Built a self-service platform for developers to deploy their own clusters with batteries included using services such as;
          - cert-manager
          - external-dns
          - nginx-ingress`,
        }),
        flux({
          level: 3,
        }),
        prometheus({
          level: 2,
        }),
        grafana({
          level: 2,
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [
        nix(),
        cue(),
        cilium(),
        dataPipeline(),
      ],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:gb', name: 'English - Native' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
