// // if (!customElements.get('tab-component')) {
// //     customElements.define(
// //         'tab-component',
// //         class TabComponent extends HTMLElement {
// //             constructor() {
// //                 super();
// //                 const tabItems = this.querySelectorAll('tab-item');

// //                 tabItems.forEach((item) => {
// //                     item.addEventListener('click', this.showTab);
// //                 });
// //                 //console.log(tabItems);
// //             }
// //             showTab() {
// //                 console.log('Test click event...');
// //             }
// //         }
// //     );
// // }

// if (!customElements.get('tab-component')) {
//     customElements.define(
//         'tab-component',
//         class TabComponent extends HTMLElement {
//             constructor() {
//                 super();
//                 const tabItems = this.querySelectorAll('tab-item'); //Tìm tất cả các phần tử tab-item bên trong tab-component. Đây là các tab mà người dùng sẽ nhấp vào
//                 const tabContents = this.querySelectorAll('.tab-data'); //Tìm tất cả các phần tử .tab-data bên trong tab-component. Đây là nội dung của các tab

//                 tabItems.forEach((item) => {
//                     item.addEventListener('click', this.showTab.bind(this)); // Gắn sự kiện click cho mỗi tab-item. Khi một tab được nhấp, phương thức showTab sẽ được gọi. bind(this) đảm bảo rằng this bên trong showTab vẫn trỏ đến thành phần TabComponent
//                 });
//             }

//             showTab(event) {
//                 // Loại bỏ class 'active' khỏi tất cả các tab
//                 this.querySelectorAll('tab-item').forEach(item => item.classList.remove('active'));

//                 // Loại bỏ class 'active' khỏi tất cả nội dung tab
//                 this.querySelectorAll('.tab-data').forEach(content => content.classList.remove('active'));

//                 // Thêm class 'active' cho tab hiện tại
//                 event.currentTarget.classList.add('active');

//                 // Tìm nội dung tương ứng và hiển thị
//                 const tabContainerName = event.currentTarget.getAttribute('data-container'); // Lấy giá trị của thuộc tính data-container từ tab được nhấp. Đây là giá trị để xác định nội dung tương ứng cần hiển thị.
//                 const activeContent = this.querySelector(`.tab-data[data-container-name="${tabContainerName}"]`); //Tìm nội dung có thuộc tính data-container-name khớp với giá trị data-container của tab được nhấp.
//                 activeContent.classList.add('active'); //Thêm lớp active vào nội dung tương ứng, làm cho nó hiển thị.
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
