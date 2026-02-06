import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const body = await req.json();

        const {title, content} = body;

        if(!title || !content){
            return NextResponse.json({message:"Title and content are required"},{status:400});
        }
        // create notice
        const notice = await prisma.notice.create({
            date:{
                title,
                content,
            }
        })
    } catch (error: any) {
        return NextResponse.json({message:"Notice creation failed", error:error.message},{status:500});
        
    }
}

// get notices using GET function

export async function GET(){
    const notices = await prisma.notice.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
    return NextResponse.json(notices);
}