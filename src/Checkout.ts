import { Promotion } from '../discount/Promotion';
import { Product } from './Product';

export class Checkout {
    private items: Product[] = [];
    private promotions: Promotion[] = [];
    private products: Product[];

    constructor(promotions: Promotion[], products: Product[] | [] = []) {
        this.promotions = promotions;
        this.products = products;
    }


    scan(code: string) {
        const product = this.products.find((p) => p.code === code);
        if (product) {
            this.items.push(product);
        } else {
            console.log(`Product with code ${code} not found.`);
        }
    }
    private applyItemDiscounts(): number {
        let discountTotal = 0;

        this.promotions.forEach((promotion) => {
            if (promotion.itemDiscounts) {
                promotion.itemDiscounts.forEach((discount) => {
                    const matchingItems = this.items.filter(
                        (item) => item.code === discount.productCode
                    );
                    if (matchingItems.length >= discount.minItems) {
                        const totalDiscount = matchingItems.reduce(
                            (acc, item) => acc + item.price,
                            0
                        ) - discount.discountPrice * matchingItems.length;
                        discountTotal += totalDiscount;
                    }
                });
            }
        });

        return discountTotal;
    }

    private applyPercentDiscount(total: number): number {
        let discountTotal = 0;

        this.promotions.forEach((promotion) => {
            if (promotion.percentDiscount && total >= promotion.percentDiscount.threshold) {
                discountTotal = total * (promotion.percentDiscount.discount / 100);
            }
        });

        return discountTotal;
    }

    get total() {
        const total = this.items.reduce((acc, item) => acc + item.price, 0);

        const itemDiscountTotal = this.applyItemDiscounts();
        const percentDiscountTotal = this.applyPercentDiscount(total - itemDiscountTotal);

        const finalTotal = (total - itemDiscountTotal - percentDiscountTotal);
        return Math.max(finalTotal).toFixed(2);
    }
}
