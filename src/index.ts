import { ConfigurationOptions } from "./dtos/configuration-options.dto";
import { FaxNumbers } from "./lib";

export default class Documo {
  private encodedToken: string

  public faxNumbers: FaxNumbers

  constructor (options: ConfigurationOptions) {
    if (!options.encodedToken) {
        const error = new Error('Invalid Authentication Options')
        throw error
    }
    this.encodedToken = options.encodedToken

    // Initialize classes
    this.faxNumbers = new FaxNumbers(this.encodedToken)
  }
}

export * from './classes'