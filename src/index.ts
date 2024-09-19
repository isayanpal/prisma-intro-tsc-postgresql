import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//similar to -
// import mongoose from "mongoose"
//mongoose.connect

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}
