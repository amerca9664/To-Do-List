import { COLORS } from './constStyles';
import { bodyElement, labelCheckboxThemeElement, root } from './dom';

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

		root.style.setProperty(darkItemBackground.name, darkItemBackground.value);
		root.style.setProperty(darkbBorderItem.name, darkbBorderItem.value);
		root.style.setProperty(darkTaskColor.name, darkTaskColor.value);
		root.style.setProperty(
			darkCheckedLabelColor.name,
			darkCheckedLabelColor.value,
		);
		bodyElement.classList.remove(lightImageBackground.name);
		bodyElement.classList.add(darkImageBackground.name);

		labelCheckboxThemeElement[0].classList.remove(lightImageTheme.name);
		labelCheckboxThemeElement[0].classList.add(darkImageTheme.name);
	} else {
		root.style.setProperty(lightBackgroundBody.name, lightBackgroundBody.value);

		root.style.setProperty(lightItemBackground.name, lightItemBackground.value);
		root.style.setProperty(lightBorderItem.name, lightBorderItem.value);
		root.style.setProperty(lightTaskColor.name, lightTaskColor.value);
		root.style.setProperty(
			lightCheckedLabelColor.name,
			lightCheckedLabelColor.value,
		);
		bodyElement.classList.remove(darkImageBackground.name);
		bodyElement.classList.add(lightImageBackground.name);

		labelCheckboxThemeElement[0].classList.remove(darkImageTheme.name);
		labelCheckboxThemeElement[0].classList.add(lightImageTheme.name);
	}
};

export { setTheme };
