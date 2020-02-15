// Schema
import { normalize, schema } from "normalizr";
import { NormalizedObjects } from "./types/default";
import { User } from "./redux/users";

const userSchema = new schema.Entity("users", {}, { idAttribute: "email" });
const userListSchena = { results: [userSchema] };

export const Api = {
  fetchUsers: async (): Promise<NormalizedObjects<User>> => {
    const response = await fetch("https://randomuser.me/api/?results=2");
    const users = await response.json();
    const normalized = normalize(users, userListSchena);

    return {
      byId: normalized.entities.users as any,
      allIds: normalized.result.results
    };
  }
};
