import React, { useState } from "react";
import DefaultLayout from "@/layouts/default";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";

const generateRandomNumber = () => Math.floor(Math.random() * 100);

const generateQuestions = () =>
  Array.from({ length: 10 }, () => ({
    num1: generateRandomNumber(),
    num2: generateRandomNumber(),
  }));

export default function DiminuirPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [errorCount, setErrorCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [questions, setQuestions] = useState(generateQuestions());

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleCheckAnswer = () => {
    const answer = userAnswer.trim();
    const { num1, num2 } = questions[currentQuestion];

    // Check criado para determinar qual número é maior
    const maxNumber = Math.max(num1, num2);
    const minNumber = Math.min(num1, num2);

    const correctAnswer = (maxNumber - minNumber).toString();

    if (answer === correctAnswer) {
      setCorrectCount((prevCount) => prevCount + 1);
      // Espaço para criar animação de acerto e de erro
    } else {
      setErrorCount((prevCount) => prevCount + 1);
      // Espaço para criar animação de acerto e de erro
    }

    setIsAnswerChecked(true);

    // Atualizar a pergunta independentemente da resposta estar certa ou errada
    if (currentQuestion < questions.length - 1) {
      handleNextQuestion();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !isAnswerChecked) {
      handleCheckAnswer();
      if (currentQuestion < questions.length - 1) {
        handleNextQuestion();
      } else {
        setIsGameOver(true);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setUserAnswer("");
      setIsAnswerChecked(false);
    }
  };

  const handleRestartGame = () => {
    setCurrentQuestion(0);
    setCorrectCount(0);
    setErrorCount(0);
    setUserAnswer("");
    setIsAnswerChecked(false);
    setIsGameOver(false);
    setQuestions(generateQuestions());
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-zinc-400">
        <Card isBlurred shadow="sm" className="max-w-[400px] text-black">
          <CardHeader className="flex justify-center items-center text-md font-bold h-12">
            Jogo de Diminuir
          </CardHeader>
          <Divider />
          <CardBody className="text-center">
            <div className="flex flex-col items-center font-bold gap-2">
              {isGameOver ? (
                <>
                  <p>
                    Fim do Jogo. Acertos: {correctCount}, Erros: {errorCount}
                  </p>
                  <Button
                    radius="full"
                    variant="shadow"
                    className="bg-gradient-to-tr from-blue-500 to-gray-500 text-white shadow-lg"
                    onPress={handleRestartGame}
                  >
                    Reiniciar Jogo
                  </Button>
                </>
              ) : (
                <>
                  <p>Questão {currentQuestion + 1}</p>
                  <p>
                    Quanto é{" "}
                    {Math.max(
                      questions[currentQuestion].num1,
                      questions[currentQuestion].num2
                    )}{" "}
                    -{" "}
                    {Math.min(
                      questions[currentQuestion].num1,
                      questions[currentQuestion].num2
                    )}
                    ?
                  </p>
                  <Input
                    type="text"
                    value={userAnswer}
                    onChange={handleAnswerChange}
                    onKeyPress={handleKeyPress}
                    disabled={isAnswerChecked}
                    className="text-center mt-1 mb-1 w-20 "
                  />
                  <Button
                    radius="full"
                    variant="shadow"
                    className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg"
                    onPress={handleCheckAnswer}
                    onTouchEnd={handleCheckAnswer}
                    disabled={isAnswerChecked}
                  >
                    Verificar
                  </Button>
                  <p>Acertos: {correctCount}</p>
                  <p>Erros: {errorCount}</p>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
