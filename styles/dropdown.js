function menuForward (mainMenuId, currentMenuId)
{
    var container = document.getElementById(mainMenuId);
    container.setAttribute('scale','0 0 0');
    container.setAttribute('position', '100 100 100');

    var menu = document.getElementById(currentMenuId);
    menu.setAttribute('scale','1 1 1');
    menu.setAttribute('position', '0 0 -3');

}

function menuBackward(currentMenuId, mainMenuId)
{
    var container = document.getElementById(mainMenuId);
    container.setAttribute('scale','1 1 1');
    container.setAttribute('position', '0 0 -3');

    var menu = document.getElementById(currentMenuId);
    menu.setAttribute('scale','0 0 0');
    menu.setAttribute('position', '100 100 100');

}
