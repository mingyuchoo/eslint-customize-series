export = {
    rules: {
        "async-func-name": {
            create: function (context: { report: (arg0: { node: any; message: string; }) => void; }) {
                return {
                    FunctionDeclaration(node: { async: any; id: { name: string; }; }) {
                        if (node.async && !/Async$/.test(node.id.name)) {
                            context.report({
                                node,
                                message: "Async function name must end in 'Async'"
                            });
                        }
                    }
                }
            }
        }
    }
}
