import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { studentId, date, status } = body;

    if (!studentId || !date || status === undefined) {
      return NextResponse.json(
        { message: "studentId, date and status are required" },
        { status: 400 },
      );
    }

    // create attendance record

    const attendence = await prisma.attendance.create({
      data: {
        studentId,
        date: new Date(date),
        status,
      },
    });
    return NextResponse.json(attendence);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Attendance creation failed", error: error.message },
      { status: 500 },
    );
  }
}

// get attendance records using GET function

export async function GET() {
  const attendence = await prisma.attendance.findMany({
    include: {
      student: {
        include: {
          user: { select: { name: true } },
        },
      },
    },
  });

  return NextResponse.json(attendence);
}
