
let icons = {};

export const addIcon = (name, group, icon, tags=[]) => {
    if(!Array.isArray(icons[group])) icons[group] = [];
    icons[group].push({name, icon, tags});
}

export const getIcons = () => {
    return icons;
}