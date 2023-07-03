Simple eslint plugin with only one rule (no-disallowed-chars) that restricts the use of the provided characters everywhere except when those characters are used as `<FormattedMessage defaultMessage="...your text"/>` or `formatMessage({defaultMessage: "...your text"})`.",

Example below will exclude all latin chars from your code except default messages:
```
module.exports  = {
	//...your eslint settings
	plugins: ["formatjs-restrict-characters"],
	rules: {
		"formatjs-restrict-characters/no-disallowed-chars": ["error", "a-zA-Z"],
	},
};
```