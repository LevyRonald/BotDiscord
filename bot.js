const Discord = require('discord.js');//lib discord
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
    client.user.setActivity(`EPIC RPG`, { type: 'PLAYING' });
    //(` em ${client.guilds.cache.size} servidores`);
  });
  
  client.on("guildCreate", guild => {
      console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
      client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`);
  });
  
  client.on("guildDelete", guild => {
      console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
      client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
  });

client.on('message', message => {
  if (message.content === '.avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});



client.on('message', (message) => {
  if (message.author.id === '555955826880413696') {
    if (message.embeds.length == 1) {
      const embed = message.embeds[0]
       if(embed.description){
  if (embed.description.includes("started an arena event!")) {
        return  message.channel.send(`<@&${702225201085153442n}> digite **__JOIN__** :cookie: :cookie:`)//arena
      }
       }
    }
  }
})

client.on("message", message => {
	var mscontent = message.content
	if(message.author.id=='555955826880413696') {
		var char1 = mscontent.charAt(0)
		var descriptiontext=''
		var nametext=''
		if (message.embeds.length==1){
      descriptiontext=message.embeds[0].description
      nametext=message.embeds[0].fields[0].name
      if(nametext.name){
    if (typeof descriptiontext =='string'){
			 if (descriptiontext.startsWith('Help ')){
				message.channel.send(` <@&${702225201085153442n}> Digite **__FIGHT__** :crossed_swords: :crossed_swords:`)//miniboss
      }
    }  
    if(typeof nametext == 'string'){
		 if (nametext.startsWith("**A MEGALODON")){
				message.channel.send(`<@&${702225201085153442n}> **__FISH__** :fish: :fish: `)//fish
      }
    
			 else if (nametext.startsWith("**AN EPIC TREE")){
				message.channel.send(`<@&${702225201085153442n}> **__CHOP__** :evergreen_tree: :evergreen_tree: `)//chop
      }
    
			 else if (nametext.startsWith("**IT'S RAINING")){
				message.channel.send(`<@&${702225201085153442n}> **__CATCH__ ** :moneybag: :moneybag: `)//catch
      }
    }
    }
  }
  }
})
//================EVENTS COMANDS END============================

client.login('NzQ2MzcxNDU0MjYxNjU3ODAx.Xz_WlQ.--0iGs0hP2zE4kfndXfBiZHmb7s');

