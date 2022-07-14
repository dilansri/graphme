/**
 * NumericSymbolTable class provide with an incremeting integers starting from 0 for given strings
 * It will keep track of all the string it has seen
 * @summary Provides incrementing integer from 0 for given strings
 */
export class NumericSymbolTable<Key extends string | number> {
  private symbolMap : Map<Key, number>
  private symbolCounter : number

  constructor() {
    this.symbolMap = new Map<Key, number>()
    this.symbolCounter = 0
  }

  public get(key : Key): number {
    const value = this.symbolMap.get(key)

    if(value == null) {
      this.symbolMap.set(key, this.symbolCounter)
      return this.symbolCounter++
    }

    return value
  }

  public getCount() : number {
    return this.symbolCounter
  }
}