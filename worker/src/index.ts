import { Kafka } from 'kafkajs'

const TOPIC_NAME = 'zap_events'

const kafka = new Kafka({
    clientId: 'outbox-processor',
    brokers: ['localhost:9092']
})


async function main() {
    const consumer = kafka.consumer({ groupId: 'zap-processor' })

    await consumer.subscribe({ topic: TOPIC_NAME, fromBeginning: true })

    await consumer.run({
        autoCommit: false,
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                partition,
                offset: message.offset,
                value: message.value?.toString(),
            })
            await new Promise(resolve => setTimeout(resolve, 1000))
            console.log("processing done")

            await consumer.commitOffsets([{ topic, partition, offset: (parseInt(message.offset) + 1).toString() }])
        },
    })
}

main()