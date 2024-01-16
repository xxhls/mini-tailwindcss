(() => {
    const path = require("path");
    const fs = require("fs");

    const pkg = require(path.join(__dirname, "..", "package.json"));
    console.log(`当前版本为：${pkg.version}`);

    // JSON.stringify(pkg);
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("请输入版本号更新级别：（0|1|2）", level => {
        readline.close();
        if (level === "0" || level === "1" || level === "2") {
            const curVersion = pkg.version;
            const newVersion = curVersion.split(".").map(val => Number(val));
            newVersion[Number(level)]++;
            pkg.version = newVersion.join(".");
            fs.writeFileSync(path.join(__dirname, "..", "package.json"), JSON.stringify(pkg, null, 4), {
                flag: "w"
            });
            const { execSync } = require("child_process");
            execSync("npm publish");
        } else {
            console.log("错误的输入！");
            process.exit(1);
        }
    });
})();
