const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("**My Prefix Is** : `$`")
    }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setActivity("BM bc ✨",{type: 'WATCHING'})
});



client.on("message", message => {
    var prefix = "$";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| Your message is being sent ') 
            .addBlankField(true)
            .addField('♨| The number of members sent to them', message.guild.memberCount , true)        
            .addField('📝| Massege ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });



client.login("NzA1ODg1MDc4NDYyMzk4NTA2.XvE0oA.llqrx0gCcAm7kT_HE8iFmJXqnFs");
