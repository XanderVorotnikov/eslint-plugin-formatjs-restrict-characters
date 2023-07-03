/**
 * Checks for disallowed symbols in the given node's value and reports an error if found.
 *
 * @param {Object} node - The node to check for disallowed symbols.
 * @param {RegExp} regex - The regular expression to match against the text.
 * @param {Object} context - The context object provided by the ESLint rule.
 * @returns {void}
 */
module.exports = (node, regex, context) => {
  const text = node?.value ?? "";
  if (regex.test(text)) {
    context.report({
      node,
      message:
        "Provided symbols are allowed only as a 'defaultMessage' prop of <FormattedMessage/> or as a property in first argument of formatMessage function.",
    });
  }
};
