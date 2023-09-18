"use server";
import { revalidatePath } from "next/cache";
import { connectToDB } from "@lib/mongoose";
import Customer from "@lib/models/customer.model";

export async function addNewCustomer(
  data: { firstName: string },
  path: string
) {
  try {
    await connectToDB();
    await Customer.create(data);

    if (path === "/customers") {
      revalidatePath(path);
    }
  } catch (error) {
    throw new Error(`Failed to create customer: ${error.message}`);
  }
}

export async function fetchCustomers() {
  try {
    await connectToDB();
    const customersQuery = Customer.find({});
    const customers = await customersQuery.exec();

    return customers;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
}
