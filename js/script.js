const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

const learning = {};
learning.topic = "JS";

learning.learningGoals = ["HTML", "CSS", "JS", "Bootstrap"];
learning.category = "learning frontend development";

learning.topicImportance = "High";

learning.topic = "JavaScript";

learning.learningGoals.splice(2, 1);
console.log(learning);

topicElement.innerText = `I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals
`;
countElement.classList.remove("hide");
