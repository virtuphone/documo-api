export class Number {
    uuid?: string
    numberE164: string
    number: string
    pendingPort: boolean
    pendingUntil: string | null
  
    constructor ({
      uuid,
      numberE164,
      number,
      pendingPort,
      pendingUntil,
    }: Number) {
      this.uuid = uuid
      this.numberE164 = numberE164
      this.number = number
      this.pendingPort = pendingPort
      this.pendingUntil = pendingUntil
    }
  
    public static fromJson(number: any): Number {
      return new Number({
        uuid: number.uuid,
        numberE164: number.numberE164,
        number: number.number,
        pendingPort: number.pendingPort || false,
        pendingUntil: number.pendingUntil || null,
      })
    }
  }
  
  export default Number