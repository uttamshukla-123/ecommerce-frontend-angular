import { CartItem } from "./cart-item";

export class OrderItems {
    imageUrl:string;
    unitPrice:number;
    quantity:number;
    productId:string

    constructor(cartItem:CartItem){
        this.imageUrl=cartItem.imageUrl;
        this.unitPrice=cartItem.unitPrice;
        this.quantity=cartItem.quantity;
        this.productId=cartItem.id;
    }
}
