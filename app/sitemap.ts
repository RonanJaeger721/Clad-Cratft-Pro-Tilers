import {siteUrl,nav} from '@/lib/data';
export default function sitemap(){return nav.map(([path])=>({url:`${siteUrl}${path==='/'?'':path}`,changeFrequency:'monthly' as const,priority:path==='/'?1:0.8}))}
