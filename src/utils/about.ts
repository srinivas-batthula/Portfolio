// utils/about.ts
import { SkillOrToolItem } from '@/types';

export function filterByCategory(items: SkillOrToolItem[], category: string): SkillOrToolItem[] {
    if (category === 'All') return items;
    return items.filter(item =>
        item.type.map(t => t.toLowerCase()).includes(category.toLowerCase())
    );
}
