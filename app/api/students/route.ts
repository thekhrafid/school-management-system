import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


// Create student using post function
export async function POST(req:Request){
    try {
        const body = await req.json();

        const {userId, className, rollNo} = body;

        if(!userId || !className || !rollNo){
            return NextResponse.json({message:"UserId, Classname and RollNo are required"},{status:400});

        }
        // create student 

            const student = await prisma.student.create({
                data:{
                    userId, className, rollNo
                }

            })

            return NextResponse.json(student);
    } catch (error) {
        
    }
}

// Read student using get function 

export async function GET(){
    try {
        const students = await prisma.student.findMany({
                 include:{
                    user:{
                        select:{
                             name: true,
                             email: true,  
                             role:true
                }
            }
        }
        });
   
        return NextResponse.json(students);
    } catch (error:any) {
        return NextResponse.json({message:"Failed to fetch students", error: error.message},{status:500});
    }
}

// Update students using PUT function 

export async function PUT(req:Request){
    try {
        const body = await req.json();
        const{id, className, rollNo} = body;

        if(!id){
            return NextResponse.json({mesage:"Student id"},{status:400});
        }

        const updateStudent = await prisma.student.update({
            where:{id},
            data:{className, rollNo}
        })
        return NextResponse.json(updateStudent);
    } catch (error:any) {
        return NextResponse.json({message:"Failed to update student", error: error.message},{status:500});
    }
}

// Delete student using DELETE function 

export async function DELETE(req:Request){
    try {
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");

        if(!id){
            return NextResponse.json({message:"Student Id is required"},{status:400})
        }

        await prisma.student.delete({
            where:{id}

        })
        return NextResponse.json({message:"Student deleted successfully"});
    } catch (error:any) {
        return NextResponse.json({message:"Failed to delete student", error:error.message},{status:500});
    }
}