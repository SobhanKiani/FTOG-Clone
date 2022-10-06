import { IBaseResponse } from 'src/utils/base-response.interface';
import { Restaurant } from '../../models/restaurant.model';

export interface IGetRestaurantByIdResult extends IBaseResponse {
  data: Restaurant | null;
}
