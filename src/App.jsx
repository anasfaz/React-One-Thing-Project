//react import
import {  useState } from "react";
// library imports
// confetti
import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

// custom Compontents imports
import CustomForm from "./components/CustomForm";

import OneThing from "./components/OneThing";

function getSuccessMessage() {
  const messages = [
    "Congrats!",
    "Great job!",
    "Don’t ya feel great?!",
    "Up, up, and up!",
    "The real achiever do one thing at a time",
    "Did you though?",
    "Don’t feel like you tried your best…",
    "Opportunities don't happen, you create them",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function App() {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);
  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setIsCompleted(false);
  };
  // input
  const handleInput = (e) => {
    setThing(e.target.value);
  };
  //completed task msg
  //popup library js-confetti 
  const handleCompletedThing = async (e) => {
    console.log(e);
    e.target.setAttribute("disabled", true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ["🚀", "🎊","✨"],
    });
    e.target.removeAttribute("disabled");
    setThing("");
    setIsCompleted(true);
  };
  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="gird place-items-center gap-8 m-8 ">
        {isCompleted && (
          <CustomForm
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        )}
        {!isCompleted && (
          <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
        )}
      </div>
    </main>
  );
}

export default App;
