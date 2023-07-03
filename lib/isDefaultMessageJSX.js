/**
 * Determines if the given node is a JSX element with the name "defaultMessage" and
 * is a child of a JSXOpeningElement with the name "FormattedMessage".
 *
 * @param {JSXElement} node - The JSX element node to check.
 * @returns {boolean} - True if the node is a JSX element with the name "defaultMessage"
 *     and is a child of a JSXOpeningElement with the name "FormattedMessage", false otherwise.
 */
module.exports = (node) => {
  return (
    node.name?.name === "defaultMessage" &&
    node.parent.type === "JSXOpeningElement" &&
    node.parent.name.name === "FormattedMessage"
  );
};
