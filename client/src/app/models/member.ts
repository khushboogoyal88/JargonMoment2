import { Photo } from "./photo";

export interface Member {
    id: number;
    userName: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    bio: string;
    introduction: string;
    lookingFor: string;
    skills: string;
    city: string;
    country: string;
    photos: Photo[];
}

