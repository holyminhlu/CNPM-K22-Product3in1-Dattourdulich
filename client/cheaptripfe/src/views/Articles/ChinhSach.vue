<template>
  <div class="policy-page-container">
    <!-- Parallax background -->
    <div class="parallax-bg"></div>
    
    <!-- Floating elements -->
    <div class="floating-elements">
      <div class="floating-icon" v-for="i in 6" :key="i" :style="{ animationDelay: `${i * 0.5}s` }">
        <i class="fas fa-shield-alt"></i>
      </div>
    </div>

    <div class="policy-layout">
      <!-- Cột menu bên trái -->
      <aside class="policy-sidebar">
        <div class="sidebar-header">
          <h2 class="sidebar-title">
            <i class="fas fa-gavel"></i>
            Chính sách
          </h2>
        </div>
        <ul class="policy-menu">
          <li
            v-for="(policy, index) in policies"
            :key="policy.id"
            class="menu-item"
            :class="{ active: activePolicy.id === policy.id }"
            @click="selectPolicy(policy)"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="menu-icon">
              <i :class="getPolicyIcon(policy.id)"></i>
            </div>
            <span class="menu-text">{{ policy.title }}</span>
            <div class="menu-indicator"></div>
          </li>
        </ul>
      </aside>
      <!-- Cột nội dung bên phải với hiệu ứng chuyển đổi -->
      <transition name="fade-slide" mode="out-in">
        <main class="policy-content" :key="activePolicy.id">
          <div class="content-header">
            <h1 class="content-title">
              <i :class="getPolicyIcon(activePolicy.id)"></i>
              {{ activePolicy.title }}
            </h1>
            <div class="content-breadcrumb">
              <span>Chính sách</span>
              <i class="fas fa-chevron-right"></i>
              <span>{{ activePolicy.title }}</span>
            </div>
          </div>
          <div class="content-body" v-html="activePolicy.content"></div>
          
          <!-- Interactive elements -->
          <div class="content-actions">
            <button class="action-btn print-btn" @click="printContent">
              <i class="fas fa-print"></i>
              In chính sách
            </button>
            <button class="action-btn share-btn" @click="shareContent">
              <i class="fas fa-share-alt"></i>
              Chia sẻ
            </button>
          </div>
        </main>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChinhSach',
  data() {
    return {
      activePolicy: {},
      policies: [
        {
          id: 'dieu-khoan',
          title: 'Điều kiện & điều khoản',
          content: `
            <h3>ĐIỀU KIỆN & ĐIỀU KHOẢN DÀNH CHO KHÁCH HÀNG</h3>
            <p>Khi thực hiện đặt dịch vụ Cheaptrip (Vé máy bay, Khách sạn, Tour, …), Quý Khách chấp thuận những điều kiện và điều khoản dưới đây:</p>
            
            <p><strong>1. Định nghĩa:</strong></p>
            <p><strong>- Dịch vụ Cheaptrip/dịch vụ:</strong> là việc Cheaptrip thay mặt khách hàng thực hiện đặt phòng khách sạn, đặt vé máy bay, tour, tư vấn, đặt dịch vụ, hỗ trợ sau đặt dịch vụ, … với đối tác.</p>
            <p><strong>- Nhà cung cấp:</strong> bao gồm khách sạn, hãng hàng không, tour, nhà xe, …</p>
            <p><strong>- Phí dịch vụ:</strong> là khoản phí mà người sử dụng cuối hoặc khách hàng phải trả khi họ đặt các dịch vụ như khách sạn, vé máy bay, tours... được cung cấp bởi Cheaptrip. Khoản phí dịch vụ mà khách hàng đã thanh toán sẽ không được hoàn trả trong bất kỳ tình huống nào. Đây là một phí được áp dụng để bù đắp cho những nỗ lực của Cheaptrip trong việc cung cấp nguồn nhân lực và kiến thức chuyên môn, nhằm đáp ứng và đồng hành với các nhu cầu và mong muốn của khách hàng.</p>
            <p><strong>- Phí tiện ích:</strong> là khoản phí mà Cheaptrip thu khi khách hàng sử dụng dịch vụ tại website và ứng dụng điện thoại của Cheaptrip. Mức phí tiện ích được tính theo từng dịch vụ và có thể thay đổi (mà không cần thông báo trước) tùy thuộc vào từng giai đoạn. Mục đích của việc áp dụng phí tiện ích là nâng cao chất lượng dịch vụ và cải thiện hệ thống cung cấp dịch vụ của Cheaptrip, nhằm mang lại trải nghiệm tốt hơn cho khách hàng.</p>
            
            <p><strong>2. Độ tuổi:</strong></p>
            <p>Quý Khách phải từ 18 tuổi trở lên mới được phép đặt dịch vụ Cheaptrip.</p>
            
            <p><strong>3. Thanh toán</strong></p>
            <p>Cheaptrip.id.vn có nhiều phương thức thanh toán để thuận tiện cho Khách hàng khi đặt dịch vụ, Khách hàng có thể tham khảo và lựa chọn phương thức phù hợp:</p>
            <ul>
                <li><strong>Chuyển khoản qua ngân hàng:</strong> Sau khi đặt hàng, Khách hàng chuyển khoản số tiền đơn hàng vào tài khoản của Cheaptrip.id.vn tại các hệ thống ngân hàng.</li>
                <li><strong>Thanh toán bằng thẻ ATM nội địa:</strong> Khách hàng sử dụng thẻ ATM nội địa để thanh toán.</li>
                <li><strong>Thanh toán bằng thẻ tín dụng quốc tế:</strong> Khách hàng sử dụng thẻ Visa/ Master Card/ JCB để thanh toán.</li>
                <li><strong>Thanh toán tại cửa hàng tiện lợi Payoo hoặc qua QR code Payoo</strong></li>
                <li><strong>Thanh toán tại các Văn phòng của Cheaptrip.id.vn:</strong> tại Hồ Chí Minh, Hà Nội, Cần Thơ</li>
            </ul>
            
            <p><strong>4. Xác nhận thông tin đặt dịch vụ:</strong></p>
            <p>Thông tin đặt dịch vụ được xác nhận thể hiện trong email xác nhận (đặt phòng, combo, vé máy bay, …) được gởi từ Cheaptrip đến email Quý Khách đã đăng ký tại thời điểm đặt phòng với Cheaptrip và trên hệ thống Cheaptrip (bao gồm website và ứng dụng Cheaptrip). Đây là cơ sở xác định các dịch vụ cung cấp cho khách hàng.</p>
            <p>Trường hợp Quý Khách thực hiện thanh toán trễ hơn hạn thanh toán được thông báo từ Cheaptrip.id.vn qua email, website, ứng dụng, việc đặt dịch vụ của Quý khách sẽ không còn hiệu lực.</p>
            <p>Chúng tôi không đảm bảo bất kỳ thông tin đặt phòng nào cho đến khi quý khách nhận được email xác nhận lần cuối.</p>
            <p>Khi thực hiện đặt dịch vụ và thanh toán, xem như Quý Khách đã đồng ý các điều kiện, điều khoản, chính sách áp dụng của Cheaptrip và nhà cung cấp trước, trong và sau quá trình sử dụng dịch vụ.</p>
            
            <p><strong>5. Thực hiện thay đổi cho thông tin đặt dịch vụ:</strong></p>
            <p>Sau khi đặt dịch vụ thành công (dịch vụ đã được xác nhận qua email), nếu Quý Khách muốn thay đổi thông tin đặt dịch vụ, vui lòng gởi yêu cầu đến email <strong>cheap.trip84@gmail.com</strong> hoặc số điện thoại <strong>09XXXXXXXX</strong>. Chúng tôi sẽ cố gắng để hỗ trợ Quý Khách một cách tốt nhất, tuy nhiên chúng tôi không đảm bảo mọi yêu cầu thay đổi sẽ được thực hiện.</p>
            <p>Nếu Quý Khách được phép hủy hoặc thay đổi Đặt dịch vụ nhưng không hủy hoặc thay đổi trước thời hạn cho phép, Quý Khách sẽ có trách nhiệm trả phí hủy theo quy định tại thời điểm đó, thuế hoặc phí khôi phục thuế (áp dụng hiện hành theo quy định), phí dịch vụ hoặc phí đặt dịch vụ khác dù Quý Khách có sử dụng dịch vụ hay không.</p>
            <p>Nếu Quý Khách không sử dụng dịch vụ (lên máy bay, tham gia tour, nhận phòng khách sạn, …) vào ngày/đêm đặt dịch vụ đầu tiên nhưng dự định nhận phòng/tiếp tục sử dụng dịch vụ cho các đêm tiếp theo thì Quý Khách phải xác nhận với Cheaptrip và nhà cung cấp/đơn vị liên kết của Cheaptrip tối thiểu 6 tiếng trước giờ khởi hành/ngày/đêm đặt dịch vụ đầu tiên và trong thời gian làm việc (08.00 am – 20.00 pm). Nếu Quý Khách không làm như vậy, Đặt dịch vụ của Quý Khách sẽ bị hủy và Quý Khách sẽ không được sử dụng dịch vụ cũng như hoàn trả.</p>
            <p>Trường hợp Quý Khách muốn thay đổi, hủy, hoàn tiền cho đặt dịch vụ đã đặt vì bất kỳ lý do gì vui lòng liên hệ Cheaptrip để được hỗ trợ trước khi sử dụng dịch vụ/nhận phòng (check in)/ khởi hành hoặc theo thời gian quy định tại thời điểm đó. Cheaptrip sẽ nỗ lực hết sức để hỗ trợ Quý Khách trong khả năng của Cheaptrip.</p>
          `,
        },
        {
          id: 'tra-gop',
          title: 'Cách thức chuyển đổi trả góp',
          content: `
            <h3>CÁCH THỨC CHUYỂN ĐỔI TRẢ GÓP</h3>
            <p>CheapTrip mang đến chương trình trả góp 0% lãi suất qua thẻ tín dụng, giúp Quý khách dễ dàng chi trả cho các chuyến đi mơ ước. Chương trình được áp dụng phối hợp với các đối tác ngân hàng uy tín tại Việt Nam.</p>
            
            <p><strong>1. Điều kiện áp dụng:</strong></p>
            <ul>
              <li>Áp dụng cho các đơn hàng có giá trị thanh toán cuối cùng từ <strong>3.000.000 VNĐ</strong> trở lên.</li>
              <li>Áp dụng cho chủ thẻ tín dụng (Credit Card) của các ngân hàng trong danh sách đối tác (Visa, Mastercard, JCB).</li>
              <li>Kỳ hạn trả góp linh hoạt: 3, 6, 9, 12 tháng.</li>
            </ul>

            <p><strong>2. Các bước thực hiện:</strong></p>
            <ol>
              <li><strong>Bước 1:</strong> Chọn dịch vụ (Tour, Combo, Khách sạn) và tiến hành đặt dịch vụ.</li>
              <li><strong>Bước 2:</strong> Tại trang thanh toán, chọn phương thức "Thanh toán trả góp 0% qua thẻ tín dụng".</li>
              <li><strong>Bước 3:</strong> Chọn ngân hàng và kỳ hạn trả góp mong muốn.</li>
              <li><strong>Bước 4:</strong> Điền thông tin thẻ tín dụng và xác nhận thanh toán. Giao dịch sẽ được chuyển đổi thành khoản trả góp trong vòng 7-10 ngày làm việc.</li>
            </ol>

            <p><strong>Lưu ý:</strong> Phí chuyển đổi trả góp (nếu có) sẽ được hiển thị rõ ràng trước khi Quý khách xác nhận thanh toán. Chính sách hủy/đổi cho các đơn hàng trả góp có thể khác với các đơn hàng thanh toán thông thường.</p>
          `,
        },
        {
          id: 'quy-che',
          title: 'Quy chế hoạt động',
          content: `
            <h3>QUY CHẾ HOẠT ĐỘNG CỦA WEBSITE</h3>
            <p><strong>1. Nguyên tắc chung:</strong></p>
            <p>Website Cheaptrip.id.vn là một sàn giao dịch thương mại điện tử chuyên cung cấp các dịch vụ du lịch. Mọi hoạt động trên website phải tuân thủ pháp luật Việt Nam và các quy định được nêu trong quy chế này.</p>
            
            <p><strong>2. Quy định chung:</strong></p>
            <ul>
                <li><strong>Người dùng:</strong> Là mọi cá nhân, tổ chức truy cập và sử dụng dịch vụ trên website.</li>
                <li><strong>Nhà cung cấp:</strong> Là các đối tác (khách sạn, hãng bay, công ty tour) cung cấp dịch vụ.</li>
                <li>Nghiêm cấm các hành vi lừa đảo, phá hoại, hoặc sử dụng website cho các mục đích bất hợp pháp.</li>
            </ul>

            <p><strong>3. Quy trình giao dịch:</strong></p>
            <p>Quy trình đặt dịch vụ tuân thủ các bước: Tìm kiếm thông tin -> Chọn dịch vụ -> Xác nhận giỏ hàng -> Cung cấp thông tin khách hàng -> Chọn phương thức thanh toán -> Hoàn tất đặt dịch vụ và nhận xác nhận.</p>

            <p><strong>4. Giải quyết tranh chấp:</strong></p>
            <p>Mọi tranh chấp phát sinh sẽ được ưu tiên giải quyết thông qua thương lượng, hòa giải. Trường hợp không đạt được thỏa thuận, tranh chấp sẽ được đưa ra giải quyết tại Tòa án có thẩm quyền tại TP. Hồ Chí Minh.</p>
          `,
        },
        {
          id: 'rieng-tu',
          title: 'Chính sách riêng tư',
          content: `
            <h3>CHÍNH SÁCH VỀ QUYỀN RIÊNG TƯ</h3>
            <p>Chúng tôi cam kết bảo vệ sự riêng tư của bạn. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.</p>
            <p><strong>1. Mục đích thu thập thông tin:</strong></p>
            <ul>
              <li>Xử lý các yêu cầu đặt dịch vụ và thanh toán.</li>
              <li>Gửi xác nhận và các thông tin liên quan đến giao dịch.</li>
              <li>Cung cấp dịch vụ hỗ trợ khách hàng.</li>
              <li>Gửi các chương trình khuyến mãi, bản tin (nếu bạn đăng ký).</li>
              <li>Cải thiện chất lượng dịch vụ và trải nghiệm người dùng.</li>
            </ul>
            <p><strong>2. Phạm vi thu thập thông tin:</strong></p>
            <p>Chúng tôi thu thập các thông tin sau: Họ tên, số điện thoại, email, địa chỉ, thông tin thanh toán (được mã hóa).</p>
            <p><strong>3. Phạm vi sử dụng thông tin:</strong></p>
            <p>Thông tin của bạn chỉ được chia sẻ cho các nhà cung cấp dịch vụ (khách sạn, hãng bay) để hoàn thành việc đặt dịch vụ. Chúng tôi không bán, cho thuê hoặc chia sẻ thông tin của bạn cho bên thứ ba nào khác không liên quan.</p>
          `,
        },
        {
          id: 'bao-mat',
          title: 'Chính sách bảo mật',
          content: `
            <h3>CHÍNH SÁCH BẢO MẬT</h3>
            <p><strong>1. Bảo mật thanh toán:</strong></p>
            <p>CheapTrip sử dụng các cổng thanh toán của bên thứ ba đã được cấp phép và tuân thủ các tiêu chuẩn bảo mật quốc tế (PCI DSS). Mọi thông tin thẻ của Quý khách được mã hóa bằng giao thức SSL (Secure Sockets Layer) để đảm bảo an toàn trong quá trình truyền tải dữ liệu. Chúng tôi không lưu trữ thông tin thẻ tín dụng của khách hàng.</p>
            
            <p><strong>2. Bảo mật dữ liệu cá nhân:</strong></p>
            <p>Hệ thống của chúng tôi được bảo vệ bởi tường lửa và các biện pháp an ninh mạng tiên tiến để ngăn chặn truy cập trái phép. Quyền truy cập vào dữ liệu khách hàng được giới hạn nghiêm ngặt cho các nhân viên có thẩm quyền để thực hiện nhiệm vụ.</p>
            
            <p><strong>3. Trách nhiệm của khách hàng:</strong></p>
            <p>Quý khách có trách nhiệm tự bảo vệ thông tin tài khoản và mật khẩu của mình. Vui lòng không chia sẻ thông tin này cho bất kỳ ai và đăng xuất khỏi tài khoản khi sử dụng máy tính chung.</p>
          `,
        },
        {
          id: 'thanh-vien',
          title: 'Chính sách điểm Thành viên',
          content: `
            <h3>CHÍNH SÁCH ĐIỂM THÀNH VIÊN - CHEAPPOINTS</h3>
            <p>Chương trình "CheapPoints" là lời tri ân của chúng tôi dành cho những khách hàng thân thiết.</p>
            <p><strong>1. Tích điểm:</strong></p>
            <p>Với mỗi <strong>10.000 VNĐ</strong> chi tiêu thành công trên CheapTrip, Quý khách sẽ nhận được <strong>1 CheapPoint</strong>. Điểm sẽ được cộng vào tài khoản sau khi Quý khách hoàn tất chuyến đi.</p>
            
            <p><strong>2. Sử dụng điểm:</strong></p>
            <p>Quý khách có thể sử dụng CheapPoints để giảm giá trực tiếp cho các lần đặt dịch vụ tiếp theo. <strong>1 CheapPoint = 1 VNĐ</strong>.</p>
            
            <p><strong>3. Quy định:</strong></p>
            <ul>
              <li>Điểm không có giá trị quy đổi thành tiền mặt.</li>
              <li>Điểm không thể chuyển nhượng giữa các tài khoản.</li>
              <li>Điểm có thời hạn sử dụng là 12 tháng kể từ ngày tích lũy.</li>
            </ul>
          `,
        },
        {
          id: 'tuyen-dung',
          title: 'Tuyển dụng',
          content: `
            <h3>CƠ HỘI NGHỀ NGHIỆP TẠI CHEAPTRIP</h3>
            <p>Gia nhập đội ngũ CheapTrip để cùng chúng tôi kiến tạo những trải nghiệm du lịch tuyệt vời cho hàng triệu người Việt. Chúng tôi tìm kiếm những tài năng đam mê, sáng tạo và không ngừng học hỏi.</p>
            
            <p><strong>Tại sao nên chọn CheapTrip?</strong></p>
            <ul>
              <li>Môi trường làm việc trẻ trung, năng động, khuyến khích sự đổi mới.</li>
              <li>Chế độ đãi ngộ cạnh tranh và phúc lợi hấp dẫn.</li>
              <li>Cơ hội phát triển bản thân và thăng tiến trong sự nghiệp.</li>
            </ul>

            <p><strong>Các vị trí đang tuyển:</strong></p>
            <p>Hiện tại chúng tôi đang tìm kiếm ứng viên cho các vị trí sau:</p>
            <ul>
              <li>Chuyên viên tư vấn Tour</li>
              <li>Digital Marketing Executive</li>
              <li>Lập trình viên (Backend/Frontend)</li>
            </ul>

            <p>Vui lòng gửi CV và thư ứng tuyển của bạn về email: <strong>hr@cheaptrip.id.vn</strong>. Chúng tôi rất mong được chào đón bạn!</p>
          `,
        },
        {
          id: 'ho-tro',
          title: 'Hỗ trợ',
          content: `
            <h3>TRUNG TÂM HỖ TRỢ KHÁCH HÀNG</h3>
            <p>CheapTrip luôn sẵn sàng lắng nghe và hỗ trợ bạn. Vui lòng liên hệ với chúng tôi qua các kênh dưới đây nếu bạn có bất kỳ câu hỏi hay cần sự trợ giúp nào.</p>
            
            <p><strong>Thông tin liên hệ:</strong></p>
            <ul>
              <li><strong>Email:</strong> cheap.trip84@gmail.com</li>
              <li><strong>Hotline:</strong> 1900 8888 (Cước phí 1.000đ/phút)</li>
              <li><strong>Địa chỉ văn phòng:</strong> Tầng 5, Tòa nhà ABC, 123 Đường XYZ, Quận 1, TP. Hồ Chí Minh</li>
            </ul>
            
            <p><strong>Giờ làm việc:</strong></p>
            <p>Chúng tôi hỗ trợ từ <strong>08:00 đến 21:00</strong> tất cả các ngày trong tuần, bao gồm cả ngày lễ và Chủ nhật.</p>
            
            <p>Bạn cũng có thể tìm thấy câu trả lời cho các câu hỏi thường gặp tại chuyên mục <strong>Hỏi & Đáp</strong> của chúng tôi (sắp ra mắt).</p>
          `,
        },
      ],
    };
  },
  methods: {
    selectPolicy(policy) {
      this.activePolicy = policy;
    },
    getPolicyIcon(id) {
      const iconMap = {
        'dieu-khoan': 'fas fa-file-contract',
        'tra-gop': 'fas fa-credit-card',
        'quy-che': 'fas fa-clipboard-list',
        'rieng-tu': 'fas fa-user-shield',
        'bao-mat': 'fas fa-lock',
        'thanh-vien': 'fas fa-star',
        'tuyen-dung': 'fas fa-briefcase',
        'ho-tro': 'fas fa-headset'
      };
      return iconMap[id] || 'fas fa-question-circle';
    },
    printContent() {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>${this.activePolicy.title} - CheapTrip</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; }
              h1 { color: #de600c; border-bottom: 2px solid #de600c; }
              h3 { color: #343a40; }
              strong { color: #de600c; }
            </style>
          </head>
          <body>
            <h1>${this.activePolicy.title}</h1>
            ${this.activePolicy.content}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    },
    shareContent() {
      if (navigator.share) {
        navigator.share({
          title: this.activePolicy.title,
          text: 'Xem chính sách này trên CheapTrip',
          url: window.location.href
        });
      } else {
        // Fallback: copy to clipboard
        const textToShare = `${this.activePolicy.title}\nXem chi tiết tại: ${window.location.href}`;
        navigator.clipboard.writeText(textToShare).then(() => {
          alert('Đã sao chép link vào clipboard!');
        });
      }
    },
  },
  created() {
    // Hiển thị mục đầu tiên khi trang được tải
    if (this.policies.length > 0) {
      this.activePolicy = this.policies[0];
    }
  },
};
</script>

<style scoped>
.policy-page-container {
  padding: 100px 2rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

/* Parallax background */
.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
  animation: parallax 20s linear infinite;
}

@keyframes parallax {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(-100px) translateY(-100px); }
}

/* Floating elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-icon {
  position: absolute;
  color: rgba(255, 255, 255, 0.1);
  font-size: 2rem;
  animation: float 6s ease-in-out infinite;
}

.floating-icon:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
.floating-icon:nth-child(2) { top: 20%; right: 15%; animation-delay: 1s; }
.floating-icon:nth-child(3) { top: 60%; left: 5%; animation-delay: 2s; }
.floating-icon:nth-child(4) { top: 70%; right: 10%; animation-delay: 3s; }
.floating-icon:nth-child(5) { top: 40%; left: 20%; animation-delay: 4s; }
.floating-icon:nth-child(6) { top: 80%; right: 5%; animation-delay: 5s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.policy-layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 2;
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.policy-sidebar {
  flex: 0 0 280px;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  border-right: 1px solid rgba(222, 96, 12, 0.2);
  padding: 0;
  position: relative;
}

.sidebar-header {
  padding: 2rem 1.5rem 1rem;
  background: linear-gradient(135deg, #de600c 0%, #ff6b35 100%);
  color: white;
  text-align: center;
}

.sidebar-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.sidebar-title i {
  font-size: 1.2rem;
}

.policy-menu {
  list-style-type: none;
  padding: 1rem 0;
  margin: 0;
}

.menu-item {
  padding: 1rem 1.5rem;
  cursor: pointer;
  color: #495057;
  font-weight: 500;
  border-left: 3px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: slideInLeft 0.6s ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.menu-item:hover {
  background: linear-gradient(90deg, rgba(222, 96, 12, 0.1) 0%, transparent 100%);
  color: #de600c;
  transform: translateX(5px);
}

.menu-item.active {
  background: linear-gradient(90deg, rgba(222, 96, 12, 0.15) 0%, transparent 100%);
  color: #de600c;
  font-weight: 700;
  border-left-color: #de600c;
  box-shadow: inset 0 0 20px rgba(222, 96, 12, 0.1);
}

.menu-icon {
  width: 40px;
  height: 40px;
  background: rgba(222, 96, 12, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.menu-item:hover .menu-icon,
.menu-item.active .menu-icon {
  background: #de600c;
  color: white;
  transform: scale(1.1) rotate(5deg);
}

.menu-text {
  flex: 1;
  font-size: 0.95rem;
}

.menu-indicator {
  width: 8px;
  height: 8px;
  background: #de600c;
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
}

.menu-item.active .menu-indicator {
  opacity: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.5; }
}

.policy-content {
  flex: 1;
  padding: 2rem 2.5rem;
  text-align: left;
  background: white;
}

.content-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(222, 96, 12, 0.2);
}

.content-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: #343a40;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.content-title i {
  color: #de600c;
  font-size: 1.8rem;
}

.content-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.content-breadcrumb i {
  font-size: 0.8rem;
  color: #de600c;
}

.content-body {
  line-height: 1.8;
  color: #212529;
  text-align: left;
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.content-body h3 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  color: #343a40;
  border-left: 4px solid #de600c;
  padding-left: 1rem;
}

.content-body p {
  font-size: 1rem;
  text-align: left;
  margin-bottom: 1rem;
}

.content-body ul {
  text-align: left;
  padding-left: 40px;
  margin-bottom: 1rem;
}

.content-body li {
  margin-bottom: 0.5rem;
  position: relative;
}

.content-body li::before {
  content: '•';
  color: #de600c;
  font-weight: bold;
  position: absolute;
  left: -20px;
}

.content-actions {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #dee2e6;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.print-btn {
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  color: white;
}

.print-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(40, 167, 69, 0.3);
}

.share-btn {
  background: linear-gradient(135deg, #007bff 0%, #6610f2 100%);
  color: white;
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.3);
}

/* Hiệu ứng chuyển đổi nội dung */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.95);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}

@media (max-width: 768px) {
  .policy-layout {
    flex-direction: column;
    margin: 1rem;
  }
  
  .policy-sidebar {
    flex: 0 0 auto;
    border-right: none;
    border-bottom: 1px solid #dee2e6;
  }
  
  .policy-content {
    padding: 1.5rem;
  }
  
  .content-title {
    font-size: 1.8rem;
  }
  
  .content-actions {
    flex-direction: column;
  }
  
  .action-btn {
    width: 100%;
    justify-content: center;
  }
}
</style> 