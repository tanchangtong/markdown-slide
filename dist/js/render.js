import Reveal from "https://cdn.jsdelivr.net/npm/reveal.js@4.1.0/dist/reveal.esm.js";
import Markdown from "https://cdn.jsdelivr.net/npm/reveal.js@4.1.0/plugin/markdown/markdown.esm.js";
import Highlight from "https://cdn.jsdelivr.net/npm/reveal.js@4.1.0/plugin/highlight/highlight.esm.js";
import Notes from "https://cdn.jsdelivr.net/npm/reveal.js@4.1.0/plugin/notes/notes.esm.js";
import Math from "https://cdn.jsdelivr.net/npm/reveal.js@4.1.0/plugin/math/math.esm.js";
import Search from "https://cdn.jsdelivr.net/npm/reveal.js@4.1.0/plugin/search/search.esm.js";
import { yamlDecode } from "../plugin/yaml/yaml.js";
import { question, Qevent } from "../plugin/question/question.js";
import css from "./css.js";
import { LaTeX } from "./LaTeX.js";
export default async function (text, dom = "") {
    let [yaml, newText] = yamlDecode(text);
    newText = LaTeX(question(newText));

    console.log(newText);
    let textBlob = new Blob([newText]);
    document.querySelector("[Xid=file]").dataset.markdown = URL.createObjectURL(textBlob);
    document.querySelector("title").innerText = yaml.title || "您的幻灯片";
    await css(`https://cdn.jsdelivr.net/npm/reveal.js/dist/theme/${yaml.theme || "white"}.css`);

    window.slide = new Reveal(document.querySelector(dom || ".reveal"), {
        touch: true,
        slideNumber: yaml.slideNumber || "c/t",
        center: true,
        hash: true,
        math: {
            mathjax: "https://cdn.jsdelivr.net/gh/mathjax/mathjax@2.7.8/MathJax.js",
            config: "TeX-AMS_HTML-full",
            TeX: { Macros: { RR: "{\\bf R}" } },
        },
        controls: true,
        transition: yaml.transition || "convex", // none/fade/slide(default)/convex/concave/zoom
        plugins: [Markdown, Highlight, Notes, Math, Search],
    });
    window.slide.initialize().then((res) => {
        Qevent();
    });
}
