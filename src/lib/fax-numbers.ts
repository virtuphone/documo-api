import axios, { AxiosInstance } from "axios"
import Number from "../classes/number.class"

export interface SearchParams {
    accountId: string
    type: 'available' | 'assigned' | 'pending'
    offset: number
    limit: number
    query: string
}

export class FaxNumbers {
  private _encodedToken: string
  private _api: AxiosInstance

  constructor (encodedToken: string) {
    this._encodedToken = encodedToken

    this._api = axios.create({
      baseURL: `https://api.documo.com/v1/numbers`,
      headers: {
        Authorization: `Basic ${encodedToken}`
      }
    })
  }

  public async get (id: string): Promise<Number> {
    try {
      const response = await this._api.get(`/${id}`);

      if (!response || !response.data) {
        const error = new Error('Invalid Request')
        throw error
      }
      return Number.fromJson(response.data)
    } catch (err) {
      throw err
    }
  }
}