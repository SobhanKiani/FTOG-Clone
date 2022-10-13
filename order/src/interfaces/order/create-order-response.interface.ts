import { Order } from "@prisma/client";
import { IBaseResponse } from "../../../../order/src/interfaces/base-response.interface";

export interface ICreateOrderResponse extends IBaseResponse {
    data: Order | null
}