import { ItemDiscount } from './ItemDisocunt';
import { PercentDiscount } from './PercentDiscount';

export interface Promotion {
    itemDiscounts?: ItemDiscount[];
    percentDiscount?: PercentDiscount;
}