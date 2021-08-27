class Permission {

    constructor(
        private _name: string,
        private _level: number,
    ){}

    get name(){
        return this._name;
    }

    set name(v){
        if (v.length < 5) throw new Error('Deve ter mais de 4 letras');
        this._name = v;
    }

}