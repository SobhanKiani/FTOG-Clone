import { Restaurant } from '../models/restaurant.model';
import { IBaseResponse } from './base-response.interface';

export interface IDeleteRestaurantResponse extends IBaseResponse {
  data: Restaurant | null;
}
