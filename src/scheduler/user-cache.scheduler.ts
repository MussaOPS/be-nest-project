// import {Injectable, Logger} from "@nestjs/common";
// import {Cron} from "@nestjs/schedule";
//
// @Injectable()
// export class UserCacheScheduler {
//     private readonly logger = new Logger(UserCacheScheduler.name);
//
//     @Cron('0 */10 * * * *')
//     async handleCron() {
//         await this.clearUserCacheInfo();
//     }
//
//     //todo: вынести в сервис
//     private async clearUserCacheInfo() {
//
//         this.logger.log('Кэш пользователя успешно очищен');
//     }
// }
