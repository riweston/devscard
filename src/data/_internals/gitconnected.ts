/*

This is a helper module to grab CV data from the gitconnected API and build a job data object.

*/

import type { Job } from '@/types/sections/experience-section.types';

const API_URL = 'https://gitconnected.com/v1/portfolio/richardwesten';

type CVData = {
    work: any[];
    education: any[];
    projects: any[];
    skills: any[];
    bio: string;
    profile: string;
};

interface JobFactory<J extends Job> {
    (company: string, role: string): Promise<J>;
}

async function getCVData(): Promise<CVData> {
    const response = await fetch(API_URL);
    return response.json();
}

const buildJobData = async (company: string, role: string): Promise<Job> => {
    const data = await getCVData();
    const job = data.work.find((job: any) => job.company === company && job.position === role);
    return {
        role: job.position,
        company: job.company,
        image: import(`@/assets/logos/${job.company.toLowerCase().replace(' ', '-')}-logo.jpg`),
        dates: [new Date(job.startDate), job.endDate ? new Date(job.endDate) : null],
        description: job.highlights.join('\n'),
        tagsList: {
            title: 'Technologies',
            tags: job.technologies.map((tech: string) => ({ name: tech })),
        },
        links: [
            job.website && { url: job.website, icon: 'fa-brands:link', label: 'Website' },
        ].filter(Boolean),
    };
}

/* const buildJobData(data: any, company: string, role: string): Job {
    const job = data.work.find((job: any) => job.company === company && job.position === role);
    return {
        role: job.position,
        company: job.company,
        image: import(`@/assets/logos/${job.company.toLowerCase().replace(' ', '-')}-logo.jpg`),
        dates: [new Date(job.startDate), job.endDate ? new Date(job.endDate) : null],
        description: job.highlights.join('\n'),
        tagsList: {
            title: 'Technologies',
            tags: job.technologies.map((tech: string) => ({ name: tech })),
        },
        links: [
            job.website && { url: job.website, icon: 'fa-brands:link', label: 'Website' },
        ].filter(Boolean),
    };
} */

export default buildJobData;
