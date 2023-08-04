// QuestionGameResults.tsx
import React from "react";

interface QuestionGameResultsProps {
  correctCount: number;
  totalQuestions: number;
}

const QuestionGameResults: React.FC<QuestionGameResultsProps> = ({
  correctCount,
  totalQuestions,
}) => {
  const average = totalQuestions > 0 ? correctCount / totalQuestions : 0;

  console.log("correctCount:", correctCount);
  console.log("totalQuestions:", totalQuestions);
  console.log("average:", average);

  return (
    <div>
      {correctCount > 0 && <p>Acertos: {correctCount}</p>}
      {correctCount > 0 && <p>Erros: {totalQuestions - correctCount}</p>}
      {correctCount === totalQuestions && (
        <>
          <p>Média: {average.toFixed(2)}</p>
          {average < 0.7 ? <p>Precisamos estudar mais!</p> : <p>Passou!</p>}
        </>
      )}
    </div>
  );
};

export default QuestionGameResults;
