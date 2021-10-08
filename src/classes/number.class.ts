export class Number {
    uuid?: string
    numberE164: string
    number: string
    pendingPort: boolean
  
    constructor ({
      uuid,
      numberE164,
      number,
      pendingPort,
    }: Number) {
      this.uuid = uuid
      this.numberE164 = numberE164
      this.number = number
      this.pendingPort = pendingPort
    }
  
    public static fromJson(number: any): Number {
      return new Number({
        uuid: number.uuid,
        numberE164: number.numberE164,
        number: number.number,
        pendingPort: number.pendingPort,
      })
    }
  }
  
  export default Number