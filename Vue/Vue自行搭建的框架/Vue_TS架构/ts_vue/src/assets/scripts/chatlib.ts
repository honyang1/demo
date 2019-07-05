import * as signalR from "@aspnet/signalr";

class ChatClient {
    token: string;
    serverRoot: string;
    thisClient: any;

    private connection: any;

    constructor(token: string, serverRoot: string) {
        this.token = token;
        this.serverRoot = serverRoot;
        this.thisClient = this;
        this.connection = new signalR.HubConnectionBuilder().withUrl(this.serverRoot + "messageHub", { accessTokenFactory: () => this.token })
            .configureLogging(signalR.LogLevel.Information)
            .build();
    }

    setOnCloseListener(f: any): void {
        this.connection.onclose(f);
    }
    start() {
        return this.connection.start();
    }
    getGroupMessages(groupId: any, AppKey: any) {
        return this.connection.invoke("GetGroupMessages", groupId, AppKey);
    }
    setOnGroupMessageListener(f: any): void {
        this.connection.on("OnGroupMessage", f);
    }
    setOnGroupMessagesListener(f: any): void {
        this.connection.on("OnGroupMessages", f);
    }
}

export default {
    Client(token: string, serverRoot: string) {
        return new ChatClient(token, serverRoot);
    }
}
