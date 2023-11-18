import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:any}){
    try {
        const location=params.location;
        const restaurants=await prisma.restaurant.findMany({
            where:{
                name:{
                    startsWith: location
                }
            }
        })
        return NextResponse.json({message:"Success",restaurants},{status:200});
        
    } catch (error) {
        return NextResponse.json({error:error},{status:500});
    }
}