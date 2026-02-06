import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req:Request){
    try {
        const body = await req.json();

        const {name, email, password, role} = body;

        if(!name || !email || !password || !role){
            return NextResponse.json({message:"All fields are required"},{status:400});
        }

        // Password hashed 

        const hashedpassword = await bcrypt.hash(password, 10);

        // create user 
        const user = await prisma.user.create({
            data:{
                name, email, password:hashedpassword, role,
            },
        });
        return NextResponse.json(user,{status:201});
    } catch (error:any) {
        return NextResponse.json({message:"User creation failed", error:error.message},{status:500});
        
    }
}

// get user using GET function 

export async function GET(){
    const users = await prisma.user.findMany({
        select:{
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        }
    })
    return NextResponse.json(users);
}