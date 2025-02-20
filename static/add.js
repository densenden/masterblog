document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("blogForm");
    const keywordsInput = document.getElementById("keywordsInput");
    const keywordsContainer = document.getElementById("keywordsContainer");
    let keywords = [];

    // Keywords hinzufügen
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

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        let postData = Object.fromEntries(formData.entries());
        postData.keywords = keywords;

        console.log("Blog Post Data:", postData);
        alert("Blog post submitted! Check the console for details.");

        form.reset();
        keywords = [];
        updateKeywordsUI();
    });
});