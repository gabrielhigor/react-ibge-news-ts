import { ImageObject, NewsItem } from '../types';
import { calculateDaysAgo } from './dateUtils';

export function buildFullImageUrl(imageObject: ImageObject): string {
  const imageUrlChunk = imageObject.image_fulltext;
  return `https://agenciadenoticias.ibge.gov.br/${imageUrlChunk}`;
}

export function updateImageUrlsInNews(newsItems: NewsItem[]): NewsItem[] {
  return newsItems.map((item) => {
    const imageObject = JSON.parse(item.imagens);
    const fullImageUrl = buildFullImageUrl(imageObject);

    const daysAgo = calculateDaysAgo(item.data_publicacao);
    
    return { ...item, imagens: fullImageUrl, data_publicacao: daysAgo };
  });
}
