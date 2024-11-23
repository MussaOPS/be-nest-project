export class UserAdditionalInfoModel {
    constructor(avatar: string, address: string) {
        this.avatar = avatar;
        this.address = address;
    }

    avatar: string;
    address: string;
}
