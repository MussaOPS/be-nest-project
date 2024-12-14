import {ProfileResponseDto} from "../dto/profile-response.dto";
import {User} from "../entity/user.entity";
import {UserSignUpRequestDto} from "../dto/user-sign-up-request.dto";
import {UserUpdateRequestDto} from "../dto/user-update-request.dto";

export class UserBuilder {

    public static buildProfile(user: User): ProfileResponseDto {

        return new ProfileResponseDto();
    }

    public static buildEntity(request: UserSignUpRequestDto): User {

        return new User();
    }

    public static updateEntity(request: UserUpdateRequestDto): User {

        return new User();
    }
}
