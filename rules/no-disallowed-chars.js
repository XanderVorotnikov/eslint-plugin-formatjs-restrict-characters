const checkDisallowedSymbols = require("../lib/checkDisallowedSymbols");
const isDefaultMessageFn = require("../lib/isDefaultMessageFn");
const isDefaultMessageJSX = require("../lib/isDefaultMessageJSX");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow characters matching the specified regular expression from using outside the formatjs provided api",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: false,
    schema: [
      {
        type: "string",
        description: `A string containing a regular expression covering disallowed characters without any slashes or regexp flags`,
      },
    ],
  },
  create: function (ctx) {
    const disallowedSymbols = ctx.options[0] || "";
    const regex = new RegExp(`[${disallowedSymbols}]`);

    return {
      JSXElement(node) {
        node.children?.forEach((child) => {
          if (child.type === "JSXText" && child.value) {
            checkDisallowedSymbols(child, regex, ctx);
          }
        });
      },
      Property(node) {
        if (!isDefaultMessageFn(node)) {
          checkDisallowedSymbols(node.value, regex, ctx);
        }
      },
      JSXAttribute(node) {
        if (!isDefaultMessageJSX(node)) {
          checkDisallowedSymbols(node.value, regex, ctx);
        }
      },
      Literal(node) {
        if (node.parent?.type === "Property" || node.parent?.type === "JSXAttribute") {
          return;
        }

        checkDisallowedSymbols(node, regex, ctx);
      },
    };
  },
};
