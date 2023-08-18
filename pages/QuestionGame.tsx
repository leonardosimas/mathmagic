// import React, { useState } from "react";
// import { Button, Input } from "@nextui-org/react";
// import DefaultLayout from "@/layouts/default";

// interface SomaGameProps {
//   onGameFinished: (correctCount: number) => void;
// }

// const SomaGame: React.FC<SomaGameProps> = ({ onGameFinished }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [answer, setAnswer] = useState<string>("");
//   const [correctCount, setCorrectCount] = useState<number>(0);

//   const generateRandomNumber = () => Math.floor(Math.random() * 10) + 10;

//   const generateQuestion = () => {
//     const number1 = generateRandomNumber();
//     const number2 = generateRandomNumber();
//     const question = `Quanto é ${number1} + ${number2}?`;
//     const answer = (number1 + number2).toString();
//     return { question, answer };
//   };

//   const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());

//   const handleCheckAnswer = () => {
//     if (answer.trim() === currentQuestion.answer) {
//       setCorrectCount((prev) => prev + 1);
//     }

//     if (currentQuestionIndex < 9) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setAnswer("");
//       setCurrentQuestion(generateQuestion()); // Gerar nova pergunta
//     } else {
//       onGameFinished(correctCount);
//     }
//   };

//   const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       handleCheckAnswer();
//     }
//   };

//   return (
//     <DefaultLayout>
//       <div>
//         <div>
//           <p>
//             Pergunta {currentQuestionIndex + 1}: {currentQuestion.question}
//           </p>
//           <br />
//           <Input
//             type="text"
//             color="default"
//             value={answer}
//             onChange={(e) => setAnswer(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <br />
//           <div className="flex justify-center items-center h-full">
//             <Button
//               radius="full"
//               variant="shadow"
//               className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg"
//               onClick={handleCheckAnswer}
//             >
//               Checar
//             </Button>
//           </div>
//           <br />
//           <div>
//             <p>Acertos: {correctCount}</p>
//             <p>Erros: {currentQuestionIndex - correctCount}</p>
//           </div>
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// };

// export default SomaGame;
