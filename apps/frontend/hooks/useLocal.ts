import { useRouter } from "next/router";

const lang = {
	en: {
		nav: ["Stock", "Delivery", "Store"],
	},
	ru: {
		nav: ["Акции", "Доставка еды", "Магазин у дома"],
	},
	hy: {
		nav: ["ֆոնդային", "Սննդի առաքում", "խանութ"],
	},
};

export default function useLocal() {
	const router = useRouter();
	const { locale }: any = router;

	console.log("lang[locale]", lang[locale]);

	return lang[locale] ? { locale: lang[locale] } : { locale: lang["en"] };
}
