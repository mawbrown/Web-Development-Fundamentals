function showPattern() {
    const colorsArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;
    // let borderRadius = 50;

    while (width > 50) {
        const randomColorIdx = Math.floor(Math.random() * colorsArray.length);
        const newDiv = document.createElement("div");

        newDiv.style.top = topPosition + "px";
        newDiv.style.left = leftPosition + "px";
        newDiv.style.width = width + "px";
        newDiv.style.height = height + "px";
        newDiv.style.background = colorsArray[randomColorIdx];
        // newDiv.style.borderRadius = borderRadius + "%";

        document.body.appendChild(newDiv);
        
        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
    }
}