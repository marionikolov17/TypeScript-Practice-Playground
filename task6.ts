class KeyValuePair<T, U> {
    private key: T;
    private value: U;

    public setKeyValue(k: T, v: U): void {
        this.key = k;
        this.value = v;
    }
    
    public display(): void {
        console.log(`key = ${this.key}, value = ${this.value}`);
    }
}   

export default KeyValuePair;

let kvp = new KeyValuePair<number, string>();

kvp.setKeyValue(1, "Steve");

kvp.display()