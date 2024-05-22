import { PrismaClient } from "@prisma/client";

export const createUser = async ({
  name,
  password,
  email,
  phone,
}: {
  name: string;
  password: string;
  email: string;
  phone: string;
}) => {
  const db = new PrismaClient();
  db.user.create({
    data: {
      email,
      name,
      phone: phone ?? undefined,
    },
  });
};
