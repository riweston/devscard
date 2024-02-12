import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});




export const azure = createSkillFactory({
  name: 'Azure',
  icon: 'simple-icons:microsoftazure',
  iconColor: '#0089D6',
  url: 'https://azure.microsoft.com/',
});

export const bash = createSkillFactory({
  name: 'Bash',
  icon: 'mdi:bash',
  iconColor: '#4EAA25',
  url: 'https://www.gnu.org/software/bash/',
});

export const cilium = createSkillFactory({
  name: 'Cilium',
  icon: 'simple-icons:cilium',
  iconColor: '#00ADD8',
  url: 'https://cilium.io/',
});

export const cue = createSkillFactory({
  name: 'CUE',
  icon: 'simple-icons:cncf',
  iconColor: '#5884B8',
  url: 'https://cuelang.org/',
});

export const dataPipeline = createSkillFactory({
  name: 'Data Pipelines',
  icon: 'simple-icons:apachekafka',
  iconColor: '#231F20',
  url: 'https://kafka.apache.org/',
});

export const gcp = createSkillFactory({
  name: 'Google Cloud',
  icon: 'logos:google-cloud',
  iconColor: '#4285F4',
  url: 'https://cloud.google.com/',
});

export const githubActions = createSkillFactory({
  name: 'GitHub Actions',
  icon: 'simple-icons:githubactions',
  iconColor: '#2088FF',
  url: 'https://github.com',
});

export const golang = createSkillFactory({
  name: 'Go',
  icon: 'simple-icons:go',
  iconColor: '#00ADD8',
  url: 'https://golang.org/',
});

export const grafana = createSkillFactory({
  name: 'Grafana',
  icon: 'simple-icons:grafana',
  iconColor: '#F46800',
  url: 'https://grafana.com/',
});

export const flux = createSkillFactory({
  name: 'Flux',
  icon: 'simple-icons:flux',
  iconColor: '#00ADD8',
  url: 'https://fluxcd.io/',
});

export const createKubernetesSkill = (flavor: string) => createSkillFactory({
  name: `Kubernetes (${flavor})`,
  icon: 'simple-icons:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io/',
});

// Usage:
export const kubernetes = createKubernetesSkill('FlavorName');

export const nix = createSkillFactory({
  name: 'Nix',
  icon: 'simple-icons:nixos',
  iconColor: '#5277C3',
  url: 'https://nixos.org/',
});

export const prometheus = createSkillFactory({
  name: 'Prometheus',
  icon: 'simple-icons:prometheus',
  iconColor: '#E6522C',
  url: 'https://prometheus.io/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const terraform = createSkillFactory({
  name: 'Terraform',
  icon: 'simple-icons:terraform',
  iconColor: '#623CE4',
  url: 'https://www.terraform.io/',
});

export const cloudFunctions = createSkillFactory({
  name: 'Cloud Functions',
  icon: 'logos:google-cloud-functions',
  iconColor: '#4285F4',
  url: 'https://cloud.google.com/functions',
});

export const cloudRun = createSkillFactory({
  name: 'Cloud Run',
  icon: 'logos:google-cloud-run',
  iconColor: '#4285F4',
  url: 'https://cloud.google.com/run',
});

export const pubSub = createSkillFactory({
  name: 'Pub/Sub',
  icon: 'simple-icons:googlepubsub',
  iconColor: '#4285F4',
  url: 'https://cloud.google.com/pubsub',
});

export const gitLab = createSkillFactory({
  name: 'GitLab',
  icon: 'simple-icons:gitlab',
  iconColor: '#FCA326',
  url: 'https://gitlab.com/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const helm = createSkillFactory({
  name: 'Helm',
  icon: 'simple-icons:helm',
  iconColor: '#0F1689',
  url: 'https://helm.sh/',
});

export const consul = createSkillFactory({
  name: 'Consul',
  icon: 'simple-icons:consul',
  iconColor: '#F24C3D',
  url: 'https://www.consul.io/',
});

// vault
export const vault = createSkillFactory({
  name: 'Vault',
  icon: 'simple-icons:vault',
  iconColor: '#000000',
  url: 'https://www.vaultproject.io/',
});

// keycloak
export const keycloak = createSkillFactory({
  name: 'Keycloak',
  icon: 'mdi:key',
  iconColor: '#FFD700',
  url: 'https://www.keycloak.org/',
});

// jenkins
export const jenkins = createSkillFactory({
  name: 'Jenkins',
  icon: 'vscode-icons:file-type-jenkins',
  iconColor: '#D24939',
  url: 'https://www.jenkins.io/',
});

// artifactory
export const artifactory = createSkillFactory({
  name: 'Artifactory',
  icon: 'logos:jfrog',
  iconColor: '#000000',
  url: 'https://jfrog.com/artifactory/',
});

// nginx-ingress
export const ingressNginx = createSkillFactory({
  name: 'Ingress Nginx',
  icon: 'simple-icons:nginx',
  iconColor: '#009639',
  url: 'https://kubernetes.github.io/ingress-nginx/',
});

// kustomize
export const kustomize = createSkillFactory({
  name: 'Kustomize',
  icon: 'simple-icons:yaml',
  iconColor: '#5578FF',
  url: 'https://kustomize.io/',
});

// istio
export const istio = createSkillFactory({
  name: 'Istio',
  icon: 'simple-icons:istio',
  iconColor: '#00ADD8',
  url: 'https://istio.io/',
});

// inspec
export const inspec = createSkillFactory({
  name: 'Inspec',
  icon: 'simple-icons:chef',
  iconColor: '#F24C3D',
  url: 'https://www.inspec.io/',
});

// Windows Server
export const windowsServer = createSkillFactory({
  name: 'Windows Server',
  icon: 'simple-icons:windows11',
  iconColor: '#0078D6',
  url: 'https://www.microsoft.com/en-us/cloud-platform/windows-server',
});

// VMWare
export const vmware = createSkillFactory({
  name: 'VMware',
  icon: 'carbon:logo-vmware',
  iconColor: '#607078',
  url: 'https://www.vmware.com/',
});

// Active Directory
export const activeDirectory = createSkillFactory({
  name: 'Active Directory',
  icon: 'mdi:person-box',
  iconColor: '#0078D6',
  url: 'https://www.microsoft.com/en-us/cloud-platform/active-directory',
});

// PowerShell
export const powershell = createSkillFactory({
  name: 'PowerShell',
  icon: 'simple-icons:powershell',
  iconColor: '#5391FE',
  url: 'https://docs.microsoft.com/en-us/powershell/',
});

// Azure DevOps
export const azureDevOps = createSkillFactory({
  name: 'Azure DevOps',
  icon: 'simple-icons:azuredevops',
  iconColor: '#0078D7',
  url: 'https://azure.microsoft.com/en-us/services/devops/',
});
