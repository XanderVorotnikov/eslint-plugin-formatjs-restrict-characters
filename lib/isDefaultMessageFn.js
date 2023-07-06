/**
 * Checks if the given node is the default message function.
 *
 * @param {object} node - The node to be checked.
 * @return {boolean} Returns true if the node is the default message function, otherwise false.
 */
module.exports = (node) => {
  return (
    node.key.name === "defaultMessage" &&
    node.parent?.type === "ObjectExpression" &&
    (node.parent?.parent?.callee.name === "formatMessage" ||
      node.parent?.parent?.callee?.property?.name === "formatMessage")
  );
};
