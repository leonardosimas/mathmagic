import React, { useState } from "react";
import {Button} from "@nextui-org/react";
import questions from "../data/questions.json"

const QuestionGame: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [wrongCount, setWrongCount] = useState<number>(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleCheckAnswer = () => {
    if (answer.trim() === currentQuestion.answer) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }

    // Move para a próxima pergunta
    setCurrentQuestionIndex((prev) => prev + 1);
    setAnswer("");
  };

  return (
    <div>
      <div>
        <p>Acertos: {correctCount}</p>
        <p>Erros: {wrongCount}</p>
      </div>
      {currentQuestionIndex < questions.length ? (
        <div>
          <p>Pergunta {currentQuestion.id}: {currentQuestion.question}</p>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button radius="full"  variant="shadow" className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg" onClick={handleCheckAnswer}>Checar</Button>
        </div>
      ) : (
        <p>Parabéns! Você completou todas as perguntas.</p>
      )}
    </div>
  );
};

export default QuestionGame;

