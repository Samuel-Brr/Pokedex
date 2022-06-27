export class Pokemon{

  constructor(
    private _name: string,
    private _imageUrl: string,
    private _description: string
  ){}

  public get description(): string {
    return this._description
  }
  public set description(value: string) {
    this._description = value
  }
  public get imageUrl(): string {
    return this._imageUrl
  }
  public set imageUrl(value: string) {
    this._imageUrl = value
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
}
