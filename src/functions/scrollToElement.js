const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element == null) return;
    element.scrollIntoView({block: "start"});
};

export default scrollToElement;
