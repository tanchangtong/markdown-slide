function LaTeX(text) {
    return text.replace(/^\$\$([\s\S]*?)^\$\$/gm, "`$$$$ $1$$$$`");
}

export { LaTeX };
