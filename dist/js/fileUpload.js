import render from "./render.js";
import decode from "./decode.js";

async function fileUpload(files, dom) {
    let text;
    if (/\.md/.test(files.name)) {
        text = await files.text();
    } else {
        let jszip = new JSZip();
        let content = await jszip.loadAsync(files);

        console.log(content);
        text = await decode(content);
    }

    render(text, dom);
    try {
        document.getElementById("inputBox").style.display = "none";
    } catch (err) {
        console.log(err);
    }
}
export default fileUpload;
