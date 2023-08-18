import DefaultLayout from "@/layouts/default";
import {
  Divider,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
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
          <h1 className="flex text-2xl font-bold mb-4 justify-center">
            Tabuada de 1 a 12
          </h1>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 12 }, (_, index) => index + 1).map(
              (numero) => (
                <Table aria-label={`Tabuada do ${numero}`}>
                  <TableHeader>
                    <TableColumn className="flex font-bold justify-center items-center">Tabuada de {numero}</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {generateTabuada(numero).map((item) => (
                      <TableRow key={item.numero}>
                        <TableCell className="flex font-bold justify-center justify-items-center">
                          {item.tabuada} X {item.numero} = {item.resultado}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )
            )}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Taboada;
