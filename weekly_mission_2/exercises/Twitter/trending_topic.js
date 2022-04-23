
const trending_topic = {

    title: "El caso Debanhi Escobar",
    date: "18-04-2022",
    tweets: 31000,
    country: "México",
    getDate: function () {
        return `${this.date}`
    },
    getTweets: function () {
        return `Hasta la fecha ${this.date} se han hecho ${this.tweets} tweets`
    }
}

console.log("\n " + `${trending_topic.title}`);
console.log("A la fecha " + trending_topic.getDate());
console.log(trending_topic.getTweets() + "\n");