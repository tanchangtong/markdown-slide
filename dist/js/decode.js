export default async function (files) {
    let root,
        path = [];
    files.forEach((i) => path.push(i));
    root = path[0];

    let filesList = path.map((i) => i.replace(root, "")).filter((i) => i && !/\/$/.test(i));

    //找原文的序号
    let text = await files
        .file(/[^\/]*?md$/)[0]
        .async("string")
        .catch((err) => {});

    console.log(text);
    console.log(filesList);

    //生成 URL
    let filesBlob = {};
    await Promise.all(
        filesList.map(async (i) => {
            let Path = root + i;
            let blob = await files.file(Path).async("blob");
            filesBlob[Path] = URL.createObjectURL(new Blob([blob]));
        }, {})
    );

    console.log(filesBlob);

    //替换原来的 相对地址
    text = text.replace(/(?<=\[[\s\S]+\]\()[\s\S]+?(?=\))|(?<=src=['|"])[\s\S]+?(?=['|"])/g, function (words) {
        console.log(words);
        if (/^(http:\/\/)|^(https:\/\/)/.test(words)) {
            return words;
        }
        filesList.forEach((i) => {
            if (!(words.indexOf(i) == -1)) {
                let Path = root + i;
                console.log(Path);
                words = filesBlob[Path];
            }
        });

        return words;
    });
    console.log(text);
    return text;
}
