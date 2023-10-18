import { ImageObject, NewsItem } from '../types';

export function buildFullImageUrl(imageObject: ImageObject): string {
  const imageUrlChunk = imageObject.image_fulltext;
  return `https://agenciadenoticias.ibge.gov.br/${imageUrlChunk}`;
}

export function updateImageUrlsInNews(newsItems: NewsItem[]): NewsItem[] {
  return newsItems.map((item) => {
    const imageObject = JSON.parse(item.imagens);
    const fullImageUrl = buildFullImageUrl(imageObject);
    return { ...item, imagens: fullImageUrl };
  });
}