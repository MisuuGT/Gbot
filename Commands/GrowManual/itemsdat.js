module.exports = {
    name: "itemsdat",
    description: "Sending Items.dat from Real Growtopia",
    usage: "<prefix>itemsdat",
    aliases: ["itemsdat"],
    permissions: [],
    cooldown: 3000,
    run: async (client, message, args) => {
        return message.reply("Here you go", {
            files: ["./cache/items.dat"]
        })
    }
}