// if (!customElements.get('tab-component')) {
//     customElements.define(
//         'tab-component',
//         class TabComponent extends HTMLElement {
//             constructor() {
//                 super();
//                 const tabItems = this.querySelectorAll('tab-item');

//                 tabItems.forEach((item) => {
//                     item.addEventListener('click', this.showTab);
//                 });
//                 //console.log(tabItems);
//             }
//             showTab() {
//                 console.log('Test click event...');
//             }
//         }
//     );
// }

if (!customElements.get('tab-component')) {
    customElements.define(
        'tab-component',
        class TabComponent extends HTMLElement {
            constructor() {
                super();
                const tabItems = this.querySelectorAll('tab-item');
                const tabContents = this.querySelectorAll('.tab-data');

                tabItems.forEach((item) => {
                    item.addEventListener('click', this.showTab.bind(this));
                });
            }

            showTab(event) {
                // Loại bỏ class 'active' khỏi tất cả các tab
                this.querySelectorAll('tab-item').forEach(item => item.classList.remove('active'));

                // Loại bỏ class 'active' khỏi tất cả nội dung tab
                this.querySelectorAll('.tab-data').forEach(content => content.classList.remove('active'));

                // Thêm class 'active' cho tab hiện tại
                event.currentTarget.classList.add('active');

                // Tìm nội dung tương ứng và hiển thị
                const tabContainerName = event.currentTarget.getAttribute('data-container');
                const activeContent = this.querySelector(`.tab-data[data-container-name="${tabContainerName}"]`);
                if (activeContent) {
                    activeContent.classList.add('active');
                }
            }
        }
    );
}
