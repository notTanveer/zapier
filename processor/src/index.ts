import { PrismaClient } from '@prisma/client';
import { Kafka } from 'kafkajs'

const client = new PrismaClient()

const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
})

// start postgres and kafka locally
async function main() { 
    const producer = kafka.producer()   
    await producer.connect();
    while (1) {
        const pendingRows = await client.zapRunOutbox.findMany({
            where: {},
            take: 10
        })

        producer.send({
            topic: 'zap_run_outbox',
            messages: pendingRows.map(row => ({
                value: row.zapRunId
            }))
        })

        await client.zapRunOutbox.deleteMany({
            where: {
                id: {
                    in: pendingRows.map(row => row.id)
                }
            }
        })
    }
}

main()