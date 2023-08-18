import React from "react";
import DefaultLayout from "@/layouts/default";
import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Plus, Minus, X, Divide } from "phosphor-react";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";

export default function IndexPage() {
  const router = useRouter();

  const handleGameClick = (path: Url) => {
    router.push(path);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-zinc-400">
        <Card isBlurred shadow="sm" className="max-w-[400px] text-black">
          <CardHeader className="flex justify-center text-md font-bold">
            JOGOS DE MATEMÁTICA
          </CardHeader>
          <Divider />
          <CardBody className="text-center">
            <p className="font-bold mb-4">Escolha um jogo</p>
            <div className="flex gap-2">
              <Button
                radius="full"
                variant="shadow"
                className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg text-2xl w-12 h-12"
                onClick={() => handleGameClick("/SomarPage")}
              >
                <Plus size={32} />
              </Button>
              <Button
                radius="full"
                variant="shadow"
                className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg text-2xl w-12 h-12"
                onClick={() => handleGameClick("/DiminuirPage")}
              >
                <Minus size={32} />
              </Button>
              <Button
                radius="full"
                variant="shadow"
                className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg text-2xl w-12 h-12"
                onClick={() => handleGameClick("/MultiplicarPage")}
              >
                <X size={32} />
              </Button>
              <Button
                radius="full"
                variant="shadow"
                className="bg-gradient-to-tr from-green-500 to-gray-500 text-white shadow-lg text-2xl w-12 h-12"
                onClick={() => handleGameClick("/DividirPage")}
              >
                <Divide size={32} />
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
}
