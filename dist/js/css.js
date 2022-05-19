async function css(url) {
    return new Promise((resolve) => {
        let tag;

        tag = document.createElement("link");
        tag.href = url;
        tag.rel = "stylesheet";
        tag.type = "text/css";

        tag.onload = () => {
            console.log(url + "%c 载入成功", "color:green");
            resolve(true);
        };
        document.body.appendChild(tag);
    });
}
export default css;
