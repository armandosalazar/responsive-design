const sidebar: HTMLElement | null = document.getElementById('sidebar');

if (sidebar) {
    sidebar.style.display = 'none';
}

function openSideBard(): void {
    sidebar && (sidebar.style.display = 'flex');
}

function closeSideBard(): void {
    sidebar && (sidebar.style.display = 'none');
}

document.addEventListener('click', (e: Event) => {
    const target: HTMLElement = e.target as HTMLElement;
    if (target.classList.contains('sidebar__toggle')) {
        console.log('sidebar::open');
        openSideBard();
    } else if (!(target.parentElement?.id === 'sidebar' || target.id === 'sidebar')) {
        if (sidebar?.style.display == 'flex') {
            console.log('sidebar::close');
            closeSideBard();
        }
    }
});