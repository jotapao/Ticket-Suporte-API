import { randomUUID } from "node:crypto";

export function create({ request, response }) {
  const { equipament, descirption, user_name } = request.body;

  const ticket = {
    id: randomUUID(),
    equipament,
    descirption,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
  };

  return response.end("Criado com sucesso!");
}
