import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
        const {email,password,firstName,lastName}=await req.json();
        const existingUser=await prisma.user.findUnique({
            where:{
                email
            }
        });
        if(existingUser){
            return NextResponse.json({message:"User already exists"},{status:400});
        }

        const user=await prisma.user.create({
            data:{
                email,firstName,lastName,password
            }
        });
        return NextResponse.json({message:"User created",user},{status:200});
        
    } catch (error) {
        return NextResponse.json({error:error},{status:500});
    }
}

