document.addEventListener("DOMContentLoaded", function () {
                                               fetch("static/header.html")
                                                   .then(response => response.text())
                                                   .then(data => {
                                                       document.querySelector("header").innerHTML = data;

                                                       const label = document.querySelector(".mode-toggle-label");
                                                       let isNightMode = false;

                                                       function toggleMode() {
                                                           isNightMode = !isNightMode;
                                                           const mode = isNightMode ? "night" : "day";
                                                           document.documentElement.setAttribute("data-mode", mode);
                                                           label.textContent = isNightMode ? "🌞" : "🌜";
                                                       }

                                                       label.addEventListener("click", toggleMode);
                                                   })
                                                   .catch(error => console.error("Error loading header:", error));

                                               fetch("static/footer.html")
                                                   .then(response => response.text())
                                                   .then(data => document.querySelector("footer").innerHTML = data)
                                                   .catch(error => console.error("Error loading footer:", error));
                                           });