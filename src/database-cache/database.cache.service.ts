import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../users/user.entity";
import {Repository} from "typeorm";
import {DatabaseCache} from "./database.cache.entity";

@Injectable()
export class DatabaseCacheService {
    constructor(
        @InjectRepository(DatabaseCache) private databaseCacheRepository: Repository<DatabaseCache>,
    ) {
    }

    async getDatabaseCache(key: string): Promise<any> {
    }

    async getExpiredDatabaseCaches(key: string): Promise<any> {
    }

    async createDatabaseCache(key: string, value: any): Promise<void> {
    }

    async updateDatabaseCache(key: string, value: any): Promise<void> {
    }

    async deleteDatabaseCaches(key: string): Promise<void> {
    }
}
