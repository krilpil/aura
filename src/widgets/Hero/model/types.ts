export interface IHeroPromoAction {
  label: string;
  variant: 'primary' | 'secondary';
}

export interface IHeroPromo {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  facts: string[];
  actions: IHeroPromoAction[];
}
