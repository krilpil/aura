export interface IHeroPromo {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  facts: string[];
}
