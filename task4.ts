abstract class Melon {
  public weight: number;
  public melonSort: string;
  public allElements: Array<string>;
  
  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
    this.allElements = ["Water", "Fire", "Earth", "Air"];
  }
}

class Watermelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() : string {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }
}

class Firemelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() : string {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }
}

class Earthmelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() : string {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }
}

class Airmelon extends Melon {
    private _elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this._elementIndex = this.weight * this.melonSort.length;
    }

    public get elementIndex() {
        return this._elementIndex;
    }

    public toString() : string {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }
}

class Melolemonmelon extends Watermelon {
    public currentElement: string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.currentElement = this.allElements.shift();
        this.allElements.push(this.currentElement);
    }

    public morph() {
        const removedEl = this.allElements.shift();
        this.currentElement = removedEl;
        this.allElements.push(removedEl);
    }
}

//let test : Melon = new Melon(100, "Test");

//Throws error

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");

console.log(watermelon.toString());

// Element: Water

// Sort: Kingsize

// Element Index: 100