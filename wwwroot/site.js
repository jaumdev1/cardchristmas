function downloadCard(selector) {
    var element = document.querySelector(selector);
    html2canvas(element).then(function(canvas) {
        var link = document.createElement('a');
        link.download = 'card.jpg';
        link.href = canvas.toDataURL("image/jpg");
        link.click();
    });
}
function addMessageToCard(sectionId, textareaId ) {
    var textarea = document.getElementById(textareaId);
    var section = document.getElementById(sectionId);
    console.log(section);
    if (textarea && section) {
        var paragraph = document.createElement("p");
        paragraph.style.fontSize = "1.5em";
        paragraph.textContent = textarea.value;

        // Adiciona o novo parágrafo à seção
        section.appendChild(paragraph);
    } else {
        console.log('Textarea or section not found.');
    }
}