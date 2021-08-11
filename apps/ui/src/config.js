
export const theme = {
	colors: {
		primary: "#FA4415",
		primaryLightest: "#FFECE8",
		secondary: "#8b9dc3",
		gray: "#F3F4F6",
		grayDark: "#7A7E81",
		black: "#272A2F",
		blackLight: "#484B50",
		grayLight: "#B6B6B8",
		background: "#fff",
		fontColor:  "#7A7E81",
		navColor: "#272A2F"
	},
	width: {
		xl: 1280,
		l: 900,
		m: 750,
		s: 400,
	}
};


export const themeDark = {
	colors: {
		primary: "#FA4415",
		primaryLightest: "#FFECE8",
		secondary: "#8b9dc3",
		gray: "#F3F4F6",
		grayDark: "#7A7E81",
		black: "#272A2F",
		blackLight: "#484B50",
		grayLight: "#B6B6B8",
		background: "#272A2F",
		fontColor: "#fff",
		navColor: "#fff"
	},
	width: {
		xl: 1280,
		l: 900,
		m: 750,
		s: 400,
	}

};

export const siteConfig = {
	siteTitle: "Conduit", // Navigation and Site Title
	siteUrl: process.env.ROOT_URL || "https://next.org", // Domain of your site. No trailing slash!
	siteLanguage: "en", // Language Tag on <html> element
	siteLogo: "/logo.png", // Used for SEO and manifest, path to your image you placed in the 'static' folder
	siteDescription: "Real world example of nextjs SSR",
	author: "arrlancore", // Author for schemaORGJSONLD
	organization: "Open Source Organization",

	userTwitter: "@arrlancore", // Twitter Username
	ogSiteName: "Dwiki Arlan", // Facebook Site Name
	ogLanguage: "en_US",
	// googleAnalyticsID: process.env.GOOGLE_ANALYTIC_ID || 'UA-XXX123-1',

	// Manifest and Progress color
	themeColor: "#4147DC",
	backgroundColor: "#231C42",

	// Social component
	twitter: "https://twitter.com/arrlancore/",
	twitterHandle: "@arrlancore",
	github: "https://github.com/arrlancore/",
	youtube: "https://www.youtube.com/",
	rss: "https://next.org/blog/rss.xml",
};
