window.onload = function () {

    const tweets = document.querySelector("#tweets");
    const form = document.querySelector("#tweetForm");

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const username = form.elements.username.value;
        const tweet = form.elements.tweet.value;

        const list = document.createElement("li");
        const boldTag = document.createElement("b");

        boldTag.append(username);
        list.append(boldTag);
        list.append(` - ${tweet} `);

        tweets.append(list);

        form.elements.username.value = "";
        form.elements.tweet.value = "";

    })

}