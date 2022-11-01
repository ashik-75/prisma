import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
  const user = await prisma.user.findMany();
  res.json(user);
};

export const addUser = async (req, res) => {
  try {
    const { email } = req.body || {};
    const user = await prisma.user.create({
      data: {
        email,
      },
    });
    res.json(user);
  } catch (err) {
    res.status(401).json({
      msg: err?.message,
    });
  }
};

export const getSingleUser = async (req, res) => {
  const userId = req.params.userId;
  const user = await prisma.user.findFirst({
    where: {
      id: parseInt(userId),
    },
  });
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const userId = req.params.userId;
  const user = await prisma.user.delete({
    where: {
      id: parseInt(userId),
    },
  });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { name, email } = req.body;
  const user = await prisma.user.update({
    where: {
      id: parseInt(userId),
    },
    data: {
      name,
      email,
    },
  });
  res.json(user);
};
