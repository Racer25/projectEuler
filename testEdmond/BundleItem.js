export default class BundleItem
{
    constructor(bundleId, itemId, QuantityRequired)
    {
        this._bundleId = bundleId;
        this._itemId = itemId;
        this._QuantityRequired = QuantityRequired;
    }


    get bundleId() {
        return this._bundleId;
    }

    set bundleId(value) {
        this._bundleId = value;
    }

    get itemId() {
        return this._itemId;
    }

    set itemId(value) {
        this._itemId = value;
    }

    get QuantityRequired() {
        return this._QuantityRequired;
    }

    set QuantityRequired(value) {
        this._QuantityRequired = value;
    }
}