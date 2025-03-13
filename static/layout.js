document.addEventListener("DOMContentLoaded", function () {
                fetch(headerUrl)
                    .then(response => response.text())
                    .then(data => {
                        document.querySelector("header").innerHTML = data;

                        const urlElement = document.getElementById("current-url");
                        if (urlElement) {
                            urlElement.textContent = "Current URL: " + window.location.href;
                        }
                    })
                    .catch(error => console.error("Error loading header:", error));

                fetch(footerUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.text();
                    })
                    .then(data => document.querySelector("footer").innerHTML = data)
                    .catch(error => console.error("Error loading footer:", error));
            });
