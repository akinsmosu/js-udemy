const task3Element = document.getElementById("task-3");

function greeting() {
  alert("Hi from no-param function");
}

function greetWithName(name) {
  alert(`Hi there ${name}`);
}

// greeting();
// greetWithName("Mike");

task3Element.addEventListener("click", greeting);

