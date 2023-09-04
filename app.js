const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

(async () => {
    const pdf = await mdToPdf({ path: 'you_markdown_file.md' }, { dest: 'outputPdf/output.pdf' });
    if(pdf){
        fs.writeFileSync(pdf.filename, pdf.content);
    }

})();