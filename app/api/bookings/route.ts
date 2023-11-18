import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {restaurantId,userId,date,hours,minutes}=await req.json();
        const bookRestaurant=await prisma.bookingRestaurant.create({
            data:{
hours,
minutes,
restaurantId,
userId,
date,       },

        });
        const existingRestaurant = await prisma.restaurant.findUnique({
            where: {
                id: restaurantId,
            },
        });
       if(existingRestaurant?.tables!==null && existingRestaurant?.tables!==undefined){
        const updateTable=await prisma.restaurant.update({
            where:{
                id:restaurantId,
            },
            data:{
                tables:existingRestaurant?.tables-1
            }
        })
       }
       return NextResponse.json({message:"Successfully booked restaurant"},{status:200});
    } catch (error) {
        return NextResponse.json({error:error},{status:500});
    }

}