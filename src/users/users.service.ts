import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'Nodejs',
      password: '1234',
    },
    {
      userId: 2,
      username: 'Nestjs',
      password: '1234',
    },
    {
      userId: 3,
      username: 'Reactjs',
      password: '1234',
    },
    {
      userId: 4,
      username: 'Vuejs',
      password: '1234',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
