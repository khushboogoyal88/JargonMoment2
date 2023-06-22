import { User } from "./user";

export class UserParams {
    bio: string;
    minAge = 18;
    maxAge = 99;
    pageNumber = 1;
    pageSize = 3;
    orderBy = 'lastActive';

    constructor(user: User) {
        this.bio = user.bio === 'candidate' ? 'company' : 'candidate'
    }
}