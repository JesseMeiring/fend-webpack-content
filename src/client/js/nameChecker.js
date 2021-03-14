function checkForName(inputText) {
    //console.log("::: Running checkForName :::", inputText);
    const regex = new RegExp('https://www\..*\/$');
    console.log(regex.test(inputText));
    return regex.test(inputText);
}

export { checkForName }
