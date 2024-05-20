import prismaClient from "../prisma/index.js";

class CreateUserService {
  async execute(name, password, email, post, gender) {
    console.log("Rota chamada");

    const user = await prismaClient.user.create({
      data: {
        name,
        password,
        email,
        post,
        gender,
      },
    });
    return user;
  }
}

export { CreateUserService };
