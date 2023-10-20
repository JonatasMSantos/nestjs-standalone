# NestJS Standalone Services Example

Este é um projeto NestJS que demonstra como criar serviços standalone para gRPC, Kafka, BullMQ (BullJs) e RabbitMQ. Cada serviço é executado de forma separada em uma pasta CMD com arquivos específicos para cada um dos serviços. O objetivo é permitir que você inicie e gerencie esses serviços individualmente. Você pode executar esses serviços em contêineres Docker independentes, orquestrados usando docker-compose.

## Project Structure

A estrutura do projeto é organizada da seguinte forma:

```text
nestjs-standalone-services/
│
├── src/
│   ├── cmd/
│   │   ├── grpc-server.ts
│   │   ├── kafka-consumer.ts
│   │   ├── rabbit-consumer.ts
│   │   ├── queue-consumer.ts
│   ├── main.ts (Serviço HTTP principal)
│
├── nest-cli.json
├── package.json
├── tsconfig.json
├── README.md
└── docker-compose.yaml
```

## Comandos

Você pode usar os seguintes comandos para iniciar os serviços standalone individualmente:

### Servir os serviços separadamente

> Execução no ambiente de desenvolvimento:

``` bash
    ## grpc-server:dev
    npm run start:dev -- --entryFile cmd/grpc-server

    ## grpc-server:prod
    npm run start:prod -- --entryFile cmd/grpc-server

    ## kafka-server:dev
    npm run start:dev -- --entryFile cmd/kafka-consumer

    ## kafka-server:prod
    npm run start:prod -- --entryFile cmd/kafka-consumer

    ## rabbit-server:dev
    npm run start:dev -- --entryFile cmd/rabbit-consumer

    ## rabbit-server:prod
    npm run start:prod -- --entryFile cmd/rabbit-consumer

    ## queue-server:dev
    npm run start:dev -- --entryFile cmd/queue-consumer

    ## queue-server:prod
    npm run start:prod -- --entryFile cmd/queue-consumer
```

Você pode personalizar os serviços que deseja executar e as configurações dos contêineres no arquivo docker-compose.yaml.