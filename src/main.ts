import { NestFactory } from '@nestjs/core';
import { FastifyAdapter,NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';


async function bootstrap() {
	/* 
	In the fastify docs https://github.com/fastify/fastify/blob/master/docs/HTTP2.md appears the
	http2 option which you can pass through fastify to enable it, it also requires https config

	If you run npm run start:dev you will see a type error:
	Type '{ http2: boolean; }' has no properties in common with type 'ServerOptions'.


	Http2 options exists in fastify.ServerOptionsAsHttp interface
	
	*/
	const opt = {
		http2: true
	}

	const app = await NestFactory.create<NestFastifyApplication>(
    	AppModule,
    	new FastifyAdapter(opt),
  	);
	
	await app.listen(3000);
}
bootstrap();
