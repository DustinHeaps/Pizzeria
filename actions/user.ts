"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(userData: any) {
    try {
   
      console.log('userData')
      // const newUser = await prisma.user.create(userData);

      const newUser = await prisma?.user.create({
        data: {
          id: userData.id,
          // clerkId: id, // Assuming you want to use Clerk's user ID
          email: userData.email, // Example: Accessing the primary email
        },
      });
  
      return newUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  export const getUserById = async (id: string) => {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
  
      return user;
    } catch {
      return null;
    }
  };

 export const updateUser = async (userData) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: userData.id, // Assuming the user's ID in your DB matches Clerk's user ID
    },
    data: {
      email: userData.email_addresses[0].email_address,
      address // Example: Update primary email
      // name: userData.first_name + ' ' + updatedUserData.last_name,
      // Update other fields as necessary
    },
  });
 } 