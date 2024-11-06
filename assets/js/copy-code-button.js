function copyToClipboard(id) {
    const codeElement = document.getElementById(id);
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range); // Select the text

    try {
        document.execCommand("copy"); // Copy to clipboard
        alert("BibTeX-Code kopiert!");
    } catch (err) {
        alert("Fehler beim Kopieren: " + err);
    }

    window.getSelection().removeAllRanges(); // Deselect
}