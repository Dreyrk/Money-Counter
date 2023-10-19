import { NextRequest, NextResponse } from "next/server";
import dbConnection from "@/lib/database";
import Users from "@/lib/models/Users";
import bcrypt from "bcryptjs";

async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  try {
    await dbConnection();
    if (username && password) {
      let isUserExist = await Users.findOne({ username });
      isUserExist = Boolean(isUserExist);
      if (isUserExist) {
        return NextResponse.json({
          success: false,
          message: "User Already Exist",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hash(password, salt);
        await Users.create({ username, password: hashedPassword });
        return NextResponse.json(
          { success: true, message: "User registered" },
          { status: 201 }
        );
      }
    }
  } catch (e: any) {
    console.error(`error trying to register: ${e.message}`);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
