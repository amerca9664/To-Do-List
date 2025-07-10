import { COLORS } from './constStyles';
import { bodyElement, root } from './dom';

const setTheme = themeState => {
	const { darkTheme, lightTheme } = COLORS;

	const {
		backgroundBody: darkBackgroundBody,
		imageBackground: darkImageBackground,
		imageTheme: darkImageTheme,
		itemBackground: darkItemBackground,
		borderItem: darkbBorderItem,
		taskColor: darkTaskColor,
		checkedLabelColor: darkCheckedLabelColor,
	} = darkTheme;

	const {
		backgroundBody: lightBackgroundBody,
		imageBackground: lightImageBackground,
		imageTheme: lightImageTheme,
		itemBackground: lightItemBackground,
		borderItem: lightBorderItem,
		taskColor: lightTaskColor,
		checkedLabelColor: lightCheckedLabelColor,
	} = lightTheme;
	if (themeState) {
		root.style.setProperty(darkBackgroundBody.name, darkBackgroundBody.value);
		root.style.setProperty(darkImageTheme.name, darkImageTheme.value);
		root.style.setProperty(darkItemBackground.name, darkItemBackground.value);
		root.style.setProperty(darkbBorderItem.name, darkbBorderItem.value);
		root.style.setProperty(darkTaskColor.name, darkTaskColor.value);
		root.style.setProperty(
			darkCheckedLabelColor.name,
			darkCheckedLabelColor.value,
		);
		bodyElement.classList.remove(lightImageBackground.name);
		bodyElement.classList.add(darkImageBackground.name);
	} else {
		root.style.setProperty(lightBackgroundBody.name, lightBackgroundBody.value);
		root.style.setProperty(lightImageTheme.name, lightImageTheme.value);
		root.style.setProperty(lightItemBackground.name, lightItemBackground.value);
		root.style.setProperty(lightBorderItem.name, lightBorderItem.value);
		root.style.setProperty(lightTaskColor.name, lightTaskColor.value);
		root.style.setProperty(
			lightCheckedLabelColor.name,
			lightCheckedLabelColor.value,
		);
		bodyElement.classList.remove(darkImageBackground.name);
		bodyElement.classList.add(lightImageBackground.name);
	}
};

export { setTheme };
