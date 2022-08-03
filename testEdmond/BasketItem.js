export default class BasketItem
{
    constructor(itemId, Quantity)
    {
        this._itemId = itemId;
        this._Quantity = Quantity;
    }

    get itemId() {
        return this._itemId;
    }

    set itemId(value) {
        this._itemId = value;
    }

    get Quantity() {
        return this._Quantity;
    }

    set Quantity(value) {
        this._Quantity = value;
    }
}