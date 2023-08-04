import DefaultLayout from "@/layouts/default";
import React from "react";

const Taboada: React.FC = () => {
  const generateTabuada = (numero: number) => {
    const tabuada = [];
    for (let i = 1; i <= 10; i++) {
      tabuada.push({
        tabuada: numero,
        numero: i,
        resultado: numero * i,
      });
    }
    return tabuada;
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-zinc-400">
        <div>
          <h1 className="text-2xl font-bold mb-4">Tabuada de 2 a 12</h1>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 12 }, (_, index) => index + 1).map(
              (numero) => (
                <div key={numero} className="border border-gray-300 p-2">
                  <div className="font-bold mb-2">Tabuada do {numero}</div>
                  {generateTabuada(numero).map((item) => (
                    <div key={item.numero} className="flex justify-center">
                      <span>
                        {item.tabuada} x {item.numero} = {item.resultado}
                      </span>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Taboada;
