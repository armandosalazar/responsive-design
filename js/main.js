var sidebar = document.getElementById('sidebar');
if (sidebar) {
    sidebar.style.display = 'none';
}
function openSideBard() {
    sidebar && (sidebar.style.display = 'flex');
}
function closeSideBard() {
    sidebar && (sidebar.style.display = 'none');
}
document.addEventListener('click', function (e) {
    var _a;
    var target = e.target;
    if (target.classList.contains('sidebar__toggle')) {
        console.log('sidebar::open');
        openSideBard();
    }
    else if (!(((_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.id) === 'sidebar' || target.id === 'sidebar')) {
        if ((sidebar === null || sidebar === void 0 ? void 0 : sidebar.style.display) == 'flex') {
            console.log('sidebar::close');
            closeSideBard();
        }
    }
});
