using System;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;


namespace signalRtest1
{
    public class TestHub : Hub
    {
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("OnMsg", DateTime.Now, message);
        }

    }
}
