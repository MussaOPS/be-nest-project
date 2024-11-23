export class JsonUtil {

    static parse<T>(json: string): T {

        return JSON.parse(json);
    }

    static stringify<T>(obj: T): string {

        return JSON.stringify(obj);
    }
}
