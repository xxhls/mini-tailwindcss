(() => {
    const path = require("path");
    const fs = require("fs");

    const css = fs.readFileSync(path.join(__dirname, "..", "index.css"), "utf-8");
    fs.writeFileSync(path.join(__dirname, "..", "build/index.css"), css, {
        flag: "w"
    });
    
    const less = css;
    fs.writeFileSync(path.join(__dirname, "..", "build/index.less"), less, {
        flag: "w"
    });

    const sass = css.replace(/({)|(})|(;)/g, "");
    fs.writeFileSync(path.join(__dirname, "..", "build/index.sass"), sass, {
        flag: "w"
    });

    const scss = css;
    fs.writeFileSync(path.join(__dirname, "..", "build/index.scss"), scss, {
        flag: "w"
    });

    const styl = css.replace(/({)|(})|(:)|(;)/g, "");
    fs.writeFileSync(path.join(__dirname, "..", "build/index.styl"), styl, {
        flag: "w"
    });
})();
