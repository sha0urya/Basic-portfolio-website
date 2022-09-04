document.querySelector('.hide').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.show').style.display = 'inline';
        document.querySelector('.hide').style.display = 'none';
    }
    else {
        document.querySelector('.show').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.hide').style.display = 'inline';
        }, 300);
    }
})


