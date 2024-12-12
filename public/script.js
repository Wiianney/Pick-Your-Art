document.addEventListener("DOMContentLoaded", () => {
    const goToPage2 = document.getElementById("go-to-page2");
    const goToIndex = document.getElementById("go-to-index");
    const content = document.getElementById("content");

    if (goToPage2) {
        goToPage2.addEventListener("click", async () => {
            const response = await fetch("/page2.html");
            const html = await response.text();
            content.innerHTML = html;
        });
    }

    if (goToIndex) {
        goToIndex.addEventListener("click", async () => {
            const response = await fetch("/index.html");
            const html = await response.text();
            content.innerHTML = html;
        });
    }
});
