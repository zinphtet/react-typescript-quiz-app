import Item from "./components/Item.jsx";
import data from "./data/data.json";
import { MouseEventHandler, useState } from "react";
import Score from "./components/Score.js";
type quizItem = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const quizData: Array<quizItem> = data.questions;
// quizData.length = 5;
function App() {
  const [num, setNum] = useState<number>(1);
  const [mark, setMark] = useState<number>(0);
  const [selectQuiz, setSelectQuiz] = useState<boolean>(false);

  const finished: boolean = num === quizData.length;
  const toSocre: boolean = num > quizData.length;

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (toSocre) {
      setNum(1);
      setMark(0);
      setSelectQuiz(false);
      return;
    }

    if (finished) {
      setNum((prev) => prev + 1);
      setSelectQuiz(true);
      return;
    }
    setNum((prev) => prev + 1);
    setSelectQuiz(false);
  };

  const currentQuiz = quizData[num - 1];
  console.log("App render");
  return (
    <>
      <div className="w-screen h-screen border border-transparent bg-slate-800">
        <div className=" max-w-[650px] mx-auto mt-16 text-white">
          <h1 className="text-5xl text-center  font-bold">Quiz Time</h1>
          <div className=" mt-6 p-4 ">
            <p className="text-3xl text-blue-700">
              {toSocre ? quizData.length : num} / {quizData.length}
            </p>
            {!toSocre && (
              <>
                <p className="my-4 text-2xl">{currentQuiz.question}</p>
                <div className="flex flex-wrap gap-2">
                  {currentQuiz.options.map((val) => (
                    <Item
                      value={val}
                      ans={currentQuiz.correctAnswer}
                      id={val}
                      key={val}
                      setMark={setMark}
                      setSelectState={setSelectQuiz}
                    />
                  ))}
                </div>
              </>
            )}
            {toSocre && (
              <>
                <Score score={mark} />
              </>
            )}

            <div>
              <button
                className={`py-2 mt-4 rounded-xl bg-white text-black px-6 border-red-800 block ml-auto ${
                  !selectQuiz && "opacity-60"
                }`}
                disabled={!selectQuiz}
                onClick={onClickHandler}
              >
                {finished ? "Finish" : toSocre ? "Back" : "Next"}
                {/* Next */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
