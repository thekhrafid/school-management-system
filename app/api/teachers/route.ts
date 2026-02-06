import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try {
        const body = await req.json();

        const {userId, subject} = body;

        if(!userId || !subject){
            return NextResponse.json({message:"UserId and Subject are required"},{status:400});
        }

        // create teacher 

        const teacher = await prisma.teacher.create({
            data:{
                userid: userId, subject
            }
        })
        return NextResponse.json(teacher);
    } catch (error:any) {
        return NextResponse.json({message:"Teacher creation failed", error:error.message},{status:500});
    }
}

// get teacher using GET function 

export async function GET(){
    const teacher = await prisma.teacher.findMany({
        include:{
            user:{
                select:{
                    name: true,
                    email: true,
                    role: true,
                }
            }
        }
    })
    return NextResponse.json(teacher);
}