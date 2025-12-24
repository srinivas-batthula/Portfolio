// components/SkillsSection.tsx
import React, { useState } from 'react';
import styles from '@/styles/About.module.css';

// JSON-Data imports
import { skills, tools, SKILL_CATEGORIES, TOOL_CATEGORIES } from '@/data';
import { SkillOrToolItem } from '@/types';
import { filterByCategory } from '@/utils';

// Assert imported JSON matches our type
const skillsData = skills as SkillOrToolItem[];
const toolsData = tools as SkillOrToolItem[];

const SkillsSection: React.FC = () => {
    const [selectedSkillCategory, setSelectedSkillCategory] =
        useState<(typeof SKILL_CATEGORIES)[number]>('All');
    const [selectedToolCategory, setSelectedToolCategory] =
        useState<(typeof TOOL_CATEGORIES)[number]>('All');

    // Filtered skills
    const filteredSkills = filterByCategory(skillsData, selectedSkillCategory);

    // Filtered tools
    const filteredTools = filterByCategory(toolsData, selectedToolCategory);

    return (
        <div className={styles.skills}>
            {/* Skills Section */}
            <div className={styles.main2}>
                <div className={styles.head} style={{ marginBottom: '2rem' }}>
                    Professional{' '}
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>
                        Skillset
                    </span>
                    <p style={{ color: 'rgba(255, 295, 255, 0.488)', fontSize: '1.3rem' }}>
                        A comprehensive overview of my technical Skillset
                    </p>
                </div>

                {/* Skills Filter */}
                <div className="w-96 lg:w-full overflow-x-auto scrollbarHide px-4 mb-4 scroll-snap-x">
                    <div className="inline-flex gap-1.5 whitespace-nowrap scroll-snap-start">
                        {SKILL_CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedSkillCategory(category)}
                                className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-300
            ${
                selectedSkillCategory === category
                    ? 'bg-purple-500 text-white border-purple-600 shadow'
                    : 'bg-transparent text-white border-gray-500 hover:border-purple-500 hover:text-purple-400'
            }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills display */}
                <div className={styles.flex1}>
                    {filteredSkills.map((item, index) => (
                        <div key={index} title={item.name} className={styles.flex2}>
                            <span className={styles.i}>
                                {/* <i className={item.icon}></i> */}
                                {
                                    item.icon // All Icons are added from `https://icon-sets.iconify.design/`...
                                }
                            </span>
                            <span className={styles.label}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools Section */}
            <div className={styles.main2}>
                <div className={styles.head}>
                    <span style={{ color: 'rgb(231, 110, 231)', fontWeight: 'bold' }}>Tools</span> I
                    use
                    <p style={{ color: 'rgba(255, 295, 255, 0.488)', fontSize: '1.3rem' }}>
                        Top tools I use for Productivity
                    </p>
                </div>

                {/* Tool Filter */}
                <div className="w-96 lg:w-full overflow-x-auto scrollbarHide px-4 mb-4 scroll-snap-x">
                    <div className="inline-flex gap-1.5 whitespace-nowrap scroll-snap-start">
                        {TOOL_CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedToolCategory(category)}
                                className={`px-3 py-1.5 rounded-full text-sm border transition-all duration-400
            ${
                selectedToolCategory === category
                    ? 'bg-purple-500 text-white border-purple-600 shadow'
                    : 'bg-transparent text-white border-gray-500 hover:border-purple-500 hover:text-purple-400'
            }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tools display */}
                <div className={styles.flex1}>
                    {filteredTools.map((item, index) => (
                        <div key={index} title={item.name} className={styles.flex2}>
                            <span className={styles.i}>
                                {/* <i className={item.icon}></i> */}
                                {
                                    item.icon // All Icons are added from `https://icon-sets.iconify.design/`...
                                }
                            </span>
                            <span className={styles.label}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
