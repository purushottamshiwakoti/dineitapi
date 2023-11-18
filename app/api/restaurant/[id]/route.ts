import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:any}){
  try {
    const id=params.id;
    const restaurant=await prisma.restaurant.findUnique({
        where:{
            id:id,
        }
    })
       

    return NextResponse.json({message:"Success",restaurant},{status:200});
}
  catch (error) {
    return NextResponse.json({error:error},{status:500});
    
  }
}