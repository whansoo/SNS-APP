
export default interface User {
    id: number;
    email: string;
    nickname: string;
    password: string;
    Followings: User[];
    Followers: User[];
  }