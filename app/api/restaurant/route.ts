import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(){
  try {
    const restaurant=await prisma.restaurant.findMany()
       

    return NextResponse.json({message:"Success",restaurant},{status:200});
}
  catch (error) {
    return NextResponse.json({error:error},{status:500});
    
  }
}