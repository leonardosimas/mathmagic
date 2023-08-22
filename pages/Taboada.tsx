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
import useIsMobile from "@/hooks/useIsMobile";

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

  const isMobile = useIsMobile();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-zinc-400">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">
            Tabuada de 1 a 12
          </h1>
          <div className={`grid ${isMobile ? "grid-cols-3" : "grid-cols-6"} gap-4`}>
            {Array.from({ length: 12 }, (_, index) => index + 1).map(
              (numero) => (
                <Table
                  key={numero}
                  aria-label={`Tabuada do ${numero}`}
                  className="max-w-md"
                >
                  <TableHeader>
                    <TableColumn className="text-center font-bold">
                      Tabuada de {numero}
                    </TableColumn>
                  </TableHeader>
                  <TableBody>
                    {generateTabuada(numero).map((item) => (
                      <TableRow key={item.numero}>
                        <TableCell className="text-center font-bold">
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
