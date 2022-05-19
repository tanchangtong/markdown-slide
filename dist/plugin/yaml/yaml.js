// yaml 题头的标签 未测试
const reg = /(?<=^-+[\r\n]+?[\s\S]*?[\r\n]+?-+[\r\n])/;
const reg1 = /(?<=^-+[\r\n]+?)[\s\S]*?(?=[\r\n]+?-+[\r\n]+?)/;
function yamlDecode(text) {
    let [yaml, ...newText] = reg.test(text) ? text.split(reg) : ["", text];
    let yamlText = yaml.match(reg1);
    console.log({ yamlText, newText });
    let resYAML = window.jsyaml.load(yamlText) || {};
    console.log(resYAML);
    return [resYAML, newText.join("")];
}
export { yamlDecode };
