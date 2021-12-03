import { OnGatewayConnection, WebSocketGateway } from '@nestjs/websockets'

interface NotificationInterface {
    type: 'notification'
    payload: {
        text: string
    }
}

@WebSocketGateway(3031)
export class NotificationGateway implements OnGatewayConnection {
    handleConnection(client: any, ...args: any[]): any {
        setInterval(() => {
            const notification: NotificationInterface = {
                type: 'notification',
                payload: {
                    text: 'Hello World',
                },
            }

            client.send(JSON.stringify(notification))
        }, 5000)
    }
}
