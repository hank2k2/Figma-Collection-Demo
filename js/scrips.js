if (!customElements.get('tab-component')) {
    customElements.define(
        'tab-component',
        class TabComponent extends HTMLElement {
            constructor() {
                super();
                const tabItems = this.querySelectorAll('tab-item'); // Tìm tất cả các phần tử tab-item
                const tabContents = this.querySelectorAll('.tab-data'); // Tìm tất cả các phần tử .tab-data

                tabItems.forEach((item) => {
                    item.addEventListener('click', this.showTab.bind(this)); // Gắn sự kiện click cho mỗi tab-item
                });
            }

            showTab(event) {
                // Kiểm tra xem tab hiện tại đã được chọn chưa
                if (event.currentTarget.classList.contains('active')) {
                    return; // Nếu tab đã được chọn (đã có lớp 'active'), không làm gì cả
                }

                // Loại bỏ class 'active' khỏi tất cả các tab
                this.querySelectorAll('tab-item').forEach(item => item.classList.remove('active'));

                // Loại bỏ class 'active' khỏi tất cả nội dung tab
                this.querySelectorAll('.tab-data').forEach(content => content.classList.remove('active'));

                // Thêm class 'active' cho tab hiện tại
                event.currentTarget.classList.add('active');

                // Tìm nội dung tương ứng và hiển thị
                const tabContainerName = event.currentTarget.getAttribute('data-container');
                const activeContent = this.querySelector(`.tab-data[data-container-name="${tabContainerName}"]`);
                activeContent.classList.add('active');
            }
        }
    );
}
