// ----------------------------------------------------------------
// 4. Logic Chuyển Tab (Giao diện mới)
// ----------------------------------------------------------------
const navItems = document.querySelectorAll('.navigation-item[data-tab]');
const tabs = document.querySelectorAll('.dashboard-content');
const topbarTitle = document.getElementById('topbarTitle');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Cập nhật nút active
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Ẩn tất cả tab, mở tab được chọn
        const targetTab = item.getAttribute('data-tab');
        tabs.forEach(tab => tab.classList.add('hidden'));
        document.getElementById(`tab-${targetTab}`).classList.remove('hidden');
        
        // Cập nhật tiêu đề Topbar
        if(topbarTitle) {
            topbarTitle.textContent = item.querySelector('span:nth-child(2)').textContent;
        }
    });
});