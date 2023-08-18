export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Math Magic",
	description: "Pequeno jogo de Matemática.",
	navItems: [
		{
			label: "Somar",
			href: "/SomarPage",
		},
		{
			label: "Diminuir",
			href: "/DiminuirPage",
		},
		{
			label: "Multiplicar",
			href: "/MultiplicarPage",
		},
		{
			label: "Dividir",
			href: "/DividirPage",
		},
		{
			label: "Taboada",
			href: "/Taboada",
		}
	],
	navMenuItems: [
		{
			label: "Somar",
			href: "/SomarPage",
		},
		{
			label: "Diminuir",
			href: "/DiminuirPage",
		},
		{
			label: "Multiplicar",
			href: "/MultiplicarPage",
		},
		{
			label: "Dividir",
			href: "/DividirPage",
		},
		{
			label: "Taboada",
			href: "/Taboada",
		},
	],
	links: {
		github: "https://github.com/leonardosimas",
		linkedin: "https://www.linkedin.com/in/leonardo-simas-b46271a5/",
		// docs: "https://nextui-docs-v2.vercel.app",
		// discord: "https://discord.gg/9b6yyZKmH4",
		// sponsor: "https://patreon.com/jrgarciadev"
	},
};
