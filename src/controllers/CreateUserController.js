import { CreateUserService } from "../services/CreateUserService.js";

class CreateUserController {
  async handle(request, reply) {
    const { name, password, email, post, gender } = request.body;

   
    const userService = new CreateUserService();

    const user = await userService.execute(name, password, email, post, gender);

    reply.send(user);
  }
}

export { CreateUserController };
