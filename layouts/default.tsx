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
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
					title="nextui.org homepage"
				>
					<p className="text-primary">Alien Technologies</p>
    				<div className="text-default-600">© {currentYear} All rights reserved.</div>
				</Link>
			</footer>
		</div>
	);
}
