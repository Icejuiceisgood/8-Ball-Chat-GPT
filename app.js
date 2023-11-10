const messages = [
    "Yes",
    "No",
    "Ask again later",
    "Cannot predict now",
    "Don't count on it",
    "Most likely",
    "Outlook not so good",
    "You may rely on it"
];

function shakeMagicBall() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Update the content and appearance of the magic ball
    d3.select("#magic-ball")
        .html("")
        .append("div")
        .attr("class", "scene")
        .append("div")
        .attr("class", "magic-ball")
        .style("background-color", getRandomColor())
        .append("div")
        .attr("class", "surface")
        .append("div")
        .attr("class", "triangle")
        .append("div")
        .attr("class", "message")
        .text(randomMessage);
}

function getRandomColor() {
    // Generate a random color for the background
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
