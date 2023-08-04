// QuestionGame.tsx
import React, { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import questions from "../data/questions.json";

interface QuestionGameProps {
  totalQuestions: number;
  onGameFinished: (correctCount: number) => void;
}

const QuestionGame: React.FC<QuestionGameProps> = ({ totalQuestions, onGameFinished }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string>("");
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestionIndex === totalQuestions) {
      setIsGameFinished(true);
      onGameFinished(correctCount);
    }
  }, [currentQuestionIndex, totalQuestions, correctCount, onGameFinished]);

  const handleCheckAnswer = () => {
    if (answer.trim() === currentQuestion.answer) {
      setCorrectCount((prev) => prev + 1);
    }

    // Move para a próxima pergunta
    setCurrentQuestionIndex((prev) => prev + 1);
    setAnswer("");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleCheckAnswer();
    }
  };

  const average = correctCount / totalQuestions;

  return (
    <div>
      {currentQuestionIndex < totalQuestions ? (
        <div>
          <p>
            Pergunta {currentQuestion.id}: {currentQuestion.question}
          </p>
          <br/>
          <Input
            type="text"
            color="default"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={handleKeyPress} // Adicionando o evento onKeyPress
          />
          <br/>
          <div className="flex justify-center items-center h-full">
            <Button
              radius="full"
              variant="shadow"
              className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg"
              onClick={handleCheckAnswer}
            >
              Checar
            </Button>
          </div>
          <br/>
          <div>
            <p>Acertos: {correctCount}</p>
            <p>Erros: {currentQuestionIndex - correctCount}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>Parabéns! Você completou todas as perguntas.</p>
          {isGameFinished && (
            <>
              <p>Média: {average.toFixed(2)}</p>
              {average === 1 ? <p>Passei perfeito!</p> : <p>Precisamos estudar mais!</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionGame;
