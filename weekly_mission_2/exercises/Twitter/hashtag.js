
const hashtag = {
    place: "Only on twiteer",
    date: "Yesterday",
    hashtagTitle: "CutiePieEP9",
    numbersTweets: "1.12M",
    getNumbersTweets: function () {
        return `Se han hecho ${this.numbersTweets}`
    },
    getHashtagTitle: function () {
        return `${this.hashtagTitle}`
    }
}

console.log("\n" + hashtag.date);
console.log(hashtag.getHashtagTitle());
console.log(hashtag.getNumbersTweets());