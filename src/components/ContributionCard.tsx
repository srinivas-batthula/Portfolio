'use client';
import Link from 'next/link';
import { BookMarked, Building } from 'lucide-react';
import { IoIosGitBranch } from 'react-icons/io';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { contributionsInterface } from '@/types';
import { Contributions } from '@/data';
import styles from '@/styles/Highlights.module.css';

const Icons = {
    externalLink: HiOutlineExternalLink,
    gitRepoIcon: BookMarked,
    gitBranch: IoIosGitBranch,
    gitOrgBuilding: Building,
};

const contributions = Contributions as contributionsInterface[];
contributions.sort((a, b) => {
    const [d1, m1, y1] = a.date.split('/').map(Number);
    const [d2, m2, y2] = b.date.split('/').map(Number);

    return new Date(y2, m2 - 1, d2).getTime() - new Date(y1, m1 - 1, d1).getTime();
});

export default function ContributionCard() {
    return (
        <div className="mx-auto flex justify-center flex-wrap gap-4 static">
            {contributions.map((contribution, id) => (
                <Link
                    href={contribution.link}
                    target="_blank"
                    key={id}
                    className={styles.contributionCard}
                >
                    <div className="bg-background hover:bg-accent hover:text-accent-foreground border border-purple-500/20 rounded-2xl shadow-md hover:shadow-purple-500 transition duration-200 hover:-translate-y-1 transform">
                        <Icons.externalLink
                            size={35}
                            style={{ boxShadow: '0 0 15px rgb(231, 110, 231)' }}
                            className="absolute bottom-2 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground"
                        />
                        <div className="flex flex-col justify-between rounded-md p-4">
                            <div className="flex flex-row justify-between">
                                <h3 className="font-bold flex space-x-2 items-center">
                                    <Icons.gitRepoIcon
                                        size={20}
                                        style={{
                                            boxShadow: '0 0 15px rgb(128, 128, 128)',
                                            borderRadius: '5px',
                                        }}
                                    />
                                    <span>{contribution.repo}</span>
                                </h3>
                                <h3 className="flex flex-column gap-1 items-center">
                                    <Icons.gitBranch size={22} />
                                    <span
                                        style={{
                                            fontSize: '0.8rem',
                                            color: 'rgba(215, 215, 215, 0.75)',
                                        }}
                                    >
                                        {contribution.date}
                                    </span>
                                </h3>
                            </div>
                            <div className="text-sm p-3 flex flex-row">
                                {contribution.description}
                            </div>
                            <div className="text-sm text-muted-foreground flex space-x-2 items-center">
                                <Icons.gitOrgBuilding size={18} />
                                <span>{contribution.owner}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
