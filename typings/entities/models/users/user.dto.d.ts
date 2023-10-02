import { User } from "./schemas";
export interface CreateUserDto extends Omit<User, 'id' | 'createdAt' | 'updatedAt'> {
}
export interface UpdateUserDto extends Partial<User> {
}
