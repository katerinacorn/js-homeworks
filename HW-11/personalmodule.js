const os = require("os");

const greetings = (user) => {
    const today = new Date();
    const timeOfDay = today.getHours();

    switch (true) {
        case (timeOfDay === 23 || timeOfDay < 5): {
            return `Good night, ${user}`;
        }
        case (timeOfDay >= 5 && timeOfDay < 11): {
            return `Good morning, ${user}`;

        }
        case (timeOfDay >= 11 && timeOfDay < 17): {
            return `Good afternoon, ${user}`;
        }
        case (timeOfDay >= 17 && timeOfDay < 23): {
            return `Good evening, ${user}`;
        }
        default: {
            return "I don't know what time of day is it :(";
        }
    }
};

module.exports = {
    greetings: greetings
};