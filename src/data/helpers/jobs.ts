import buildJobData from "@/data/_internals/gitconnected";

export const getJobs = async () => {
    const jobs = await Promise.all([
        buildJobData('GitConnected', 'Frontend Developer'),
        buildJobData('GitConnected', 'Backend Developer')
    ]);
    return jobs;
}

export default getJobs;
