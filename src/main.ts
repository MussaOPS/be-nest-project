import {NestFactory} from "@nestjs/core";
import {AppModule} from "./module/app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("API Documentation")
        .setDescription("The API description")
        .setVersion("1.0")
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/swagger-ui/index.html", app, document);

    await app.listen(3000);
}

bootstrap();
