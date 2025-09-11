const fs = require("fs");
const path = require("path");

function checkComments(dir) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        // تجاهل node_modules
        if (filePath.includes("node_modules")) {
            return;
        }

        if (stat.isDirectory()) {
            checkComments(filePath); // يدخل في الفولدرات
        } else if (file.endsWith(".css") || file.endsWith(".scss")) {
            const content = fs.readFileSync(filePath, "utf8");
            const lines = content.split("\n");

            lines.forEach((line, index) => {
                // لو لقى /* من غير */
                if (line.includes("/*") && !line.includes("*/")) {
                    console.log(`⚠️ ملف: ${filePath} | السطر: ${index + 1}`);
                    console.log("   👉 فيه تعليق مفتوح محتاج يتقفل");
                }
            });
        }
    });
}

// يبدأ من جذر المشروع كله
checkComments(path.join(__dirname));
