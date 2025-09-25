'use client';

import { create } from 'zustand';
import { Project } from '@/types';
import { saveToIndexedDB, getFromIndexedDB } from '@/utils';

const GITHUB_USER: string = 'srinivas-batthula';

interface ProjectsStore {
    projects: Project[] | null;
    fetchProjects: () => Promise<void>;
}

export const useProjectsDataStore = create<ProjectsStore>(set => ({
    projects: null,

    fetchProjects: async () => {
        // If offline → use IndexedDB
        if (typeof navigator !== 'undefined' && !navigator.onLine) {
            const cached = await getFromIndexedDB('projects');
            if (cached.success) {
                set({ projects: cached.data ?? null });
            }
            return;
        }

        // Online: fetch from live github...
        try {
            const response = await fetch(
                // Fetch all repo's of `srinivas-batthula`...
                `https://api.github.com/users/${GITHUB_USER}/repos`
            );
            const repos: any[] = await response.json();

            repos.sort(
                // Sort repo's by creation date (descending / Newest-1st)...
                (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
            );

            let i = 0;
            const promises = repos.map(async repo => {
                // Fetch `metadata.json` files from each of the repo's...
                try {
                    const res = await fetch(
                        `https://raw.githubusercontent.com/${GITHUB_USER}/${repo.name}/main/metadata.json`
                    );
                    if (res.status === 200) {
                        console.log(repo.name + '  -Success!');
                        const metadata = await res.json();
                        metadata.isLiveLink = metadata.isLiveLink === 'true' ? true : false;
                        const item = { ...metadata, id: i++ };
                        return item as Project;
                    }
                } catch {
                    console.log(`${repo.name} has no metadata.json`);
                }
            });

            const data = (await Promise.all(promises)).filter(
                // Wait for all fetch requests to finish...
                (p): p is Project => p !== undefined // Filter out any undefined results (in case of fetch errors)...
            );

            set({ projects: data });
            saveToIndexedDB(data, 'projects'); // Save to IndexedDB (Offline Access)...
        } catch (error) {
            console.error('Error while fetching projects:', error);
            const cached = await getFromIndexedDB('projects');
            if (cached.success) {
                set({ projects: cached.data ?? null });
            }
        }
    },
}));
