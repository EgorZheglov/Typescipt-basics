import User from '../db/models/user-model'
export default function (user: User): object {
    const { id, name, login } = user;
    return { id, name, login };
}