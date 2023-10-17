import { IService } from "@/interface/type";

export const TotalPrice = (services: IService[]) => {
    let totalPrice = 0;

    // Iterate through the services array and sum the prices
    for (const service of services) {
        // Convert the "price" from a string to a number and add it to the total
        totalPrice += parseFloat(service.price);
    }
    return totalPrice;
}