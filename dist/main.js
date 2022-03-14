"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log("process.env.APP_PORT ", process.env.APP_PORT);
    await app.listen(parseInt(process.env.APP_PORT));
}
bootstrap();
//# sourceMappingURL=main.js.map