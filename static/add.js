document.addEventListener("DOMContentLoaded", () => {
    const keywordsInput = document.getElementById("keywordsInput");
    const keywordsContainer = document.getElementById("keywordsContainer");
    let keywords = [];

    keywordsInput.addEventListener("keyup", (event) => {
        if (event.key === "," || event.key === "Enter") {
            event.preventDefault();
            let keyword = keywordsInput.value.trim().replace(",", "");
            if (keyword && !keywords.includes(keyword)) {
                keywords.push(keyword);
                updateKeywordsUI();
            }
            keywordsInput.value = "";
        }
    });

    function updateKeywordsUI() {
        keywordsContainer.innerHTML = "";
        keywords.forEach((kw, index) => {
            let div = document.createElement("div");
            div.classList.add("keyword-box");
            div.textContent = kw;
            div.onclick = () => removeKeyword(index);
            keywordsContainer.appendChild(div);
        });
    }

    function removeKeyword(index) {
        keywords.splice(index, 1);
        updateKeywordsUI();
    }
});