"use server";

import { prisma } from "@/lib/prisma";

export async function createUser(userData: any) {
    try {
   
      console.log(userData)
      const newUser = await prisma.user.create(userData);
  
      return newUser;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }