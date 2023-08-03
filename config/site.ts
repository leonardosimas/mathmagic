export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Math Magic",
	description: "Pequeno jogo de Matemática.",
	navItems: [
		{
			label: "Início",
			href: "/",
		},
    {
      label: "Nível 1",
      href: "/nivel1",
    },
    {
      label: "Nível 2",
      href: "/nivel2",
    },
    {
      label: "Nível 3",
      href: "/nivel3",
    },
    {
      label: "Nível 4",
      href: "/nivel4",
    }
	],
	navMenuItems: [
		{
			label: "Início",
			href: "/",
		},
		{
			label: "Nível 1",
			href: "/nivel1",
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
