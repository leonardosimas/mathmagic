import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentYear = new Date().getFullYear();
	return (
		<div className="relative flex flex-col h-screen bg-zinc-400">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow bg-zinc-400">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3 bg-zinc-400">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://github.com/leonardosimas"
					title="Github Leonardo Simas"
				>
					<p className="text-primary">Criado por Leonardo Simas versão alfa 0.01A</p>
    				<div className="text-default-600">© {currentYear}</div>
				</Link>
			</footer>
		</div>
	);
}
