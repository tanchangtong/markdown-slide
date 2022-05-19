function question(text) {
    return text.replace(/<\s*question[^>]*?>[\s\S]*?<\/question[^>]*?>/gi, function (it) {
        let final = it.replace(/\*{3}([\s\S]*?)\*{3}/, function (all, p1) {
            let res = p1.replace(/<\!--([\s\S]*?)-->/, function (all, pp1) {
                return `\n<displayNone data-ans='${pp1}'></displayNone>`;
            });
            return `\n<div>\n${res}\n<button class='QUESTION'>确定</button></div>`;
        });
        return `<div>${final}</div>`;
    });
}
function Qevent() {
    let Button = document.querySelectorAll(".QUESTION");
    Button.forEach((i) => {
        i.parentElement.parentElement.firstElementChild.querySelectorAll("input").forEach((i) => (i.disabled = false)); //设置选择框
        i.addEventListener("click", function (e) {
            let answer = e.target.parentElement.parentElement.querySelector("displaynone").dataset.ans.replace(/[^0123456789]/g, "");
            let selects = [...e.target.parentElement.parentElement.querySelectorAll("input")];
            let res = selects.reduce((a, b, index) => {
                b.checked && a.push(index + 1);
                return a;
            }, []);

            console.log(answer, res);
            if (answer == res.join("")) {
                Swal.fire(
                    "答案正确",
                    e.target.parentElement.parentElement.innerHTML
                        .match(/(?<=\<\!--)([\s\S]*?)(?=-->)/g)
                        .join("<br>")
                        .replace("\n", "<br>"),
                    "success"
                );
            } else {
                Swal.fire("答案错误", "再试一次吧", "error");
            }
        });
    });
}
export { question, Qevent };
