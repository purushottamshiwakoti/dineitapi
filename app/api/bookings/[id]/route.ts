import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:any}){
    try {
        const id=params.id;
        console.log(id);
        const bookedRestaurants=await prisma.bookingRestaurant.findMany({
            where:{
                userId:id
            },select:{
                createdAt:true,
                restaurants:true,
            }
        })

        return NextResponse.json({message:"Successfully fetched booking information",bookedRestaurants},{status:200});
        
    } catch (error) {
        return NextResponse.json({error:error},{status:500});
        
    }

}