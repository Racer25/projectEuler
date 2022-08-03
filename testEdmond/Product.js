export default class Product
{
    constructor(id, name, priceCent)
    {
        this._id = id;
        this._name = name;
        this._priceCents = priceCent;
        this._priceCent = priceCent;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get priceCent() {
        return this._priceCent;
    }

    set priceCent(value) {
        this._priceCent = value;
    }
}