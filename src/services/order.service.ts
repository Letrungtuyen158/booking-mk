import { Order } from "@/types/api";
import { BaseService } from "./base.service";
import { GeneralRequest, GeneralResponse } from "./type";

export interface OrderListRequests extends GeneralRequest {}
export interface OrderListResponse extends GeneralResponse<Order> {}

export interface CreateOrderDto {
  customerName: string;
  service: string;
  product: string;
  status: string;
  amount: string;
  date: string;
}

class OrderService extends BaseService<
  Order,
  OrderListRequests,
  CreateOrderDto
> {
  constructor() {
    super("/orders");
  }
}

export default new OrderService();
