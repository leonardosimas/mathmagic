// IndexPage.tsx
import React, { useState } from "react";
import DefaultLayout from "@/layouts/default";
import QuestionGame from "./QuestionGame";
import QuestionGameResults from "../components/QuestionGameResults";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import questions from "../data/questions.json";

export default function IndexPage() {
  const totalQuestions = questions.length;
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const handleGameFinished = (correctCount: number) => {
    setCorrectCount(correctCount);
  };

  const handleGameStart = () => {
    setGameStarted(true);
    setCorrectCount(0);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-zinc-400">
        <Card isBlurred shadow="sm" className="max-w-[400px] text-black">
          <CardHeader className="flex justify-center text-md font-bold">
            JOGOS DE MATEMÁTICA
          </CardHeader>
          <Divider />
          <CardBody>
            {correctCount < totalQuestions ? (
              <QuestionGame
                totalQuestions={totalQuestions}
                onGameFinished={handleGameFinished}
              />
            ) : (
              <div>
                <p>Parabéns! Você completou todas as perguntas.</p>
                <QuestionGameResults
                  correctCount={correctCount}
                  totalQuestions={totalQuestions}
                />
              </div>
            )}
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
