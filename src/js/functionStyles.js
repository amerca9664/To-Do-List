import { COLORS } from "./constStyles";
import { root } from "./dom";

const setTheme = (themeState) => {
	const { darkTheme, lightTheme } = COLORS;
	console.log(lightTheme);
	const {
		backgroundBody: darkBackgroundBody,
		imageTheme: darkImageTheme,
		itemBackground: darkItemBackground,
		borderItem: darkbBorderItem,
	} = darkTheme;

	const {
		backgroundBody: lightBackgroundBody,
		imageTheme: lightImageTheme,
		itemBackground: lightItemBackground,
		borderItem: lightBorderItem,
	} = lightTheme;
	if (themeState) {
		root.style.setProperty(darkBackgroundBody.name, darkBackgroundBody.value);
		root.style.setProperty(darkImageTheme.name, darkImageTheme.value);
		root.style.setProperty(darkItemBackground.name, darkItemBackground.value);
		root.style.setProperty(darkbBorderItem.name, darkbBorderItem.value);
		console.log("dark");
	} else {
		root.style.setProperty(lightBackgroundBody.name, lightBackgroundBody.value);
		root.style.setProperty(lightImageTheme.name, lightImageTheme.value);
		root.style.setProperty(lightItemBackground.name, lightItemBackground.value);
		root.style.setProperty(lightBorderItem.name, lightBorderItem.value);
		console.log("not fark");
	}
};

export { setTheme };
