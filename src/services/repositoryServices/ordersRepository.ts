import { getMSSQLConnection } from "../../helpers/mssql.js";

class OrdersRepository {
    async createOrder(orderData: any): Promise<void> {
        const pool = await getMSSQLConnection();
        const request = pool.request();
        // Add your SQL query and parameters here
    }
    /**
     * 
     * @param orderGuid 
     * @returns 
     */

    async getOrderByGuid(orderGuid: string): Promise<any> {
        try {
            const pool = await getMSSQLConnection();
            const request = pool.request();
            // Add your SQL query and parameters here

            const result = await request.query(`exec [orders].[spGetOrderByGuid] @order_guid='${orderGuid}'`);

            return result.recordset;

        } catch (error) {
            return Promise.reject(error);
        }

    }

    async updateOrder(orderId: string, orderData: any): Promise<void> {
        const pool = await getMSSQLConnection();
        const request = pool.request();
        // Add your SQL query and parameters here
    }

    async deleteOrder(orderId: string): Promise<void> {
        const pool = await getMSSQLConnection();
        const request = pool.request();
        // Add your SQL query and parameters here
    }
}
export default OrdersRepository;