let activeThemeId = 1;
const themes = [
    {
        id: 1,
        name: "Theme1",
        meta: {
            background: 'red',
        }
    },
    {
        id: 2,
        name: "Theme2",
        meta: {
            background: 'blue',
        }
    }
];

function getTheme(id) {
    return themes.filter(theme => theme.id == id)[0];
}

function setTheme(themeId) {
    activeThemeId = themeId;
    // styling
    let theme = getTheme(activeThemeId);

    console.log("You have selected - ", theme.name);

    styleBody(theme.meta)
    // store locally
    localStorage.setItem("activeThemeId", activeThemeId);
}

function styleBody(style) {
    document.body.style.background = style.background;
}

function login() {
    let themeId = localStorage.getItem("activeThemeId");
    if(!themeId) themeId = 1;
    setTheme(themeId);
}

// call login
login();
