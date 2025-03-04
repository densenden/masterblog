document.addEventListener("DOMContentLoaded", () => {
    const keywordsInput = document.getElementById("keywordsInput");
    const keywordsContainer = document.getElementById("keywordsContainer");
    const keywordsHidden = document.getElementById("keywordsHidden");
    const form = document.querySelector("form");

    if (!keywordsInput || !keywordsContainer || !keywordsHidden || !form) {
        console.error("Required elements not found");
        return;
    }

    let keywords = [];

    keywordsInput.addEventListener("keyup", (event) => {
        if (event.key === "," || event.key === "Enter") {
            event.preventDefault();
            let keyword = keywordsInput.value.trim().replace(",", "");
            if (keyword && !keywords.includes(keyword)) {
                keywords.push(keyword);
                updateKeywordsUI();
                updateHiddenField();
            }
            keywordsInput.value = "";
        }
    });

    form.addEventListener("submit", () => {
        updateHiddenField();
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
        updateHiddenField();
    }

    function updateHiddenField() {
        keywordsHidden.value = keywords.join(',');
    }
});