import DefaultLayout from "@/layouts/default";
import QuestionGame from "./QuestionGame";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-zinc-400">
        <div>
          <h1>Perguntas de Matemática</h1>
          <QuestionGame />
        </div>
      </section>
    </DefaultLayout>
  );
}
