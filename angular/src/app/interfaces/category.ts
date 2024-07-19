import { IProduct } from './product';

export interface ICategory {
  name: string;
  image: string;
  id?: string;
  products: IProduct[];
}
