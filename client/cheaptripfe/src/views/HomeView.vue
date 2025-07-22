<template>
 <div class="HomeView" > <!--Thẻ div cho toàn bộ trang home-->
    <!-- Thẻ div cho slideshow  -->
    <div class="slideshow" style="display: flex; justify-content: center; margin-top: 80px; border-radius: 20px">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" style="width: 75%;">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img style="height: 560px;border-radius: 20px;" src="/img/img_slideshow_NhaTrang.jpeg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img style="height: 560px; border-radius: 20px" src="/img/img_slideshow_TayBac.jpeg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                    <img style="height: 560px; border-radius: 20px" src="/img/img_slideshow_DaLat.jpeg" class="d-block w-100" alt="">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" style="width: 40px; height: 40px; background: rgba(255, 255, 255, 0.8); border-radius: 50%; top: 50%; transform: translateY(-50%); left: 20px;">
                <i style="color: black;" class="fa-solid fa-chevron-left"></i>
                
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" style="width: 40px; height: 40px; background: rgba(255, 255, 255, 0.8); border-radius: 50%; top: 50%; transform: translateY(-50%); right: 20px;">
              <i style="color: black;" class="fa-solid fa-chevron-right"></i>

            </button>
        </div>
    </div>

    <div class="search">
        
        <div class="searchbox">

            <div class="noikhoihanh">
                <i class="fa-solid fa-location-dot"></i>
                <div class="noikhoihanhbox">
                    <select v-model="selectedDeparture" name="departure" id="departure">
                      <option value="">Chọn nơi khởi hành...</option>
                      <option value="TP.HCM">TP.HCM</option>
                      <option value="Hà Nội">Hà Nội</option>
                    </select>
               
                </div>
            </div>

            <div class="loaitour">
                 <i class="fa-solid fa-suitcase-rolling"></i>
                <div class="noikhoihanhbox">
                    
                    <select v-model="selectedType" name="type" id="type">
                      <option value="">Chọn loại tour...</option>
                      <option value="tour_thuong">Tour thường</option>
                      <option value="tour_doan">Tour theo đoàn</option>
                    </select>
               
                </div>
            </div>

            <div class="loaitour">
                <i class="fa-solid fa-calendar-days calendar-icon" style="padding-right: 0px"></i>
                <div class="chonthoigian" style="font-size: 12pt">
                  <div class="chonthoigianbx">
                    <VueDatePicker
                      v-model="selectedDate"
                      placeholder="Chọn ngày khởi hành..."
                      :format="'dd/MM/yyyy'"
                      :enable-time-picker="false"
                      :clearable="true"
                      :auto-apply="true"
                      ref="datepicker"
                    />
                  <i class="fa-solid fa-calendar-week" @click="openDatePicker"></i>
                  </div>
                   
                </div>
            </div>

            <div class="noiden">
                 <i class="fa-solid fa-location-dot"></i>
                <div class="noikhoihanhbox">
                    
                    <select v-model="selectedDestination" name="destination" id="destination">
                      <option value="">Chọn nơi đến...</option>
                      <option value="An Giang">An Giang</option>
                      <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                      <option value="Bắc Giang">Bắc Giang</option>
                      <option value="Bắc Kạn">Bắc Kạn</option>
                      <option value="Bạc Liêu">Bạc Liêu</option>
                      <option value="Bắc Ninh">Bắc Ninh</option>
                      <option value="Bến Tre">Bến Tre</option>
                      <option value="Bình Định">Bình Định</option>
                      <option value="Bình Dương">Bình Dương</option>
                      <option value="Bình Phước">Bình Phước</option>
                      <option value="Bình Thuận">Bình Thuận</option>
                      <option value="Cà Mau">Cà Mau</option>
                      <option value="Cần Thơ">Cần Thơ</option>
                      <option value="Cao Bằng">Cao Bằng</option>
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Đắk Lắk">Đắk Lắk</option>
                      <option value="Đắk Nông">Đắk Nông</option>
                      <option value="Điện Biên">Điện Biên</option>
                      <option value="Đồng Nai">Đồng Nai</option>
                      <option value="Đồng Tháp">Đồng Tháp</option>
                      <option value="Gia Lai">Gia Lai</option>
                      <option value="Hà Giang">Hà Giang</option>
                      <option value="Hà Nam">Hà Nam</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="Hà Tĩnh">Hà Tĩnh</option>
                      <option value="Hải Dương">Hải Dương</option>
                      <option value="Hải Phòng">Hải Phòng</option>
                      <option value="Hậu Giang">Hậu Giang</option>
                      <option value="Hòa Bình">Hòa Bình</option>
                      <option value="Hưng Yên">Hưng Yên</option>
                      <option value="Khánh Hòa">Khánh Hòa</option>
                      <option value="Kiên Giang">Kiên Giang</option>
                      <option value="Kon Tum">Kon Tum</option>
                      <option value="Lai Châu">Lai Châu</option>
                      <option value="Lâm Đồng">Lâm Đồng</option>
                      <option value="Lạng Sơn">Lạng Sơn</option>
                      <option value="Lào Cai">Lào Cai</option>
                      <option value="Long An">Long An</option>
                      <option value="Nam Định">Nam Định</option>
                      <option value="Nghệ An">Nghệ An</option>
                      <option value="Ninh Bình">Ninh Bình</option>
                      <option value="Ninh Thuận">Ninh Thuận</option>
                      <option value="Phú Thọ">Phú Thọ</option>
                      <option value="Phú Yên">Phú Yên</option>
                      <option value="Quảng Bình">Quảng Bình</option>
                      <option value="Quảng Nam">Quảng Nam</option>
                      <option value="Quảng Ngãi">Quảng Ngãi</option>
                      <option value="Quảng Ninh">Quảng Ninh</option>
                      <option value="Quảng Trị">Quảng Trị</option>
                      <option value="Sóc Trăng">Sóc Trăng</option>
                      <option value="Sơn La">Sơn La</option>
                      <option value="Tây Ninh">Tây Ninh</option>
                      <option value="Thái Bình">Thái Bình</option>
                      <option value="Thái Nguyên">Thái Nguyên</option>
                      <option value="Thanh Hóa">Thanh Hóa</option>
                      <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                      <option value="Tiền Giang">Tiền Giang</option>
                      <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
                      <option value="Trà Vinh">Trà Vinh</option>
                      <option value="Tuyên Quang">Tuyên Quang</option>
                      <option value="Vĩnh Long">Vĩnh Long</option>
                      <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                      <option value="Yên Bái">Yên Bái</option>

                    </select>
                
                </div>
            </div>

            <div class="btntimkiem">
                <button @click="searchTours">Tìm kiếm</button>
            </div>


        </div>
       
    </div>

    <!-- Danh mục bài  -->
    <div class="danhmucbai">
        <!-- Line và title -->
        <div class="lineandtitle">
             <!-- <div style="margin-top: 0px; height: 1.5px; width: 633px" class="line1">

            </div> -->
            <div style="color: black; font-weight: bold;">
              <img src="/img/NewTours.png" alt="" style="width: 120px; height: 60px">
            </div>

            <!-- <div style="margin-top: 0px; height: 1.5px; width: 633px" class="line2"></div> -->
        </div>

        <div class="tours">
          <TourCard v-for="tour in paginatedTours" :key="tour.tour_id || tour._id" :tour="tour" />
        </div>
        <!-- Pagination Controls -->
        <div class="pagination" v-if="totalPages > 1" style="display: flex; justify-content: center; align-items: center; margin: 24px 0 0 0; gap: 6px; flex-wrap: wrap;">
          <button
            class="page-link"
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
            style="min-width: 32px; min-height: 32px; border-radius: 50%; border: none; background: #f0f0f0; color: #666; font-weight: bold; margin: 0 2px; cursor: pointer;"
          >
            &lt;
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            class="page-link"
            :class="{ active: page === currentPage }"
            @click="changePage(page)"
            :disabled="page === currentPage"
            style="min-width: 32px; min-height: 32px; border-radius: 50%; border: none; background: #f0f0f0; color: #666; font-weight: bold; margin: 0 2px; cursor: pointer;"
          >
            {{ page }}
          </button>
          <button
            class="page-link"
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
            style="min-width: 32px; min-height: 32px; border-radius: 50%; border: none; background: #f0f0f0; color: #666; font-weight: bold; margin: 0 2px; cursor: pointer;"
          >
            &gt;
          </button>
        </div>
    </div>

     <!-- Điểm đến hàng đầu Việt Nam -->
   <div class="diemdenhangdauvn"  >
      <div class="container">
        <div class="img_destination">
          <img src="/img/img_destination.png" alt="">
        </div>
        <div class="section-heading" style="text-align:center;">Điểm đến hàng đầu Việt Nam</div>
        <div class="swiper diemden-slider">
          <div class="swiper-wrapper">
           
            <div class="swiper-slide diemden-card" v-for="(item, idx) in diemDenSliderData" :key="idx">
              
              <div class="diemden-card-inner">
                
                <div class="ten">{{ item.title }}</div>
                <img :src="item.img" :alt="item.title" class="diemden-card-img" />
                <div class="diemden-card-content" >
                  <h3 class="diemden-card-title">{{ item.title }}</h3>
                  <div class="diemden-card-desc">{{ item.desc }}</div>
                </div>
              </div>
            
            </div>
            
          </div>
        
        </div>
      </div>
  </div>

    
    <!-- <<<<<<<<<<<<<TẠI SAO NÊN DU LỊCH CÙNG CHEAPTRIP-->
    <div class="whytravelwidthus" style="overflow: visible; position: relative;">

     
      
      <div class="content" style="overflow: visible; position: relative;overflow: visible">


        <!--<<<<< Phần nội dung tại sao chọn CheapTrip -->
        <div class="text" style="width: 90%; max-width: 858px; height: 190px;" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="700"> 
            <div class="title" style="height: 50px; display: flex;">
                <div class="texttile" style=" width: 80%; ">
                    <div data-aos="fade-down" data-aos-duration="1300" data-aos-delay="300" >Tại sao nên du lịch cùng CheapTrip?</div>
                </div>
                <div class="why" style="right: 0;width: 20%; display: flex; justify-content: center">
                    <img src="/img/whychooseus.png" alt="" style="width: 100%; height: 100%; ">
                </div>
            </div>
              <div class="noidung" style="font-size: 14pt">Với hơn 10 năm kinh nghiệm, chúng tôi đã  định nghĩa lại trải nghiệm du lịch mạo hiểm. Bằng cách nào?  Bằng cách cung cấp những hành trình khó quên giúp thay đổi cách  
                bạn khám phá thế giới. Xem cách chúng tôi đang tạo ra tương lai của du lịch.</div>
        </div>
        <!-- Phần nội dung tại sao chọn CheapTrip>>>>>>-->

        

        <!-- <<<<<<<<<Nội dung cho 4 khung content và link đến về chúng tôi -->
        <div class="four_text" style=" width: 560px; margin-bottom: 150px; height: 450px; position: relative; margin-top: -50px">
            <!--<<<< 4 content -->
            <div class="fourcontent" style=" height: 85%; display: flex;  flex-wrap: wrap; justify-content: center; ">
                <!-- <<<<Content thứ nhất -->
                <div  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" class="content1" style="background-color: #9CE59C; width: 200px; height: 180px; width: 180px; margin-right: 4px; border-radius: 20px 20px 0px 20px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                    <div class="pic" style="height: 40px; width: 40px">
                        <img class="img1" src="/img/mapicon.png" alt="" style="width: 40px; height: 40px">
                    </div>
                    <div class="noidung" style="text-align: center">
                        <div class="titlecontent1" style="font-size: 12pt; font-weight: bold">Du lịch theo yêu cầu</div>
                        <div class="noidungcontent1" style="width: 150px; font-size: 10pt">
                            Chúng tôi thiết kế hành trình theo yêu cầu cho một chuyến đi độc đáo, khó quên.
                        </div> 
                    </div>
                </div>
                <!-- Content thứ nhất >>>>-->
                
                 <!-- <<<<Content thứ hai -->
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  class="content2" style="background-color: #A5E1E1; height: 180px; width: 180px;  margin-left: 10px; border-radius: 20px 20px 20px 0px;display: flex; align-items: center; justify-content: center; flex-direction: column; ">
                      <div  class="pic" style="height: 40px; width: 40px">
                        <img class="img2" src="/img/spicon.png" alt="" style="width: 40px; height: 40px">
                    </div>
                    <div class="noidung" style="text-align: center">
                        <div class="titlecontent2" style="font-size: 12pt; font-weight: bold">Du lịch theo yêu cầu</div>
                        <div class="noidungcontent2" style="width: 150px; font-size: 10pt">
                            Chúng tôi thiết kế hành trình theo yêu cầu cho một chuyến đi độc đáo, khó quên.
                        </div> 
                    </div>
                </div>
                <!-- Content thứ hai >>>>-->
                
                <!-- <<<<Content thứ ba -->
                <div data-aos="fade-up" data-aos-duration="1300" data-aos-delay="300"  class="content3" style="background-color: #E9C0E2; height: 180px; width: 180px;  margin-right: 10px; border-radius: 20px 0px 20px 20px; display: flex; align-items: center; justify-content: center; flex-direction: column; ">
                      <div class="pic" style="height: 40px; width: 40px">
                        <img class="img3" src="/img/calendaricon.png" alt="" style="width: 40px; height: 40px">
                    </div>
                    <div class="noidung" style="text-align: center">
                        <div class="titlecontent3" style="font-size: 12pt; font-weight: bold">Du lịch theo yêu cầu</div>
                        <div class="noidungcontent3" style="width: 150px; font-size: 10pt">
                            Chúng tôi thiết kế hành trình theo yêu cầu cho một chuyến đi độc đáo, khó quên.
                        </div> 
                    </div>
                </div>
                 <!-- Content thứ ba >>>>-->
                
                <!-- <<<<Content thứ tư -->
                <div data-aos="fade-up" data-aos-duration="1300" data-aos-delay="300"  class="content4" style="background-color: #DEC1A8; height: 180px; width: 180px;  margin-left: 4px; border-radius: 0px 20px 20px 20px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                      <div class="pic" style="height: 40px; width: 40px; display: flex; align-items: center; justify-content: center">
                        <img class="img4" src="/img/locationicon.png" alt="" style="width: 40px; height: 40px">
                    </div>
                   <div class="noidung" style="text-align: center">
                        <div class="titlecontent4" style="font-size: 12pt; font-weight: bold">Du lịch theo yêu cầu</div>
                        <div class="noidungcontent4" style="width: 150px; font-size: 10pt">
                            Chúng tôi thiết kế hành trình theo yêu cầu cho một chuyến đi độc đáo, khó quên.
                        </div> 
                    </div>
                </div>
                <!-- Content thứ tư >>>>-->

            </div>
             <!--4 content >>>>>-->

            <!-- <<<<<Phần link đến về chúng tôi -->
            <div class="xemthemvechungtoi" style="height: 7%; text-align: center">
                <div  style="font-size: 13pt; color: black">Xem thêm thông tin về CheapTrip<font style="color: #FF6200">tại đây</font><i style="color: #FF6200; transform: rotate(25deg);" class="fa-solid fa-heart heart"></i></div> 
            </div>
            <!-- Phần link đến về chúng tôi>>>>> -->
        
        </div>
        <!-- Nội dung cho 4 khung content và link đến về chúng tôi>>>>> -->
        
      </div>

       <div class="benphai">
         <div class="reviews-container">
           <div class="reviews-title">
             <div><i class="fa-solid fa-comments"></i> Đánh giá từ khách hàng</div>
           </div>
           <div class="reviews-list" 
                ref="reviewsList"
                @mousedown.prevent="startDragging"
                @touchstart.prevent="startDragging">
             <div class="review-card" v-for="review in customerReviews" :key="review.id">
               <div class="review-header">
                 <div class="reviewer-info">
                   <div class="reviewer-details">
                     <h4>{{ review.name }}</h4>
                     <div class="review-date">{{ review.date }}</div>
                   </div>
                 </div>
                 <div class="review-rating">
                   <img v-for="star in 5" :key="star" 
                        :src="star <= review.rating ? '/img/starfull.png' : '/img/stargrey.png'"
                        alt="star" 
                        class="rating-star">
                 </div>
               </div>
               <div class="review-content">
                 {{ review.comment }}
               </div>
             </div>
           </div>
         </div>
       </div>  
    </div>
    <!-- <<<<<<<<<<<<<TẠI SAO NÊN DU LỊCH CÙNG CHEAPTRIP-->
    <div class="nhanxetnoibat">
    <!-- <<<NHẬN XÉT NỔI BẬT CỦA KHÁCH HÀNG -->
    <div class="img_nhanxet">
        <img src="/img/nhanxet.png" alt="">
    </div>

    <div class="title_nhanxet">
      <h2>Những nhận xét của khách hàng đã trải nghiệm CheapTrip</h2>
    </div>

    <div class="nd_nhanxet">
        <div style="width: 60%; font-size: 14pt">Khách hàng của chúng tôi yêu thích trải nghiệm du lịch mà chúng tôi cung cấp.  
                      Mỗi chuyến đi của chúng tôi đều để lại cảm xúc và kỉ niệm khó quên.</div>
    </div>

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
            
                  <div class="nhanxet">
                    <div class="daunhaytrai">
                      <div class="imgtrai">
                        <i class="fa-solid fa-quote-left"></i>
                      </div>
                    </div>
                    <div class="avata_customer" style="display: flex; flex-direction: column; align-items: center;">
                      <img src="/img/perfil.jpg" alt="avatar" class="testimonial-avatar">
                      <div class="comment">
                        <div style="font-size: 16pt; width: 95%;  text-align: center;">
                          Chuyến đi của chúng tôi với công ty lữ hành này thật khó quên! Quá trình diễn ra suôn sẻ, với mọi chi tiết được sắp xếp hoàn hảo. Chỗ ở thật tuyệt vời, và chúng tôi đã có một khoảng thời gian tuyệt vời. Không thể chờ đợi cuộc phiêu lưu tiếp theo của chúng tôi!
                        </div>
                      </div>
                      <div class="line"></div>
                    </div>
                    <div class="daunhayphai">
                      <div class="imgphai">
                        <i class="fa-solid fa-quote-right"></i>
                      </div>
                    </div>
                  </div>  
                  <div class="thongtinkh">
                    <p> <font style="color: #5A5252">anh</font> <font style="color: #FF6200"> HUỲNH KHẢI</font> <font style="color:#5A5252 "> - Trà Vinh</font><br> <font style="color: #1BC6E8">Khách du lịch</font> </p>
                  </div>
          
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          

            <div class="nhanxet">
              <div class="daunhaytrai">
                <div class="imgtrai">
                  <i class="fa-solid fa-quote-left"></i>
                </div>
              </div>
              <div class="avata_customer" style="display: flex; flex-direction: column; align-items: center;">
                <img src="/img/hoanglong.png" alt="avatar" class="testimonial-avatar">
                <div class="comment">
                  <div style="font-size: 16pt; width: 95%;  text-align: center;">
                    Tôi thực sự ấn tượng với cách mọi chi tiết trong chuyến đi đều được sắp xếp cẩn thận. Từ việc đón tiễn, hướng dẫn viên đến các điểm tham quan - tất cả đều hoàn hảo!
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="daunhayphai">
                <div class="imgphai">
                  <i class="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </div>
            <div class="thongtinkh">
              <p> <font style="color: #5A5252">anh</font> <font style="color: #FF6200"> HOÀNG LONG</font> <font style="color:#5A5252 "> - Cần Thơ</font><br> <font style="color: #1BC6E8">Khách du lịch</font> </p>
            </div>
         
        </div>
        <div class="carousel-item">
      

            <div class="nhanxet">
              <div class="daunhaytrai">
                <div class="imgtrai">
                  <i class="fa-solid fa-quote-left"></i>
                </div>
              </div>
              <div class="avata_customer" style="display: flex; flex-direction: column; align-items: center;">
                <img src="/img/phuongtuan.png" alt="avatar" class="testimonial-avatar">
                <div class="comment">
                  <div style="font-size: 16pt; width: 95%;  text-align: center;">
                   Đây là lần đầu tiên tôi đi tour với công ty này và chắc chắn không phải lần cuối. Mọi thứ được tổ chức chuyên nghiệp và đầy đủ. Rất đáng tiền!
                  </div>
                </div>
                <div class="line"></div>
              </div>
              <div class="daunhayphai">
                <div class="imgphai">
                  <i class="fa-solid fa-quote-right"></i>
                </div>
              </div>
            </div>
            <div class="thongtinkh">
              <p> <font style="color: #5A5252">anh</font> <font style="color: #FF6200"> PHƯƠNG TUẤN</font> <font style="color:#5A5252 "> - Vĩnh Long</font><br> <font style="color: #1BC6E8">Khách du lịch</font> </p>
            </div>
        
        </div>
      </div>
       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" style="width: 18px; height: 18px; background: rgba(255, 255, 255, 0.8); border-radius: 50%; top: 50%; transform: translateY(-50%); left: 210px;">
          <i style="color: black;" class="fa-solid fa-chevron-left"></i>
         <span class="visually-hidden">Previous</span>
       </button>
       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" style="width: 18px; height: 18px; background: rgba(255, 255, 255, 0.8); border-radius: 50%; top: 50%; transform: translateY(-50%); right: 210px;">
          <i style="color: black;" class="fa-solid fa-chevron-right"></i>
         <span class="visually-hidden">Next</span>
       </button> 
    </div>
   </div> 
    <!-- NHẬN XÉT NỔI BẬT CỦA KHÁCH HÀNG>>> -->

    <!-- ĐÓNG GÓP Ý KIẾN -->
    <div class="donggopyk">
        <div class="boxtgkhaosat">
            <div style="width: 60%; font-weight: bold">HÃY ĐÓNG GÓP NHỮNG Ý KIẾN GIÚP CHÚNG TÔI PHÁT TRIỂN HƠN</div>
            <!-- Thay nút khảo sát -->
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7-QdH74gDgyW6k_mMpqier4x2AcCd3XLckaZ2c3x_FN2p5w/viewform?usp=dialog" target="_blank" rel="noopener" style="text-decoration: none;">
            <button>THAM GIA KHẢO SÁT</button>
            </a>
        </div>

        <div class="boxvideo">
            <div class="playbtn" @click="openVideoPopup">
                <div class="tamgiac"></div>
            </div>
        </div>

    </div>
     <!-- ĐÓNG GÓP Ý KIẾN -->
     <transition name="fade">
      <div 
        v-if="showScrollToTop" 
        class="scroll-to-top"
        @click="scrollToTop"
        :style="{ '--scroll-progress': scrollProgress + '%' }"
      >
        <div class="scroll-progress-ring">
          <svg class="progress-ring" width="60" height="60">
            <circle
              class="progress-ring-circle-bg"
              stroke="#e0e0e0"
              stroke-width="3"
              fill="transparent"
              r="25"
              cx="30"
              cy="30"
            />
            <circle
              class="progress-ring-circle"
              stroke="#FF6200"
              stroke-width="3"
              fill="transparent"
              r="25"
              cx="30"
              cy="30"
              :stroke-dasharray="`${2 * Math.PI * 25}`"
              :stroke-dashoffset="`${2 * Math.PI * 25 * (1 - scrollProgress / 100)}`"
            />
          </svg>
          <i class="fas fa-chevron-up"></i>
        </div>
      </div>
    </transition>
     
     
      <!-- ĐÓNG GÓP Ý KIẾN -->
    <transition name="fade">
      <div v-if="showVideoPopup" class="video-popup-overlay" @click.self="closeVideoPopup">
        <div class="video-popup-content">
          <button class="close-video-btn" @click="closeVideoPopup">×</button>
          <iframe
            width="700"
            height="400"
            :src="'https://www.youtube.com/embed/04Kf_0kppPM?autoplay=1'"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </transition>
  </div>

  <!-- Nút lên đầu trang -->
 

   

</template>

<script>
import { gsap } from 'gsap';
// import Datepicker from '@vuepic/vue-datepicker';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// KHÔNG import Autoplay hoặc modules/autoplay gì cả!
// import ChatbotWidget from '../components/ChatbotWidget.vue';
import TourCard from '../components/TourCard.vue';

export default {
  name: 'HomeView',
  components: {
    VueDatePicker,
    TourCard
    // XÓA ChatbotWidget
  },
  data() {
    return {
      selectedDate: null,
      selectedDeparture: '',
      selectedType: '',
      selectedDestination: '',
      isDragging: false,
      startY: 0,
      scrollTop: 0,
      currentTestimonial: 0,
      testimonialInterval: null,
      tours: [], // <-- Dữ liệu tour sẽ được lấy từ API
      customerReviews: [
        {
          id: 1,
          name: "Nguyễn Văn Tuấn",
          avatar: "/img/avatar1.png",
          rating: 5,
          date: "15/03/2024",
          comment: "Tour Đà Lạt tuyệt vời! Hướng dẫn viên nhiệt tình, lịch trình hợp lý. Đặc biệt ấn tượng với dịch vụ chăm sóc khách hàng."
        },
        {
          id: 2,
          name: "Trần Mỹ Phương",
          avatar: "/img/avatar2.png",
          rating: 4,
          date: "12/03/2024",
          comment: "Chuyến đi Nha Trang rất thú vị. Khách sạn 4 sao đúng chuẩn, đồ ăn ngon. Chỉ tiếc là thời gian hơi ngắn."
        },
        {
          id: 3,
          name: "Lê Đại Minh",
          avatar: "/img/avatar3.png",
          rating: 5,
          date: "10/03/2024",
          comment: "Tour Hạ Long vượt ngoài mong đợi. Cảnh đẹp, dịch vụ tốt, giá cả hợp lý. Chắc chắn sẽ quay lại!"
        },
        {
          id: 4,
          name: "Phạm Thị Hồng Thắm",
          avatar: "/img/avatar4.png",
          rating: 5,
          date: "08/03/2024",
          comment: "Tôi rất hài lòng với tour Tây Bắc. Được trải nghiệm văn hóa dân tộc và thưởng thức ẩm thực địa phương."
        },
        {
          id: 5,
          name: "Hoàng Tuấn Vũ",
          avatar: "/img/avatar5.png",
          rating: 4,
          date: "05/03/2024",
          comment: "Tour Phú Quốc rất tuyệt! Resort đẹp, biển xanh cát trắng. Nhân viên phục vụ chu đáo."
        }
      ],
      diemDenSliderData: [
        { img: '/img/dalat.png', title: 'Đà Lạt', desc: 'Thành phố mộng mơ với khí hậu se lạnh, rừng thông và ngàn hoa khoe sắc. Nơi đây được mệnh danh là "thành phố mộng mơ", hấp dẫn du khách bởi vẻ đẹp thơ mộng, các công trình kiến trúc cổ kính và không gian yên bình lý tưởng để nghỉ dưỡng.' },
        { img: '/img/nhatrang.png', title: 'Nha Trang', desc: 'Thành phố biển xinh đẹp thuộc tỉnh Khánh Hòa, nổi tiếng với bãi cát trắng mịn, làn nước biển trong xanh và khí hậu ôn hòa quanh năm. Đây là điểm đến lý tưởng cho cả nghỉ dưỡng, khám phá văn hóa và trải nghiệm ẩm thực miền biển đặc sắc.' },
        { img: '/img/vinhhalong.png', title: 'Vịnh Hạ Long', desc: 'Di sản thiên nhiên thế giới được UNESCO công nhận với hàng nghìn hòn đảo đá vôi lớn nhỏ nhô lên giữa làn nước xanh ngọc bích. Vịnh Hạ Long là điểm đến lý tưởng cho các hoạt động du thuyền, chèo kayak và khám phá thiên nhiên.' },
        { img: '/img/fansipan.png', title: 'Fansipan', desc: 'Là đỉnh núi cao nhất Việt Nam và Đông Dương với độ cao 3.147 mét, nằm trong dãy Hoàng Liên Sơn, cách thị trấn Sa Pa (Lào Cai) khoảng 9 km. Điểm đến lý tưởng cho những ai yêu thích du lịch mạo hiểm, trekking hoặc ngắm cảnh thiên nhiên hùng vĩ.' },
        { img: '/img/hoian.png', title: 'Hội An', desc: 'thành phố cổ nằm bên bờ sông Thu Bồn, thuộc tỉnh Quảng Nam, nổi tiếng với vẻ đẹp cổ kính, yên bình và giàu giá trị văn hóa lịch sử. Được UNESCO công nhận là Di sản Văn hóa Thế giới. Nổi bật với những ngôi nhà cổ mái ngói rêu phong, đèn lồng rực rỡ' },
        { img: '/img/phuquoc.png', title: 'Phú Quốc', desc: 'hòn đảo lớn nhất Việt Nam, thuộc tỉnh Kiên Giang, được mệnh danh là "Đảo ngọc" nhờ vẻ đẹp hoang sơ với biển xanh cát trắng, rừng nguyên sinh và khí hậu ôn hòa quanh năm. Nổi tiếng như Bãi Sao, Bãi Dài, Gành Dầu, cùng hệ thống resort sang trọng, hiện đại.' },
        { img: '/img/tamcoc.png', title: 'Tam Cốc', desc: 'Một trong những điểm du lịch nổi bật của tỉnh Ninh Bình, được mệnh danh là "Vịnh Hạ Long trên cạn" nhờ khung cảnh sông nước hữu tình, xen lẫn những dãy núi đá vôi hùng vĩ và cánh đồng lúa trải dài bên dòng sông Ngô Đồng.' },
        { img: '/img/thacbangioc.png', title: 'Thác Bản Giốc', desc: 'Là một trong những thác nước tự nhiên đẹp và lớn nhất Đông Nam Á, nằm tại huyện Trùng Khánh, tỉnh Cao Bằng, sát biên giới Việt Nam - Trung Quốc. Thác đổ xuống từ nhiều tầng đá vôi tạo nên khung cảnh hùng vĩ, thơ mộng giữa núi rừng Đông Bắc.' },
      ],
      showScrollToTop: false,
      scrollProgress: 0,
      currentPage: 1,
      toursPerPage: 8,
      showVideoPopup: false,
    };
  },
  computed: {
    paginatedTours() {
      const startIndex = (this.currentPage - 1) * this.toursPerPage;
      const endIndex = startIndex + this.toursPerPage;
      return this.tours.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.tours.length / this.toursPerPage);
    }
  },
  mounted() {
    // GSAP animations
    gsap.to(".heart", {
      scale: 1.3,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".img1", {
      scale: 1.3,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.6, 
      ease: "power1.inOut"
    });

    gsap.to(".img2", {
      scale: 1.3,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
      ease: "power1.inOut"
    });

    gsap.to(".img3", {
      scale: 1.3,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.4,
      ease: "power1.inOut"
    });

    gsap.to(".img4", {
      scale: 1.3,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      repeatDelay: 0.5,
      ease: "power1.inOut"
    });

    // Start testimonial slideshow
    this.startTestimonialSlideshow();

    // Add event listeners for reviews
    const reviewsList = this.$refs.reviewsList;
    if (reviewsList) {
      reviewsList.addEventListener('mousedown', this.startDragging);
      reviewsList.addEventListener('touchstart', this.startDragging);
      
      window.addEventListener('mousemove', this.onDrag);
      window.addEventListener('touchmove', this.onDrag);
      
      window.addEventListener('mouseup', this.stopDragging);
      window.addEventListener('touchend', this.stopDragging);
    }

    // Khởi tạo Swiper cho slider điểm đến
    this.$nextTick(() => {
      new Swiper('.diemden-slider', {
        slidesPerView: 3,
        spaceBetween: 15,
        grabCursor: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        },
      });
    });

    // Thêm event listener cho scroll
    window.addEventListener('scroll', this.handleScroll);

    this.fetchTours(); // <-- Gọi API khi component được mount
  },
  beforeUnmount() {
    // Cleanup event listeners
    window.removeEventListener('mousemove', this.onDrag);
    window.removeEventListener('touchmove', this.onDrag);
    window.removeEventListener('mouseup', this.stopDragging);
    window.removeEventListener('touchend', this.stopDragging);
    
    const reviewsList = this.$refs.reviewsList;
    if (reviewsList) {
      reviewsList.removeEventListener('mousedown', this.startDragging);
      reviewsList.removeEventListener('touchstart', this.startDragging);
    }

    // Clear testimonial interval
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }

    // Xóa event listener khi component bị hủy
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    openDatePicker() {
      this.$refs.datepicker.openMenu(); // Mở datepicker khi click icon
    },
    async fetchTours() {
      try {
        // Lấy dữ liệu tour và discount cùng lúc để tối ưu
        const [toursResponse, discountsResponse] = await Promise.all([
          fetch('http://localhost:3000/api/tours'),
          fetch('http://localhost:3000/api/discounts')
        ]);

        if (!toursResponse.ok) throw new Error('Lỗi khi lấy dữ liệu tours');
        if (!discountsResponse.ok) throw new Error('Lỗi khi lấy dữ liệu discounts');

        const tours = await toursResponse.json();
        const discounts = await discountsResponse.json();

        // Gộp thông tin giảm giá vào danh sách tour
        const toursWithDiscounts = tours.map(tour => {
          // Tìm discount có tour_id là mảng hoặc chuỗi và chứa tour.tour_id
          const discount = discounts.find(d => {
            if (Array.isArray(d.tour_id)) {
              return d.tour_id.includes(tour.tour_id);
            } else {
              return d.tour_id === tour.tour_id;
            }
          });
          if (discount && discount.discount_percent) {
            return { ...tour, discount_percent: discount.discount_percent };
          }
          return tour;
        });

        // Lọc bỏ các tour bị ẩn
        this.tours = toursWithDiscounts.filter(tour => !tour.isHidden);

      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu tour hoặc discount:', error);
        // Nếu có lỗi (ví dụ: discount-service chưa chạy), vẫn cố gắng hiển thị tour
        try {
            const response = await fetch('http://localhost:3000/api/tours');
            if(response.ok) this.tours = await response.json();
        } catch (fallbackError) {
            console.error('Lỗi khi lấy dữ liệu tour (fallback):', fallbackError);
        }
      }
    },
    formatCurrency(value) {
      if (typeof value !== "number") {
        return value;
      }
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },
    ShowStar(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;
        
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push('/img/starfull.png');
        }
        if (halfStar) {
            stars.push('/img/starhalf.png');
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push('/img/stargrey.png');
        }
        return stars;
    },
    startDragging(e) {
      this.isDragging = true;
      this.startY = e.type === 'mousedown' ? e.pageY : e.touches[0].pageY;
      this.scrollTop = this.$refs.reviewsList.scrollTop;
    },
    onDrag(e) {
      if (!this.isDragging) return;
      e.preventDefault();
      const y = e.type === 'mousemove' ? e.pageY : e.touches[0].pageY;
      const walk = (this.startY - y) * 2;
      this.$refs.reviewsList.scrollTop = this.scrollTop + walk;
    },
    stopDragging() {
      this.isDragging = false;
    },

    startTestimonialSlideshow() {
      this.testimonialInterval = setInterval(() => {
        this.currentTestimonial = (this.currentTestimonial + 1) % 3;
      }, 5000);
    },
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hiển thị nút khi scroll xuống 300px
      this.showScrollToTop = scrollTop > 300;
      
      // Tính phần trăm scroll
      const scrollableHeight = documentHeight - windowHeight;
      this.scrollProgress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    changePage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= this.totalPages) {
            this.currentPage = pageNumber;
            window.scrollTo({ top: document.querySelector('.danhmucbai').offsetTop, behavior: 'smooth' });
        }
    },
    searchTours() {
      // Tạo object chứa các điều kiện tìm kiếm
      const searchCriteria = {
        departure: this.selectedDeparture,
        type: this.selectedType,
        destination: this.selectedDestination,
        date: this.selectedDate ? this.selectedDate.toISOString().split('T')[0] : null
      };
      
      console.log('Tìm kiếm với điều kiện:', searchCriteria);
      
      // Chuyển đến trang SearchResults với các tham số tìm kiếm
      this.$router.push({
        path: '/search-results',
        query: {
          departure: searchCriteria.departure || '',
          type: searchCriteria.type || '',
          destination: searchCriteria.destination || '',
          date: searchCriteria.date || ''
        }
      });
    },
    async fetchTourDetails(tourId) {
      console.log('fetchTourDetails called with:', tourId);
      // ... phần còn lại
    },
    openVideoPopup() {
      this.showVideoPopup = true;
    },
    closeVideoPopup() {
      this.showVideoPopup = false;
    },
  },
  created() {
    const tourId = this.$route.params.tourId;
    this.fetchTourDetails(tourId);
  }
};
</script>




<style>

    /* TÌM KIẾM */
    .HomeView{
        width: 100%;
        height: 100%;
    }

    /* <<<<<<<<<<<<<TẠI SAO NÊN DU LỊCH CÙNG CHEAPTRIP*/
    .whytravelwidthus{
      width: 100%;
      height: 710px;
      display: flex;
      justify-content: center;
      gap: 30px;
      padding-top: 30px;
    }

    .content{
      margin-top: 0;
      width: 1000px;
      height: 650px;
      background-color: #eaeaea;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      overflow: hidden;
    }

    .content2 {
        margin-top: 0;
        width: 400px;
        height: 650px;
        background-color: #88d3ef;
        border-radius: 20px;
        overflow: hidden;
    }

    
    
    /*TẠI SAO NÊN DU LỊCH CÙNG CHEAPTRIP>>>>>>>>>>>>>>>*/

    .inf-content {
        padding: 25px;
    }

    .inf-content h3 {
        font-size: 17pt;
        margin-bottom: 12px;
    }

    .inf-content p {
        font-size: 14pt;
        line-height: 1.5;
    }

    .anh1 .card {
        width: 25rem !important;
        height: 100%;
        border-radius: 30px;
        overflow: hidden;
    }

    .anh1 .card:hover {
        transform: translateY(-5px);
    }

    .inf {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .anh1:hover .inf {
        opacity: 1;
    }

    .titlediemden {
        margin-bottom: 30px;
    }

    .dd {
        gap: 30px;
    }

    .card1 {
        width: 25rem !important;
        height: auto !important;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .card .card-img-top {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
    }

    .anh1:first-child {
        height: 280px !important;
    }

    .anh1:nth-child(2) {
        height: 240px !important;
    }

    .card1:nth-child(2) .anh1:first-child {
        height: 300px !important;
    }

    .card1:nth-child(2) .anh1:nth-child(2) {
        height: 220px !important;
    }

    .card1:nth-child(2) .anh1:nth-child(2) img {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        object-position: center;
    }

    .card1:nth-child(2) .anh1:nth-child(2) .card {
        height: 100%;
    }

    .anh1 {
        justify-content: center;
        display: flex;
        align-items: center;
        border-radius: 10px;
        transition: all 0.3s ease;
        overflow: hidden;
    }

    .anh1 .card {
        height: 100%;
        width: 100% !important;
    }

    .card .card-img-top {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
        object-position: center;
    }

    .carousel-indicators {
        position: absolute;
        bottom: 20px;
    }

    .carousel-indicators button {
        width: 12px !important;
        height: 12px !important;
        border-radius: 50%;
        background-color: white !important;
        opacity: 0.5;
        margin: 0 5px !important;
        border: none !important;
    }

    .carousel-indicators button.active {
        opacity: 1;
        background-color: white !important;
    }

    .carousel-control-prev,
    .carousel-control-next {
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: all 0.3s ease;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        width: 20px;
        height: 20px;
        filter: invert(1) grayscale(100);
    }

    .image {
        width: 400px;
        height: 450px;
        margin-bottom: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -50px;
    }

    .four_text {
        width: 560px;
        margin-bottom: 150px;
        height: 450px;
        position: relative;
        margin-top: -50px;
    }

    .benphai{
      width: 27%;
      height: 650px;
      background-color: rgb(227, 252, 255) ;
      border-radius: 20px;
    }

    .reviews-container {
      height: 100%;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
    }

    .reviews-title {
      text-align: center;
      margin-bottom: 20px;
    }

    .reviews-title h3 {
      color: #333;
      font-size: 18pt;
      font-weight: bold;
    }

    .reviews-list {
      flex-grow: 1;
      overflow-y: auto;
      padding: 0 15px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      cursor: grab;
      user-select: none;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .reviews-list:active {
      cursor: grabbing;
    }

    .review-card {
      background: white;
      border-radius: 15px;
      padding: 15px;
      margin-bottom: 15px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      pointer-events: none;
      width: 95%;
      max-width: 400px;
    }

    .review-card:hover {
      transform: translateY(-3px);
    }

    .review-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    .reviewer-info {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .reviewer-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .reviewer-details h4 {
      margin: 0;
      font-size: 14pt;
      color: #333;
    }

    .review-date {
      font-size: 10pt;
      color: #666;
    }

    .review-rating {
      display: flex;
      gap: 2px;
    }

    .rating-star {
      width: 15px;
      height: 15px;
    }

    .review-content {
      font-size: 11pt;
      color: #444;
      line-height: 1.4;
    }

    /* Tùy chỉnh nút điều khiển slideshow */
    .carousel-control-prev,
    .carousel-control-next {
      width: 50px;
      height: 50px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      transition: all 0.3s ease;
    }

    .carousel-control-prev {
      left: 20px;
    }

    .carousel-control-next {
      right: 20px;
    }

    .carousel:hover .carousel-control-prev,
    .carousel:hover .carousel-control-next {
      opacity: 1;
    }

    .carousel-control-prev:hover,
    .carousel-control-next:hover {
      background-color: rgba(255, 255, 255, 0.95);
      transform: translateY(-50%) scale(1.1);
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      width: 24px;
      height: 24px;
      filter: invert(1) grayscale(100);
    }

    /* Tùy chỉnh indicators */
    .carousel-indicators {
      margin-bottom: 20px;
    }

    .carousel-indicators button {
      width: 12px !important;
      height: 12px !important;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6) !important;
      border: 2px solid transparent !important;
      transition: all 0.3s ease;
      margin: 0 6px !important;
    }

    .carousel-indicators button.active {
      background-color: white !important;
      transform: scale(1.2);
      border: 2px solid rgba(255, 255, 255, 0.8) !important;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }

    /* Thêm hiệu ứng hover cho indicators */
    .carousel-indicators button:hover {
      background-color: white !important;
      transform: scale(1.1);
    }

    /* Container cho slideshow */
    .slideshow .carousel {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      overflow: hidden;
    }

    /* Hiệu ứng cho ảnh trong slideshow */
    .carousel-item img {
      transition: transform 0.5s ease;
    }

    .carousel-item.active img {
      transform: scale(1.02);
    }

    /* Tùy chỉnh pagination */
    .pagination {
      gap: 5px;
    }

    .page-item {
      margin: 0 3px;
    }

    .page-link {
      width: 30px;
      height: 30px;
      border-radius: 50% !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: #666;
      border: none;
      background-color: #f0f0f0;
      transition: all 0.3s ease;
      padding: 0;
      font-size: 12px;
    }

    .page-link:hover {
      background-color: #FF6200;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 3px 6px rgba(255, 98, 0, 0.3);
    }

    .page-item.active .page-link {
      background-color: #FF6200;
      color: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 98, 0, 0.3);
    }

    .page-item.disabled .page-link {
      background-color: #f8f8f8;
      color: #aaa;
      cursor: not-allowed;
      opacity: 0.7;
    }

    /* Previous/Next buttons */
    .page-item:first-child .page-link,
    .page-item:last-child .page-link {
      width: auto;
      padding: 0 12px;
      border-radius: 20px !important;
      font-weight: normal;
      font-size: 11px;
    }

    .page-item:first-child {
      margin-right: 5px;
    }

    .page-item:last-child {
      margin-left: 5px;
    }

    /* Hover effect for Previous/Next */
    .page-item:not(.disabled):first-child .page-link:hover,
    .page-item:not(.disabled):last-child .page-link:hover {
      background-color: #FF6200;
      color: white;
    }

    /* Active state animation */
    .page-item.active .page-link {
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 4px 8px rgba(255, 98, 0, 0.3);
      }
      50% {
        box-shadow: 0 4px 12px rgba(255, 98, 0, 0.5);
      }
      100% {
        box-shadow: 0 4px 8px rgba(255, 98, 0, 0.3);
      }
    }

    marquee {
      display: flex;
      align-items: center;
      width: 100%;
    }

    /* Custom styles for datepicker */
    .dp__main {
        font-family: inherit;
    }

    .dp__input {
        width: 100%;
        height: 100%;
        border: none !important;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9) !important;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .dp__input:hover {
        background-color: rgba(255, 255, 255, 1) !important;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
    }

    .dp__input:focus {
        background-color: white !important;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
    }

    .dp__calendar_header {
        color: #FF6200;
        font-weight: bold;
    }

    .dp__active_date {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__today {
        border: 1px solid #1BC6E8 !important;
    }

    .dp__arrow_bottom {
        display: none;
    }

    .dp__menu {
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .dp__overlay_cell_active {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__range_end, .dp__range_start, .dp__active_date {
        background: #1BC6E8 !important;
    }

    .dp__cell_offset {
        color: #ccc;
    }

    .dp__cell:hover {
        background-color: rgba(27, 198, 232, 0.1) !important;
        color: #1BC6E8 !important;
    }

    .dp__clear_icon {
        color: #FF6200;
    }

    .dp__month_year_select {
        color: #333;
    }

    .dp__overlay_cell:hover {
        background-color: rgba(27, 198, 232, 0.1) !important;
        color: #1BC6E8 !important;
    }

    .dp__overlay_cell_active {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__button {
        color: #1BC6E8 !important;
    }

    .dp__button:hover {
        background-color: rgba(27, 198, 232, 0.1) !important;
    }

    .dp__now_default {
        color: #FF6200 !important;
    }

    .noikhoihanhbox .dp__main {
        width: 100%;
        height: 100%;
    }

    .noikhoihanhbox .dp__input {
        width: 100%;
        height: 100%;
        padding: 0 10px;
        border: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #333;
        font-size: 14px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 15px;
        transition: all 0.3s ease;
    }

    .dp__input:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
    }

    .dp__input:focus {
        background-color: white;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
    }

    .dp__calendar_header {
        color: #FF6200;
        font-weight: bold;
    }

    .dp__active_date {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    .dp__today {
        border: 1px solid #1BC6E8 !important;
    }

    .dp__menu {
        z-index: 9999;
    }

    /* Thêm style cho container */
    .loaitour {
        position: relative;
        z-index: 1;
    }

    /* Đảm bảo popup hiển thị trên cùng */
    .dp__outer_menu {
        z-index: 999999 !important;
    }

    .calendar-icon {
        font-size: 18px;
        cursor: pointer;
        color: #FF6200;
        transition: transform 0.3s ease;
        padding: 8px;
        z-index: 2;
    }

    .calendar-icon:hover {
        transform: scale(1.1);
    }

    .hidden-input {
        display: none !important;
    }

    /* Thêm style cho popup calendar */
    :deep(.dp__calendar_header) {
        color: #FF6200;
        font-weight: bold;
    }

    :deep(.dp__active_date) {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    :deep(.dp__today) {
        border: 1px solid #1BC6E8 !important;
    }

    :deep(.dp__cell_offset) {
        color: #ccc !important;
    }

    :deep(.dp__cell:hover) {
        background-color: rgba(27, 198, 232, 0.1) !important;
        color: #1BC6E8 !important;
    }

    :deep(.dp__range_end), :deep(.dp__range_start) {
        background: #1BC6E8 !important;
    }

    :deep(.dp__overlay_cell_active) {
        background-color: #1BC6E8 !important;
        color: white !important;
    }

    /* Ẩn hoàn toàn icon mặc định */
    :deep(.dp__pointer),
    :deep(.dp__arrow_bottom),
    :deep(.dp__input_icon),
    :deep(.dp__clear_icon) {
        display: none !important;
        width: 0 !important;
        margin: 0 !important;
    }

    :deep(.dp__input_wrap) {
        margin: 0 !important;
        padding: 0 !important;
    }

    :deep(.dp__input) {
        padding: 0 8px !important;
        margin: 0 !important;
        width: 100% !important;
        font-size: 12pt !important;
        color: #666 !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        background-image: none !important;
        cursor: default !important;
        pointer-events: none !important;
    }

    :deep(.dp__input)::placeholder {
        color: #666 !important;
        opacity: 1 !important;
        font-size: 14px !important;
    }

    :deep(.dp__pointer) {
        display: none !important;
    }

    /* Ẩn text khi đã chọn ngày */
    :deep(.dp__input_wrap) {
        position: relative;
    }

    :deep(.dp__input_wrap::after) {
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        color: #666;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
    }

    :deep(.dp__input_wrap.dp__input_has_value::after) {
        opacity: 0 !important;
        transition: opacity 0.2s ease-in-out;
    }

    /* Style riêng cho ngày đã chọn */
    :deep(.dp__input_wrap.dp__input_has_value) input {
        font-size: 12pt !important;
    }

    .noikhoihanhbox {
        width: 80%;
        height: 80%;
        position: relative;
        display: flex;
        align-items: center;
    }


    /* NHẬN XÉT NỔI BẬT */
    .nhanxetnoibat {
        width: 100%;
        height: 600px;
        background-image: url('/public/img/backgroundnhanxet.png');
        display: flex;
        flex-direction: column;
    }

    .img_nhanxet {
        width: 100%;
        height: 50px;
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }

    .title_nhanxet {
        width: 100%;
        height: 50px;
        text-align: center;
    }

    .nd_nhanxet {
        width: 100%;
        height: 50px;
        text-align: center;
        display: flex;
        justify-content: center;
    }

    .nhanxet {
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: row;
    }

    .daunhaytrai, .daunhayphai {
        width: 20%;
        height: 100%;
    }

    .avata_customer {
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .avt {
        width: 55px;
        height: 55px;
        border-radius: 30px;
        margin-top: 20px;
        border: solid 3px green;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .avt img {
        width: 53px;
        height: 53px;
        border-radius: 30px;
    }

    .comment {
        width: 100%;
        height: 120px;
        margin-top: 25px;
        display: flex;
        justify-content: center;
    }

    .line {
        width: 95%;
        height: 2px;
        background-color: gray;
    }

    .imgtrai {
        width: 40%;
        height: 40%;
        margin-left: 160px;
        margin-top: 25px;
        font-size: 60pt;
        text-align: center;
        color: gray;
    }

    .imgphai {
        width: 40%;
        height: 40%;
        margin-left: 25px;
        margin-top: 25px;
        font-size: 60pt;
        text-align: center;
        color: gray;
    }

    .thongtinkh {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14pt;
        font-weight: bold;
    }

    /* Transition effects */
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    /* Navigation dots */
    .navigation-dots {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-top: 20px;
        position: relative;
        z-index: 3;
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(128, 128, 128, 0.5);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .dot:hover {
        transform: scale(1.2);
        background-color: #FF6200;
    }

    .dot.active {
        background-color: #FF6200;
        transform: scale(1.2);
    }

    /* Animation cho quotes */
    .imgtrai i, .imgphai i {
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
    }

    /* ... rest of your existing styles ... */

    /* Add these styles for carousel controls */
    .carousel-control-prev,
    .carousel-control-next {
        width: 5%;
        opacity: 0.7;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        padding: 20px;
    }

    .carousel-indicators {
        bottom: 20px;
    }

    .carousel-indicators button {
        width: 10px !important;
        height: 10px !important;
        border-radius: 50%;
        background-color: #FF6200 !important;
        opacity: 0.5;
    }

    .carousel-indicators button.active {
        opacity: 1;
    }

  
    


    /* VIẾT RESPONSIVE */
    @media (max-width: 480px){  /*Ở màn hình mobile (nhỏ hơn 479px)*/ 
      .HomeView{
        overflow: hidden !important;
        background-color: rgb(227, 252, 255);
      }

      /* <=======SLIDESHOW=======> */
      .slideshow{
          height: 100% !important;
          width: 100% !important;
          border-radius: 0 !important;
          margin-top: 70px !important;
          display: flex;
          justify-content: center !important;
          align-items: center !important;
          overflow: hidden;
          background-color: rgb(227, 252, 255);
        }

        .carousel-inner img{
          width: 100% !important; /* Chiếm toàn bộ chiều rộng */
          height: 100% !important;
          object-fit: contain !important; /* Đảm bảo ảnh không bị méo */
          border-radius: 10px !important;
          
        }

        .carousel-indicators{ margin-bottom: 1%; }
        
        /* Carousel container */
        .carousel {
          width: 90% !important; /* Chiếm toàn bộ chiều rộng */
          height: 100% !important;
          border-radius: 0 !important; /* Không có border radius */
          display: flex;
          justify-content: center !important;
          align-items: center !;
          border-radius: 10px !important;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          border: solid #FF6200;
        }
        
        .carousel-control-prev, .carousel-control-next {
          width: 20px !important; /* Giảm kích thước nút điều khiển */
          height: 20px !important;
          background: rgba(255, 255, 255, 0.6) !important;
        }

        .carousel-control-prev {
          left: 10px !important; /* Điều chỉnh vị trí nút */
          background-color: #1BC6E8 !important;
          opacity: 0.5 !important; 
        }

        .carousel-control-next {
          right: 10px !important;
          background-color: #1BC6E8 !important;
          opacity: 0.5 !important;
        }

        .carousel-control-prev:active{ opacity: 1 !important; }

        .carousel-control-next:active{ opacity: 1 !important; }

        .carousel-control-prev i, .carousel-control-next i {
          color: #dd490f !important;
          font-size: 18px !important;
        }

        /* Carousel indicators */
        .carousel-indicators {  bottom: 10px; /* Điều chỉnh vị trí indicators */}

        .carousel-indicators button {
            width: 5px !important; /* Giảm kích thước indicators */
            height: 5px !important;
            margin: 0 4px !important;
            background-color: #dd490f !important;
        }
        /* <=======SLIDESHOW=======> */



        /* <=======SEARCH=======> */
       .search {
          width: 100%;
          height: 280px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: 0 !important;
          background-color: rgb(227, 252, 255);
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
          height: 260px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 0px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */
        }

        .noikhoihanh, .loaitour, .noiden {
          width: 100%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
          background-color: rgba(255, 255, 255, 0.9); /* Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
          
        }


        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

      .chonthoigianbx{
        width: 315px !important;
        height: 80%;
        position: relative;
        display: flex;
        align-items: center;
      }

      .chonthoigianbx  {
        width: 264px;
        height: 35px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FF6200;
        background-color: white;
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .chonthoigianbx select{
        width: 100%; /* Chiếm toàn bộ chiều rộng */
        height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
        border: none; /* Bỏ viền */
        outline: none; /* Bỏ outline khi focus */
        padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
        border-radius: 8px; /* Bo tròn nhẹ */
        background-color: white; /* Nền trắng */
        color: #333; /* Màu chữ */
        font-size: 14px; /* Kích thước chữ vừa phải */
        cursor: pointer;
        appearance: none; /* Bỏ giao diện mặc định của select */
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      .dp__input_wrap::after {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{
        display: none !important; /* Ẩn icon mặc định */
      }

     
      .calendar-icon{
        padding-left: 0px;
      }

    
      .btntimkiem {
        width: 30%; /* Chiếm toàn bộ chiều rộng */
        height: 10%; /* Đồng bộ với các input khác */
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px; /* Khoảng cách dưới */
      }

        .btntimkiem button{
          font-size: 12px !important;
        background-color: #FF6200;
        border: #FF6200;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        color: white;
        font-weight: bold;
        }

        .btntimkiem button:hover {
          background-color: #f58f4f; /* Màu cam nhạt khi hover */
          transform: scale(1.05); /* Phóng to nhẹ */
        }

        /* Datepicker adjustments */
        .noikhoihanhbox .dp__input {
          background-color: white; /* Nền trắng */
          border-radius: 8px; /* Bo tròn */
          padding: 0 10px; /* Padding đồng bộ */
          font-size: 14px; /* Kích thước chữ */
          cursor: pointer;
        }

        :deep(.dp__input_wrap::after) {
          font-size: 14px; /* Kích thước chữ placeholder */
          left: 10px; /* Căn chỉnh vị trí */
        }
    
        /* <=======SEARCH=======> */


      /* TOURS */
      .danhmucbai{
        margin-top: 0px !important;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .tours {
        width: 90%;
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0px !important;
        gap: 10px;
      }

      .lineandtitle img{
        width: 80px!important;
        height: 40px!important;
        margin-bottom: 20px!important;
        margin-top: 10px!important;
      }

      .article {
        width: calc(50% - 5px);
        min-width: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .card {
        width: 100% !important;
        height: 140px !important;
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .card img {
        width: 100% !important;
        height: 70px !important;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      .card-body {
        background-color: transparent;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
      }

      .card-title {
        font-size: 7pt !important;
        color: #333;
        background-color: transparent;
        width: 100% !important;
        line-height: 1.1;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 22px;
      }

      .starandcmt {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 0px; /* Giảm từ 0 2px xuống 0 1px */
        margin-bottom: 0!important; /* Giảm từ 5px xuống 0px */
        gap: 40px; /* Thêm gap để điều chỉnh khoảng cách giữa sao và bình luận */
      
      }

      .star {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px!important; /* Thu gọn theo nội dung */
      }

      .numberstar, .cmt {
        font-size: 8px !important; /* Giảm từ 6pt xuống 5pt */
        color: #666;
      }

      .star img {
        width: 8px !important; /* Giảm từ 6px xuống 5px */
        height: 8px !important;
        margin-left: 0.3px; /* Giảm từ 0.5px xuống 0.3px */
      }

      .price {
        font-size: 8pt !important;
        color: #FF6200;
        font-weight: bold;
        text-align: center;
        margin-top: 0px !important; /* Giảm từ 5px xuống 0px */
      }
        /* <=======TOUR=======> */

          /* Destination */
      .diemdenhangdauvn{
        background-size: cover;
        width: 100% !important;
        max-height: 1000px;
        height: 490px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: 100% 100%;
        backdrop-filter: blur(8px);
      }

      .img_destination{
        height: 8%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .img_destination img{
        width: 30%;
        height: 90%;
      }

      .section-heading{
        height: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        color: #FF6200;
      }
    
      .container{
        height: 100%;
        width: 90%;
      }

      .diemden-slider{
        height: 70%;
        width: 100%;
        gap: 5px !important;
      }

      .diemden-card{
        display: flex;
        justify-content: center;
        align-items: center;
        
      }

      .diemden-card-inner{
        height: 95%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        border: solid #FF6200;
        overflow: hidden !important;
        position: relative;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.6);
      }

      .diemden-card-inner img{
        width: 100%;
        height: 100%;
        border-radius: 23px;
        
      }

      .diemden-card-content{
        position: absolute;
        color: white;
        background-color: transparent;
        backdrop-filter: blur(2px);            /* Làm mờ phần nền phía sau */
        transform: translateY(180%);
        width: 78.8%;
        height: 57%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      
      }

      .ten{
        position: absolute;
        font-size: 30px;
        color: white;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
      }

      .diemden-card-content h3{
        width: 100%;
      }

      .diemden-card-content div{
        width: 100%;
        text-align: justify;
      }
      

      .diemden-card-inner:hover .diemden-card-content {
        transform: translateY(0%);
        transition: transform 0.9s ease;
      }

      .diemden-card-inner:hover{
        width: 81%;
        height: 97%;
        
      }

      .diemden-card-inner {
        transition: width 0.5s ease, height 0.5s ease;
      }

      .diemden-card-inner:hover .ten{
        display: none;
      }

      

      /* <=========Tại sao nên chọn CheapTrip=========> */
      .whytravelwidthus{
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 850px;
        background-image: url('/public/img/background.png');

      }

      .content{
        width: 95% !important;
        height: 460px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        border-radius: 10px !important;
        background-color: transparent;
        backdrop-filter: blur(10px);  
        border: solid #FF6200
      }

      .content .image{
        display: none !important;
      }

      .content .four_text{
        height: 270px !important;
        padding-top: 5px !important;
   
      }

      .plane{
        display: none;
      }

      .text{
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        height: 200px !important;
      }

      .title{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center; 
        text-align: center;
        font-size: 17px !important; 
        font-weight: bold !important;
        height: 80px !important;
        width: 100% !important;
      }

      .texttile{
        font-size: 15px !important;
        color: #FF6200;
      }

      .why{
        width: 80px !important;
        height:40px;
        margin-top: 30px !important;
      }

      .why img{
        width: 100% !important;
        height: 100% !important;
        border-radius: 10px !important;
      }

      .noidung{
        font-size: 15px !important;
        
      }

      .text .noidung{
        width: 97% !important;
        font-size: 13px !important;
        margin-bottom: 70px !important;
        text-align: justify;
        color: white;
      }

      .couple img{
        width: 50px !important;
        height: 50px !important;
        display: none;
      }

      .xemthemvechungtoi{
        margin-top: 30px !important;
        
      }

      .xemthemvechungtoi div{
        font-size: 12px !important;
        color: white !important;
      }

      /* 4 content */
      .content1, .content2, .content3, .content4{
        width: 130px !important;
        height: 120px !important;
        display: flex !important;
      }

      .content1, .content3{
        margin-right: 3px !important;
        margin-bottom: 4px !important;
      }

      .content2, .content4{
        margin-left: 3px !important;
        
      }

      .content1 .titlecontent1{
        font-size: 11px !important;
        font-weight: bold !important;
      }

      .content1 .noidungcontent1{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content2 .titlecontent2{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content2 .noidungcontent2{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content3 .titlecontent3{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content3 .noidungcontent3{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content4 .titlecontent4{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content4 .noidungcontent4{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .fourcontent .noidung{
        width: 118px !important;
      }

      .pic img{
        width: 30px !important;
        height: 30px !important;
        margin-left: 5px !important;
      }
      /* <=========Tại sao nên chọn CheapTrip=========> */


      /*<===============Đánh giá nổi bậc================> */
      .benphai{
        width: 95% !important;
        height: 370px !important;
        margin-top: 0 !important;
        margin-bottom: 30px !important;
        /* background: linear-gradient(250deg, #dd490f, #13c0e7);  */
        border-radius: 10px !important;
        overflow-x: hidden !important;
         background-color: transparent;
        backdrop-filter: blur(10px); 
        border: solid #FF6200;
      }


      .reviews-title{
        font-size: 17px !important;
        font-weight: bold !important;
        margin-bottom: 10px !important;
        color: #FF6200;
      }

      .review-card{
        width: 110% !important;
        margin-bottom: 5px !important;
      }
      /*<===============Đánh giá nổi bậc================> */


      /* <=====Đánh giá của khách hàng==========> */
      .nhanxetnoibat{ display: none;}
      /* <=====Đánh giá của khách hàng==========> */

      /* <=======Đóng góp ý kiến========> */
      .donggopyk{
        width: 100%;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        height: 220px !important;
        padding: 0!important;
        
      }
      .boxtgkhaosat{
        width: 50% !important;
        height: 95% !important;
        background-image: url('/public/img/bg_khaosat.png');
        background-size: 100% 100%;
        object-fit: cover;
        border-radius: 10px 0px 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
         box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      }

      .boxtgkhaosat div{
        font-size: 15px;
        width: 90% !important;
        text-align: center;
        color: #FF6200
      }
      .boxtgkhaosat button{
        background-color: #FF6200;
        border: #FF6200;
        font-size: 13px;
        color: white;
        border-radius: 5px;
        font-weight: bold;
      }

      .donggopyk button{
        width: 150px !important;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      }

      .boxvideo{
        width: 45% !important;
        height: 95% !important;
        background-image: url('/public/img/bg_ks_video.png');
         background-size: 100% 100%;
        object-fit: contain !important;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0px 10px 10px 0px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      }

      .playbtn {
        width: 25%; /* Kích thước vòng tròn */
        height: 20%;
        background-color: #ff6200; /* Màu cam */
        border-radius: 50%; /* Tạo hình tròn */
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Hiệu ứng đổ bóng nhẹ */
      }

      .tamgiac {
        width: 0;
        height: 0;
        border-left: 15px solid white; /* Tạo tam giác màu trắng */
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        margin-left: 5px; /* Dịch nhẹ để căn giữa */
      }
      /* <=======Đóng góp ý kiến========> */
      .scroll-to-top{
        display: none;
      }

      /* Ribbon giảm giá mới */
      .discount-ribbon {
        position: absolute;
        top: 14px;
        left: -38px;
        width: 170px;
        height: 32px;
        z-index: 20;
        pointer-events: none;
      }
      .discount-ribbon span {
        display: block;
        width: 170px;
        height: 32px;
        background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
        text-align: center;
        line-height: 32px;
        letter-spacing: 1px;
        box-shadow: 0 4px 16px rgba(221,36,118,0.18);
        border-radius: 6px;
        transform: rotate(-18deg);
        text-shadow: 0 2px 8px rgba(0,0,0,0.08);
        border: 2px solid #fff3;
        animation: ribbon-pop 0.7s cubic-bezier(.68,-0.55,.27,1.55);
      }
      @keyframes ribbon-pop {
        0% { transform: scale(0.7) rotate(-18deg); opacity: 0; }
        80% { transform: scale(1.1) rotate(-18deg); opacity: 1; }
        100% { transform: scale(1) rotate(-18deg); opacity: 1; }
      }
    }
/* Responsive màn hình lớn hơn 480px và nhỏ hơn 767px */

    @media(min-width:480px) and (max-width: 767px){
    .HomeView{
      overflow: hidden !important;
      background-color: rgb(227, 252, 255);
    }

    /* <=======SLIDESHOW=======> */
    .slideshow{
        height: 100% !important;
        width: 100% !important;
        border-radius: 0 !important;
        margin-top: 70px !important;
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        overflow: hidden;
         background-color: rgb(227, 252, 255);
      }

      .carousel-inner img{
        width: 100% !important; /* Chiếm toàn bộ chiều rộng */
        height: 100% !important;
        object-fit: contain !important; /* Đảm bảo ảnh không bị méo */
        border-radius: 10px !important;
        
      }

      .carousel-indicators{ margin-bottom: 1%; }
      
      /* Carousel container */
      .carousel {
        width: 90% !important; /* Chiếm toàn bộ chiều rộng */
        height: 100% !important;
        border-radius: 0 !important; /* Không có border radius */
        display: flex;
        justify-content: center !important;
        align-items: center !;
        border-radius: 10px !important;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        border: solid #FF6200;
      }
      
      .carousel-control-prev, .carousel-control-next {
        width: 20px !important; /* Giảm kích thước nút điều khiển */
        height: 20px !important;
        background: rgba(255, 255, 255, 0.6) !important;
      }

      .carousel-control-prev {
        left: 10px !important; /* Điều chỉnh vị trí nút */
        background-color: #1BC6E8 !important;
        opacity: 0.5 !important; 
      }

      .carousel-control-next {
        right: 10px !important;
        background-color: #1BC6E8 !important;
        opacity: 0.5 !important;
      }

      .carousel-control-prev:active{ opacity: 1 !important; }

      .carousel-control-next:active{ opacity: 1 !important; }

      .carousel-control-prev i, .carousel-control-next i {
        color: #dd490f !important;
        font-size: 18px !important;
      }

      /* Carousel indicators */
      .carousel-indicators {  bottom: 10px; /* Điều chỉnh vị trí indicators */}

      .carousel-indicators button {
          width: 5px !important; /* Giảm kích thước indicators */
          height: 5px !important;
          margin: 0 4px !important;
          background-color: #dd490f !important;
      }
      /* <=======SLIDESHOW=======> */



     /* <=======SEARCH=======> */
       .search {
          width: 100%;
          height: 280px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: 0 !important;
          background-color: rgb(227, 252, 255);
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
          height: 260px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 0px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */
        }

        .noikhoihanh, .loaitour, .noiden {
          width: 100%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
          background-color: rgba(255, 255, 255, 0.9); /* Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
          
        }


        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

        .chonthoigianbx{
         width: 100% !important;
          height: 80%;
          position: relative;
          display: flex;
          align-items: center;
          
        }

        .chonthoigianbx  {
         width: 264px;
         height: 35px;
         border: none;
         border-radius: 5px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         color: #FF6200;
         background-color: white;
         transition: all 0.3s ease;
         cursor: pointer;
      }

      .chonthoigianbx select{
         width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      
      .dp__input_wrap::after {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{
        display: none !important; /* Ẩn icon mặc định */
      }

     
      .calendar-icon{
        padding-left: 0px;
      }

    
        .btntimkiem {
          width: 40%; /* Chiếm toàn bộ chiều rộng */
          height: 30px; /* Đồng bộ với các input khác */
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0px; /* Khoảng cách dưới */
        }

        .btntimkiem button{
          font-size: 12px !important;
          
        }

        .btntimkiem button:hover {
          background-color: #f58f4f; /* Màu cam nhạt khi hover */
          transform: scale(1.05); /* Phóng to nhẹ */
        }

        /* Datepicker adjustments */
        .noikhoihanhbox .dp__input {
          background-color: white; /* Nền trắng */
          border-radius: 8px; /* Bo tròn */
          padding: 0 10px; /* Padding đồng bộ */
          font-size: 14px; /* Kích thước chữ */
          cursor: pointer;
        }

        :deep(.dp__input_wrap::after) {
          font-size: 14px; /* Kích thước chữ placeholder */
          left: 10px; /* Căn chỉnh vị trí */
        }
    
        /* <=======SEARCH=======> */

      /* TOURS */
      .danhmucbai{
        margin-top: 0px !important;
        width: 100%;
        min-height: 300px;
        height: auto !important;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
      }

      .tours {
        width: 90%;
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0px !important;
        gap: 10px;
      }

      .lineandtitle img{
        width: 80px!important;
        height: 40px!important;
        margin-bottom: 20px!important;
        margin-top: 10px!important;
      }

      .article {
        width: calc(50% - 5px);
        min-width: 140px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .card {
        width: 100% !important;
        height: 100% !important;
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: #fff;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }

      .card img {
        width: 100% !important;
        height: 70px !important;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }

      .card-body {
        background-color: transparent;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
      }

      .card-title {
        font-size: 7pt !important;
        color: #333;
        background-color: transparent;
        width: 100% !important;
        line-height: 1.1;
        margin-bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        height: 22px;
      }

      .starandcmt {
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0 0px; /* Giảm từ 0 2px xuống 0 1px */
        margin-bottom: 0!important; /* Giảm từ 5px xuống 0px */
        gap: 40px; /* Thêm gap để điều chỉnh khoảng cách giữa sao và bình luận */
      
      }

      .star {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px!important; /* Thu gọn theo nội dung */
      }

      .numberstar, .cmt {
        font-size: 8px !important; /* Giảm từ 6pt xuống 5pt */
        color: #666;
      }

      .star img {
        width: 8px !important; /* Giảm từ 6px xuống 5px */
        height: 8px !important;
        margin-left: 0.3px; /* Giảm từ 0.5px xuống 0.3px */
      }

      .price {
        font-size: 8pt !important;
        color: #FF6200;
        font-weight: bold;
        text-align: center;
        margin-top: 0px !important; /* Giảm từ 5px xuống 0px */
      }
        /* <=======TOUR=======> */

          /* Destination */
      .diemdenhangdauvn{
        background-size: cover;
        width: 100% !important;
        max-height: 1000px;
        height: 490px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: 100% 100%;
        backdrop-filter: blur(8px);
      }

      .img_destination{
        height: 8%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .img_destination img{
        width: 18%;
        height: 95%;
      }

      .section-heading{
        height: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        color: #FF6200;
      }
    
      .container{
        height: 100%;
        width: 90%;
      }

      .diemden-slider{
        height: 70%;
        width: 100%;
        gap: 5px !important;
      }

      .diemden-card{
        display: flex;
        justify-content: center;
        align-items: center;
        
      }

      .diemden-card-inner{
        height: 95%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        border: solid #FF6200;
        overflow: hidden !important;
        position: relative;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.6);
      }

      .diemden-card-inner img{
        width: 100%;
        height: 100%;
        border-radius: 23px;
        
      }

      .diemden-card-content{
        position: absolute;
        color: white;
        background-color: transparent;
        backdrop-filter: blur(2px);            /* Làm mờ phần nền phía sau */
        transform: translateY(180%);
        width: 78.8%;
        height: 57%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      
      }

      .ten{
        position: absolute;
        font-size: 30px;
        color: white;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
      }

      .diemden-card-content h3{
        width: 100%;
      }

      .diemden-card-content div{
      width: 100%;
      text-align: justify;
      }
      

      .diemden-card-inner:hover .diemden-card-content {
        transform: translateY(0%);
          transition: transform 0.9s ease;
      }

      .diemden-card-inner:hover{
        width: 81%;
        height: 97%;
        
      }

      .diemden-card-inner {
        transition: width 0.5s ease, height 0.5s ease;
      }

      .diemden-card-inner:hover .ten{
        display: none;
      }

      

       /* <=========Tại sao nên chọn CheapTrip=========> */
      .whytravelwidthus{
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 850px;
        background-image: url('/public/img/background.png');

      }

      .content{
        width: 95% !important;
        height: 460px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        border-radius: 10px !important;
        background-color: transparent;
        backdrop-filter: blur(10px);  
        border: solid #FF6200
      }

      .content .image{
        display: none !important;
      }

      .content .four_text{
        height: 270px !important;
        padding-top: 5px !important;
   
      }

      .plane{
        display: none;
      }

      .text{
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        height: 200px !important;
      }

      .title{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center; 
        text-align: center;
        font-size: 18px !important; 
        font-weight: bold !important;
        height: 80px !important;
        width: 100% !important;
      }

      .texttile{
        font-size: 15px !important;
        color: #FF6200;
      }

      .why{
        width: 80px !important;
        height:40px;
        margin-top: 30px !important;
      }

      .why img{
        width: 100% !important;
        height: 100% !important;
        border-radius: 10px !important;
      }

      .noidung{
        font-size: 15px !important;
        
      }

      .text .noidung{
        width: 97% !important;
        font-size: 13px !important;
        margin-bottom: 70px !important;
        text-align: justify;
        color: white;
      }

      .couple img{
        width: 50px !important;
        height: 50px !important;
        display: none;
      }

      .xemthemvechungtoi{
        margin-top: 30px !important;
        
      }

      .xemthemvechungtoi div{
        font-size: 12px !important;
        color: white !important;
      }

      /* 4 content */
      .content1, .content2, .content3, .content4{
        width: 200px !important;
        height: 120px !important;
        display: flex !important;
      }

      .content1, .content3{
        margin-right: 3px !important;
        margin-bottom: 4px !important;
      }

      .content2, .content4{
        margin-left: 3px !important;
        
      }

      .content1 .titlecontent1{
        font-size: 11px !important;
        font-weight: bold !important;
      }

      .content1 .noidungcontent1{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content2 .titlecontent2{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content2 .noidungcontent2{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content3 .titlecontent3{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content3 .noidungcontent3{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content4 .titlecontent4{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content4 .noidungcontent4{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .fourcontent .noidung{
        width: 118px !important;
      }

      .pic img{
        width: 30px !important;
        height: 30px !important;
        margin-left: 5px !important;
      }

      /* <=========Tại sao nên chọn CheapTrip=========> */
        
       /*<===============Đánh giá nổi bậc================> */
      .benphai{
        width: 95% !important;
        height: 90% !important;
        margin-top: 0 !important;
        background-color: transparent;
        backdrop-filter: blur(10px);  
        border: solid #FF6200;
        border-radius: 10px !important;
        overflow-x: hidden !important;
      }


      .reviews-title{
        font-size: 17px !important;
        font-weight: bold !important;
        margin-bottom: 10px !important;
        color: #FF6200;
      }

      .review-card{
        width: 100% !important;
        margin-bottom: 5px !important;
        max-width: 100%;
      }
      /*<===============Đánh giá nổi bậc================> */
      
      /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */
       /* NHẬN XÉT NỔI BẬT */
      .nhanxetnoibat {
          display: none;
      }
      /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */

        /* ĐÓNG GÓP Ý KIẾN */
      .donggopyk{
        width: 100%;
        height: 350px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .boxtgkhaosat{
        width: 40%;
        height: 70%;
        background-color: red;
        background-image: url('/public/img/bg_khaosat.png');
        border-radius: 25px 0px 0px 25px;
        background-size: cover;
        background-size: 457px 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
     }

       .boxvideo{
        width: 50%;
        height: 70%;
        background-image: url('/public/img/bg_ks_video.png');
        background-size: 381px 280px;
        border-radius: 0px 25px 25px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
     }

     .boxtgkhaosat button{
      border-radius: 3px;
      background-color: #FF6200;
      color: white;
      border: #FF6200;
      height: 35px;
      width: 180px;
      margin-top: 20px;
      font-weight: bold;
      font-size: 10pt;
      transition: transform 0.3s ease;
     }

    .boxtgkhaosat button:hover{
        transform: scale(1.1); 
    }

     .playbtn{
      width: 40px;
      height: 40px;
      background-color: #FF6200;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
       transition: transform 0.3s ease;
     }

     .tamgiac {
       width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid rgb(234, 234, 234);
         transition: transform 0.3s ease;
      }

    .playbtn:hover {
      transform: scale(1.1); /* phóng to nút */
    }

    .playbtn:hover .tamgiac {
      transform: scale(1.1); /* phóng to tam giác */
    }

    /* ĐÓNG GÓP Ý KIẾN */

      .thongke{
        width: 30%;
        height: 80%;
        background-color: red;
        margin-left: 5%;
      }

      /* Nút lên đầu trang */
      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .scroll-to-top:hover {
        transform: translateY(-3px);
        filter: brightness(1.1);
      }

      .scroll-progress-ring {
        position: relative;
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
          justify-content: center;
        transition: all 0.3s ease;
      }

      .scroll-progress-ring:hover {
        box-shadow: 0 6px 20px rgba(255, 98, 0, 0.3);
        transform: scale(1.05);
      }

      .progress-ring {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-90deg);
      }

      .progress-ring-circle {
        transition: stroke-dashoffset 0.3s ease;
      }

      .scroll-progress-ring i {
        color: #FF6200;
        font-size: 18px;
        font-weight: bold;
        z-index: 1;
      }

      /* Hiệu ứng fade cho nút */
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
        transform: translateY(20px);
      }

      /* Responsive cho nút scroll to top */
      @media (max-width: 768px) {
        .scroll-to-top {
          bottom: 20px;
          right: 20px;
        }
        
        .scroll-progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring circle {
          r: 20;
          cx: 25;
          cy: 25;
        }
        
        .scroll-progress-ring i {
          font-size: 16px;
        }
      }
    }

    @media(min-width:767px) and (max-width: 950px){
    .HomeView{
      overflow: hidden !important;
    }

    /* <=======SLIDESHOW=======> */
    .slideshow{
        height: 100% !important;
        width: 100% !important;
        border-radius: 0 !important;
        margin-top: 70px !important;
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        overflow: hidden;
        
      }

      .carousel-inner img{
        width: 100% !important; /* Chiếm toàn bộ chiều rộng */
        height: 100% !important;
        object-fit: contain !important; /* Đảm bảo ảnh không bị méo */
        border-radius: 10px !important;
        
      }

      .carousel-indicators{ margin-bottom: 1%; }
      
      /* Carousel container */
      .carousel {
          width: 90% !important; /* Chiếm toàn bộ chiều rộng */
          height: 100% !important;
          border-radius: 0 !important; /* Không có border radius */
          display: flex;
          justify-content: center !important;
          align-items: center !;
          border-radius: 10px !important;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          border: solid #FF6200;
      }
      
      .carousel-control-prev, .carousel-control-next {
          width: 40px !important; /* Giảm kích thước nút điều khiển */
          height: 40px !important;
        background: rgba(255, 255, 255, 0.6) !important;
      }

      .carousel-control-prev {
          left: 10px !important; /* Điều chỉnh vị trí nút */
          background-color: #1BC6E8 !important;
           opacity: 0.5 !important; 
      }

      .carousel-control-next {
          right: 10px !important;
          background-color: #1BC6E8 !important;
          opacity: 0.5 !important;
      }

      .carousel-control-prev:active{ opacity: 1 !important; }

      .carousel-control-next:active{ opacity: 1 !important; }

      .carousel-control-prev i, .carousel-control-next i {
        color: #dd490f !important;
        font-size: 25px !important;
      }

      /* Carousel indicators */
      .carousel-indicators {  bottom: 10px; /* Điều chỉnh vị trí indicators */}

      .carousel-indicators button {
          width: 10px !important; /* Giảm kích thước indicators */
          height: 10px !important;
          margin: 0 4px !important;
          background-color: #dd490f !important;
      }
         /* <=======SLIDESHOW=======> */



     /* <=======SEARCH=======> */
       .search {
          width: 100%;
          height: 280px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin: 0 !important;
          background-color: rgb(227, 252, 255);
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
          height: 260px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 0px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */
        }

        .noikhoihanh, .loaitour, .noiden {
          width: 100%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
          background-color: rgba(255, 255, 255, 0.9); /* Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
          
        }


        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

        .chonthoigianbx{
         width: 100% !important;
          height: 80%;
          position: relative;
          display: flex;
          align-items: center;
          
        }

        .chonthoigianbx  {
         width: 264px;
         height: 35px;
         border: none;
         border-radius: 5px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         color: #FF6200;
         background-color: white;
         transition: all 0.3s ease;
         cursor: pointer;
      }

      .chonthoigianbx select{
         width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      
      .dp__input_wrap::after {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{
        display: none !important; /* Ẩn icon mặc định */
      }

     
      .calendar-icon{
        padding-left: 0px;
      }

    
        .btntimkiem {
          width: 40%; /* Chiếm toàn bộ chiều rộng */
          height: 30px; /* Đồng bộ với các input khác */
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0px; /* Khoảng cách dưới */
        }

        .btntimkiem button{
          font-size: 12px !important;
          
        }

        .btntimkiem button:hover {
          background-color: #f58f4f; /* Màu cam nhạt khi hover */
          transform: scale(1.05); /* Phóng to nhẹ */
        }

        /* Datepicker adjustments */
        .noikhoihanhbox .dp__input {
          background-color: white; /* Nền trắng */
          border-radius: 8px; /* Bo tròn */
          padding: 0 10px; /* Padding đồng bộ */
          font-size: 14px; /* Kích thước chữ */
          cursor: pointer;
        }

        :deep(.dp__input_wrap::after) {
          font-size: 14px; /* Kích thước chữ placeholder */
          left: 10px; /* Căn chỉnh vị trí */
        }
    
        /* <=======SEARCH=======> */

      /* TOURS */
     /* TOURS */
      .danhmucbai{
        margin-top: 0px !important;
        width: 100%;
        min-height: 300px;
        height: auto !important;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-bottom: 40px;
      }

      .tours {
        width: 90%;
        max-width: 1300px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 0px !important;
        gap: 10px;
      }
      /* <=======TOUR=======> */

          /* Destination */
      .diemdenhangdauvn{
        background-size: cover;
        width: 100% !important;
        max-height: 1000px;
        height: 490px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: 100% 100%;
        backdrop-filter: blur(8px);
      }

      .img_destination{
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .img_destination img{
        width: 18%;
        height: 90%;
      }

      .section-heading{
        height: 8%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        color: #FF6200;
      }
    
      .container{
        height: 100%;
        width: 90%;
      }

      .diemden-slider{
        height: 70%;
        width: 100%;
        gap: 5px !important;
      }

      .diemden-card{
        display: flex;
        justify-content: center;
        align-items: center;
        
      }

      .diemden-card-inner{
        height: 95%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        border: solid #FF6200;
        overflow: hidden !important;
        position: relative;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.6);
      }

      .diemden-card-inner img{
        width: 100%;
        height: 100%;
        border-radius: 23px;
        
      }

      .diemden-card-content{
        position: absolute;
        color: white;
        background-color: transparent;
        backdrop-filter: blur(2px);            /* Làm mờ phần nền phía sau */
        transform: translateY(180%);
        width: 78.8%;
        height: 57%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      
      }

      .ten{
        position: absolute;
        font-size: 30px;
        color: white;
        font-weight: bold;
        font-family: 'Quicksand', sans-serif;
      }

      .diemden-card-content h3{
        width: 100%;
      }

      .diemden-card-content div{
      width: 100%;
      text-align: justify;
      }
      

      .diemden-card-inner:hover .diemden-card-content {
        transform: translateY(0%);
          transition: transform 0.9s ease;
      }

      .diemden-card-inner:hover{
        width: 81%;
        height: 97%;
        
      }

      .diemden-card-inner {
        transition: width 0.5s ease, height 0.5s ease;
      }

      .diemden-card-inner:hover .ten{
        display: none;
      }

      

       /* <=========Tại sao nên chọn CheapTrip=========> */
      .whytravelwidthus{
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 850px;
        background-image: url('/public/img/background.png');

      }

      .content{
        width: 95% !important;
        height: 460px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        border-radius: 10px !important;
        background-color: transparent;
        backdrop-filter: blur(10px);  
        border: solid #FF6200
      }

      .content .image{
        display: none !important;
      }

      .content .four_text{
        height: 270px !important;
        padding-top: 5px !important;
   
      }

      .plane{
        display: none;
      }

      .text{
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        height: 200px !important;
      }

      .title{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center; 
        text-align: center;
        font-size: 18px !important; 
        font-weight: bold !important;
        height: 80px !important;
        width: 100% !important;
      }

      .texttile{
        font-size: 15px !important;
        color: #FF6200;
      }

      .why{
        width: 80px !important;
        height:40px;
        margin-top: 30px !important;
      }

      .why img{
        width: 100% !important;
        height: 100% !important;
        border-radius: 10px !important;
      }

      .noidung{
        font-size: 15px !important;
        
      }

      .text .noidung{
        width: 97% !important;
        font-size: 13px !important;
        margin-bottom: 70px !important;
        text-align: justify;
        color: white;
      }

      .couple img{
        width: 50px !important;
        height: 50px !important;
        display: none;
      }

      .xemthemvechungtoi{
        margin-top: 30px !important;
        
      }

      .xemthemvechungtoi div{
        font-size: 12px !important;
        color: white !important;
      }

      /* 4 content */
      .content1, .content2, .content3, .content4{
        width: 200px !important;
        height: 120px !important;
        display: flex !important;
      }

      .content1, .content3{
        margin-right: 3px !important;
        margin-bottom: 4px !important;
      }

      .content2, .content4{
        margin-left: 3px !important;
        
      }

      .content1 .titlecontent1{
        font-size: 11px !important;
        font-weight: bold !important;
      }

      .content1 .noidungcontent1{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content2 .titlecontent2{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content2 .noidungcontent2{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content3 .titlecontent3{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content3 .noidungcontent3{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .content4 .titlecontent4{
        font-size: 11px !important;
        font-weight: bold !important;
      }
      .content4 .noidungcontent4{
        font-size: 9px !important;
        text-align: center;
        width: 120px !important;
        height: 50px !important;
      }

      .fourcontent .noidung{
        width: 118px !important;
      }

      .pic img{
        width: 30px !important;
        height: 30px !important;
        margin-left: 5px !important;
      }

      /* <=========Tại sao nên chọn CheapTrip=========> */
        
       /*<===============Đánh giá nổi bậc================> */
      .benphai{
        width: 95% !important;
        height: 90% !important;
        margin-top: 0 !important;
        background-color: transparent;
        backdrop-filter: blur(10px);  
        border: solid #FF6200;
        border-radius: 10px !important;
        overflow-x: hidden !important;
      }


      .reviews-title{
        font-size: 17px !important;
        font-weight: bold !important;
        margin-bottom: 10px !important;
        color: #FF6200;
      }

      .review-card{
        width: 100% !important;
        margin-bottom: 5px !important;
        max-width: 100%;
      }
      /*<===============Đánh giá nổi bậc================> */
      
      /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */
       /* NHẬN XÉT NỔI BẬT */
      .nhanxetnoibat {
          display: none;
      }
      /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */

        /* ĐÓNG GÓP Ý KIẾN */
      .donggopyk{
        width: 100%;
        height: 350px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .boxtgkhaosat{
        width: 40%;
        height: 70%;
        background-color: red;
        background-image: url('/public/img/bg_khaosat.png');
        border-radius: 25px 0px 0px 25px;
        background-size: cover;
        background-size: 457px 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
     }

       .boxvideo{
        width: 50%;
        height: 70%;
        background-image: url('/public/img/bg_ks_video.png');
        background-size: 470px 280px;
        border-radius: 0px 25px 25px 0px;
        object-fit: contain;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
     }

     .boxtgkhaosat button{
      border-radius: 3px;
      background-color: #FF6200;
      color: white;
      border: #FF6200;
      height: 35px;
      width: 180px;
      margin-top: 20px;
      font-weight: bold;
      font-size: 10pt;
      transition: transform 0.3s ease;
     }

    .boxtgkhaosat button:hover{
        transform: scale(1.1); 
    }

     .playbtn{
      width: 40px;
      height: 40px;
      background-color: #FF6200;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
       transition: transform 0.3s ease;
     }

     .tamgiac {
       width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid rgb(234, 234, 234);
         transition: transform 0.3s ease;
      }

    .playbtn:hover {
      transform: scale(1.1); /* phóng to nút */
    }

    .playbtn:hover .tamgiac {
      transform: scale(1.1); /* phóng to tam giác */
    }

    /* ĐÓNG GÓP Ý KIẾN */

      .thongke{
        width: 30%;
        height: 80%;
        background-color: red;
        margin-left: 5%;
      }

      /* Nút lên đầu trang */
      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .scroll-to-top:hover {
        transform: translateY(-3px);
        filter: brightness(1.1);
      }

      .scroll-progress-ring {
        position: relative;
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
          justify-content: center;
        transition: all 0.3s ease;
      }

      .scroll-progress-ring:hover {
        box-shadow: 0 6px 20px rgba(255, 98, 0, 0.3);
        transform: scale(1.05);
      }

      .progress-ring {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-90deg);
      }

      .progress-ring-circle {
        transition: stroke-dashoffset 0.3s ease;
      }

      .scroll-progress-ring i {
        color: #FF6200;
        font-size: 18px;
        font-weight: bold;
        z-index: 1;
      }

      /* Hiệu ứng fade cho nút */
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
        transform: translateY(20px);
      }

      /* Responsive cho nút scroll to top */
      @media (max-width: 768px) {
        .scroll-to-top {
          bottom: 20px;
          right: 20px;
        }
        
        .scroll-progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring circle {
          r: 20;
          cx: 25;
          cy: 25;
        }
        
        .scroll-progress-ring i {
          font-size: 16px;
        }
      }
    }

    @media(min-width: 950px) and (max-width: 1200px){
      .HomeView{
        overflow: hidden !important;
        background-color: rgb(227, 252, 255); 
        width: 100%;
      }

      /* <=======SLIDESHOW=======> */
      .slideshow{
        height: 100% !important;
        width: 100% !important;
        border-radius: 0 !important;
        margin-top: 70px !important;
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        overflow: hidden;
        
      }

      .carousel-inner img{
        width: 100% !important; /* Chiếm toàn bộ chiều rộng */
        height: 100% !important;
        object-fit: contain !important; /* Đảm bảo ảnh không bị méo */
        border-radius: 10px !important;
        
      }

      .carousel-indicators{ margin-bottom: 1%; }
      
      /* Carousel container */
      .carousel {
          width: 90% !important; /* Chiếm toàn bộ chiều rộng */
          height: 100% !important;
          border-radius: 0 !important; /* Không có border radius */
          display: flex;
          justify-content: center !important;
          align-items: center !;
          border-radius: 10px !important;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          border: solid #FF6200;
      }
      
      .carousel-control-prev, .carousel-control-next {
          width: 40px !important; /* Giảm kích thước nút điều khiển */
          height: 40px !important;
        background: rgba(255, 255, 255, 0.6) !important;
      }

      .carousel-control-prev {
          left: 10px !important; /* Điều chỉnh vị trí nút */
          background-color: #1BC6E8 !important;
           opacity: 0.5 !important; 
      }

      .carousel-control-next {
          right: 10px !important;
          background-color: #1BC6E8 !important;
          opacity: 0.5 !important;
      }

      .carousel-control-prev:active{ opacity: 1 !important; }

      .carousel-control-next:active{ opacity: 1 !important; }

      .carousel-control-prev i, .carousel-control-next i {
        color: #dd490f !important;
        font-size: 25px !important;
      }

      /* Carousel indicators */
      .carousel-indicators {  bottom: 10px; /* Điều chỉnh vị trí indicators */}

      .carousel-indicators button {
          width: 10px !important; /* Giảm kích thước indicators */
          height: 10px !important;
          margin: 0 4px !important;
          background-color: #dd490f !important;
      }
      /* SLIDESHOW */

       /* TÌM KIỂM  */
      .search{
        width: 100%;
        height:80px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .searchbox{
        width: 90%;
        height: 70%;
        background: linear-gradient(135deg, #1BC6E8, #0D9DBF);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2);
        padding: 0 20px;
      }

      .noikhoihanh, .loaitour, .noiden{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FF6200;
        background-color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .noikhoihanh:hover, .loaitour:hover, .noiden:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(255, 98, 0, 0.2);
      }

      .noikhoihanh i, .loaitour i, .noiden i {
        font-size: 16px;
        color: #FF6200;
      }

      .btntimkiem{
        width: 120px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .noikhoihanhbox{
        width: 80%;
        height: 80%;
        position: relative;
      }

      .btntimkiem button{
        width: 150px;
        height: 80%;
        border-radius: 5px;
        background-color: #FF6200;
        border: none;
        color: white;
      }

      .noikhoihanhbox select {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #333;
        font-size: 14px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 15px;
        transition: all 0.3s ease;
      }

      .noikhoihanhbox select:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
      }

      .noikhoihanhbox select:focus {
        background-color: white;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
      }

      .noikhoihanhbox select option {
        background-color: white;
        color: #333;
        padding: 10px;
      }

      .noikhoihanhbox select option:hover {
        background-color: #1BC6E8;
        color: white;
      }

      .btntimkiem button:hover{
        background-color: #f58f4f;
      }

      /* <=======SEARCH=======> */
       .search {
          width: 100%;
        height: 140px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-top: 10px !important;
          background-color: rgb(227, 252, 255); 
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
        height: 120px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
           background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 10px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */

        }

        .noikhoihanh, .loaitour, .noiden {
        width: 23%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
        /* background-color: rgba(255, 255, 255, 0.9); Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
        }

        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

        .chonthoigianbx  {
        width: 100% !important;
         height: 35px;
         border: none;
         border-radius: 5px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         color: #FF6200;
         background-color: white; 
         transition: all 0.3s ease;
         cursor: pointer;
      }

      .chonthoigianbx select{
         width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      .dp__input_wrap::after {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{ display: none !important; /* Ẩn icon mặc định */}

      .calendar-icon{ padding-left: 0px; }

      .btntimkiem {
        width: 40%; /* Chiếm toàn bộ chiều rộng */
        height: 40%; /* Đồng bộ với các input khác */
        display: flex;
        justify-content: center !important;
        align-items: center !important;
      }

      .btntimkiem button{ font-size: 15px !important; }

      .btntimkiem button:hover {
        background-color: #f58f4f; /* Màu cam nhạt khi hover */
        transform: scale(1.05); /* Phóng to nhẹ */
      }

      /* Datepicker adjustments */
      .noikhoihanhbox .dp__input {
        background-color: white; /* Nền trắng */
        border-radius: 8px; /* Bo tròn */
        padding: 0 10px; /* Padding đồng bộ */
        font-size: 14px; /* Kích thước chữ */
        cursor: pointer;
      }

      :deep(.dp__input_wrap::after) {
        font-size: 14px; /* Kích thước chữ placeholder */
        left: 10px; /* Căn chỉnh vị trí */
      }
      /* <=======SEARCH=======> */

      /* TOUR */
      .danhmucbai{
        margin-top: 0;
        width: 100%;
        height: 90%;
        max-height: 1000px;
        display: flex;
        flex-direction: column; /* ✅ Các con (lineandtitle và tours) xếp dọc */
        align-items: center; 
        background-color: rgb(227, 252, 255) ; 
      }

      .lineandtitle{
          width: 100%;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
      }

      .tours{
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap; /* Cho phép xuống hàng khi đầy */
          justify-content: center; /* Căn giữa theo chiều ngang */
          margin: 10px 0px;
          gap: 20px;
      }

      .article{
          /*width: calc(20% - 15px);  25% cho 4 card một hàng, trừ đi gap */
          width: 22% !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .card {
          width: 100% !important;
          transition: transform 0.6s ease;
          cursor: pointer;
          border: none;
          height: 280px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          border-radius: 10px !important;
      }

      .card-img-top {
          height: 130px !important;
          border-radius: 10px 10px 0px 0px !important;
          object-fit: cover;
      }

      .card-body {
          padding: 15px;
      }

      .card-title {
          margin-bottom: 10px;
          line-height: 1.4;
          height: 40px;
          overflow: hidden;
      }

      .starandcmt{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
      }

      .star{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card:hover {
        transform: scale(1.05); /* Phóng to nhẹ */
        z-index: 2; /* Đảm bảo nổi lên trên khi phóng to */
      }

      /* TOUR */

       /* Destination */
     .diemdenhangdauvn{
      background-size: cover;
      width: 100% !important;
      max-height: 1000px;
      height: 520px !important;
      display: flex;
      align-items: center;
      background-size: 100% 100%;
      backdrop-filter: blur(8px);
    }

    .img_destination{
      height: 12%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .img_destination img{
      width: 10%;
      height: 100%;
    }

    .section-heading{
      height: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;
      font-weight: bold;
      color: #FF6200;
    }
   
    .container{
      height: 100%;
      width: 90%;
    }

    .diemden-slider{
      height: 80%;
      width: 100%;
      gap: 5px !important;
    }

    .diemden-card{
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .diemden-card-inner{
      height: 95%;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      border: solid #FF6200;
      overflow: hidden !important;
      position: relative;
      box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.6);
    }

    .diemden-card-inner img{
      width: 100%;
      height: 100%;
      border-radius: 23px;
      
    }

    .diemden-card-content{
      position: absolute;
      color: white;
      background-color: transparent;
      backdrop-filter: blur(2px);            /* Làm mờ phần nền phía sau */
      transform: translateY(150%);
      width: 78.8%;
      height: 57%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
     
    }

    .ten{
      position: absolute;
      font-size: 40px;
      color: white;
      font-weight: bold;
      font-family: 'Quicksand', sans-serif;
    }

    .diemden-card-content h3{
      width: 100%;
    }

    .diemden-card-content div{
    width: 100%;
    text-align: justify;
    }
     

    .diemden-card-inner:hover .diemden-card-content {
      transform: translateY(0%);
        transition: transform 0.9s ease;
    }

    .diemden-card-inner:hover{
      width: 81%;
      height: 97%;
      
    }

    .diemden-card-inner {
      transition: width 0.5s ease, height 0.5s ease;
    }

    .diemden-card-inner:hover .ten{
      display: none;
    }

        /* <=========Tại sao nên chọn CheapTrip=========> */
      .whytravelwidthus{
        display: flex !important;
      flex-direction: row;
        justify-content: center !important;
        align-items: center !important;
        width: 100%;
      height: 750px;
      /* background-color: rgb(227, 252, 255);  */
      background-image: url('/public/img/background.png');
      background-position-y: 10%;
      }

      .content{
      width: 60% !important;
      height: 90% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        border-radius: 10px !important;  
      /* background-color: red; */
    
      background-color: transparent;
      backdrop-filter: blur(10px);  
      border: solid #FF6200
      }

      .content .image{ display: none !important; }

      .content .four_text{
      height: 57% !important;
        margin-bottom: 0px;
      width: 80% !important; 
      margin-top: 1px !important;
      }

      .plane{ display: none; }

      .text{
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        height: 230px !important;
        margin-top: 3%;
      }

      .title{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center; 
        text-align: center;
        font-size: 17px !important; 
        font-weight: bold !important;
        height: 90px !important;
        width: 100% !important;
      color:#FF6200
      }
      
      .texttile{
      font-size: 25px !important;
        width: 100% !important;
      }

      .why{
        width: 120px !important;
        height:70px;
      }

      .why img{
        width: 100% !important;
        height: 100% !important;
        border-radius: 10px !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text .noidung{
        width: 92% !important;
      font-size: 19px !important;
        text-align: justify;
      color: white;
      }


      .xemthemvechungtoi div{
      font-size: 18px !important;
      margin-top: 8%;
      backdrop-filter: blur(10px);  
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      }

      /* 4 content */
      .content1, .content2, .content3, .content4{
      width: 200px !important;
      height: 170px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        padding: 0 !important;
      }

       .content1, .content3{
        margin-right: 3px !important;
        margin-bottom: 4px !important;
      display: flex;
      }
        
      .content2, .content4{ margin-left: 3px !important;}

    .content1 .pic, .content2 .pic, .content3 .pic, .content4 .pic{ margin-bottom: 0px; }
    .content1 .noidung, .content2 .noidung, .content2 .noidung{ margin-bottom: 25px;}

      .content1 .titlecontent1, .content2 .titlecontent2, .content3 .titlecontent3, .content4 .titlecontent4 {
      font-size: 20px !important;
        font-weight: bold !important;
      }

      .content1 .noidungcontent1, .content2 .noidungcontent2, .content3 .noidungcontent3,  .content4 .noidungcontent4{
      font-size: 15px !important;
        text-align: center;
      width: 70% !important;
      height: 70% !important;
      margin-left: 45px !important;
      }

      .fourcontent .content1 .noidung, .content2 .noidung, .content3 .noidung, .content4 .noidung { width: 300px !important;}

      .pic img{
      width: 40px !important;
      height: 40px !important;
      }

      /* <=========Tại sao nên chọn CheapTrip=========> */
        
       /*<===============Đánh giá nổi bậc================> */
      .benphai{
        width: 30% !important;
        height: 90% !important;
        margin-top: 0 !important;
        background-color: transparent;
        backdrop-filter: blur(10px);  
        border: solid #FF6200;
        border-radius: 10px !important;
        overflow-x: hidden !important;
      }


      .reviews-title{
        font-size: 17px !important;
        font-weight: bold !important;
        margin-bottom: 10px !important;
        color: #FF6200;
      }

      .review-card{
        width: 110% !important;
        margin-bottom: 5px !important;
      }
      /*<===============Đánh giá nổi bậc================> */
      
      /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */
       /* NHẬN XÉT NỔI BẬT */
      .nhanxetnoibat {
          width: 100%;
          height: 590px;
          background-image: url('/public/img/backgroundnhanxet.png'); 
          display: flex;
          flex-direction: column; 
          align-items: center;
          justify-content: center;
      }

      .img_nhanxet {
          width: 100%;
          height: 50px;
          margin-top: 20px;
          display: flex;
          justify-content: center;
      }

      .img_nhanxet img {
          width: 120px;
          height: 50px;
          margin-top: 0px;
      }

      .title_nhanxet h2{
          width: 100%;
          height: 80px;
          text-align: center;
          font-size: 30px !important;
          color: #FF6200;
      }

      .nd_nhanxet {
          width: 100%;
          height: 70px;
          text-align: center;
          display: flex;
          justify-content: center;
      }

      .nd_nhanxet div{
        width: 95% !important;
        font-size: 22px !important;
      }

      .nhanxet {
        width: 100% ;
        height: 295px;
        display: flex;
        flex-direction: row;
        justify-content: center !important;
        align-items: center !important;
      }

      .avata_customer {
        width: 76%;
        height: 100%;
        display: flex;
        justify-content: center !important; 
        align-items: center !important;
        flex-wrap: wrap;

      }

      .avata_customer .avt img {
          width: 60px !important;
          height: 62px !important;
          border-radius: 50px !important; /* Điều chỉnh border-radius nếu cần */
      }

      .avt {
        width: 65px;
        height: 65px;
        border-radius: 30px;
        margin-top: 20px;
        border: solid 3px green;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }

      .avt img {
        width: 55px !important;
        height: 55px !important;
        border-radius: 30px !important;
      }

      .comment {
        height: 53% !important;
        display: flex;
        justify-content: center;
        margin-top: 0px !important;
      }

      .comment div{
        width: 100% !important;
        height: 46% !important;
        font-size: 25px !important;
        margin-bottom: 0px !important;
      }

      .line { width: 80%; height: 2px; margin-top: 5%}
      
      .daunhaytrai, .daunhayphai{
          width: 12% !important;
          display: flex !important;
          justify-content: center !important;
      }

      .imgtrai {
          width: 10% !important;
          height: 10% !important;
          margin-right: 220px;
          margin-top: 55px;
          font-size: 60pt;
          text-align: center;
          color: gray;
      }

      .imgphai {
          width: 10%;
          height: 10%;
          margin-right: 80px;
          margin-top: 55px;
          font-size: 60pt;
          text-align: center;
          color: gray;
      }

      .imgtrai, .imgphai{ font-size: 50px; }

      .imgtrai i{ margin-left: 20px; }

      .thongtinkh {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 14pt;
          font-weight: bold;
          margin-top: 20px;
      }

      /* Transition effects */
      .fade-enter-active, .fade-leave-active { transition: all 0.5s ease-in-out; }

      .fade-enter-from, .fade-leave-to {
          opacity: 0;
          transform: translateX(30px);
      }

      /* Navigation dots */
      .navigation-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
          position: relative;
          z-index: 3;
      }

      .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(128, 128, 128, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
      }

      .dot:hover {
          transform: scale(1.2);
          background-color: #FF6200;
      }

      .dot.active {
          background-color: #FF6200;
          transform: scale(1.2);
      }

      /* Animation cho quotes */
      .imgtrai i, .imgphai i { animation: float 3s ease-in-out infinite; }

      @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
      }

      /* ... rest of your existing styles ... */

      /* Add these styles for carousel controls */
      .carousel-control-prev, .carousel-control-next {
          width: 5%;
          opacity: 0.7;
      }

      .carousel-control-prev i, .carousel-control-next i{
        font-size: 20px;
        color: #dd490f !important;
      }
      .carousel-control-prev{
        background-color: #1BC6E8 !important;
        width: 30px !important;
        height: 30px !important;
        margin-left: 20px;
      }

      .carousel-control-next{
        background-color: #1BC6E8 !important;
        width: 30px !important;
        height: 30px !important;
        margin-right: 20px;
      }

      .carousel-indicators { bottom: 20px; }

      .carousel-indicators button {
          width: 20px !important;
          height: 20px !important;
          border-radius: 50%;
          background-color: #FF6200 !important;
          opacity: 0.5;
      }

      .carousel-indicators button.active { opacity: 1; }
        /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */

        /* ĐÓNG GÓP Ý KIẾN */
      .donggopyk{
        width: 100%;
        height: 350px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .boxtgkhaosat{
        width: 30%;
        height: 70%;
        background-color: red;
        background-image: url('/public/img/bg_khaosat.png');
        border-radius: 25px 0px 0px 25px;
        background-size: cover;
        background-size: 457px 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
     }

       .boxvideo{
        width: 25%;
        height: 70%;
        background-color: blue;
        background-image: url('/public/img/bg_ks_video.png');
        background-size: 381px 280px;
        border-radius: 0px 25px 25px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

     .boxtgkhaosat button{
      border-radius: 3px;
        background-color: #FF6200;
        color: white;
      border: #FF6200;
      height: 35px;
      width: 180px;
      margin-top: 20px;
      font-weight: bold;
      font-size: 10pt;
      transition: transform 0.3s ease;
     }

    .boxtgkhaosat button:hover{
        transform: scale(1.1); 
    }

     .playbtn{
      width: 40px;
      height: 40px;
      background-color: #FF6200;
      border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
       transition: transform 0.3s ease;
     }

     .tamgiac {
       width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid rgb(234, 234, 234);
         transition: transform 0.3s ease;
      }

    .playbtn:hover {
      transform: scale(1.1); /* phóng to nút */
    }

    .playbtn:hover .tamgiac {
      transform: scale(1.1); /* phóng to tam giác */
    }

    /* ĐÓNG GÓP Ý KIẾN */

      .thongke{
        width: 30%;
        height: 80%;
        background-color: red;
        margin-left: 5%;
      }

      /* Nút lên đầu trang */
      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .scroll-to-top:hover {
        transform: translateY(-3px);
        filter: brightness(1.1);
      }

      .scroll-progress-ring {
        position: relative;
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
          justify-content: center;
        transition: all 0.3s ease;
      }

      .scroll-progress-ring:hover {
        box-shadow: 0 6px 20px rgba(255, 98, 0, 0.3);
        transform: scale(1.05);
      }

      .progress-ring {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-90deg);
      }

      .progress-ring-circle {
        transition: stroke-dashoffset 0.3s ease;
      }

      .scroll-progress-ring i {
        color: #FF6200;
        font-size: 18px;
        font-weight: bold;
        z-index: 1;
      }

      /* Hiệu ứng fade cho nút */
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
        transform: translateY(20px);
      }

      /* Responsive cho nút scroll to top */
      @media (max-width: 768px) {
        .scroll-to-top {
          bottom: 20px;
          right: 20px;
        }
        
        .scroll-progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring circle {
          r: 20;
          cx: 25;
          cy: 25;
        }
        
        .scroll-progress-ring i {
          font-size: 16px;
        }
      }
    }

    @media(min-width: 1200px){
      .HomeView{
        overflow: hidden !important;
        background-color: rgb(227, 252, 255); 
        width: 100%;
      }

      /* <=======SLIDESHOW=======> */
      .slideshow{
        height: 100% !important;
        width: 100% !important;
        border-radius: 0 !important;
        margin-top: 70px !important;
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        overflow: hidden;
        
      }

      .carousel-inner img{
        width: 100% !important; /* Chiếm toàn bộ chiều rộng */
        height: 100% !important;
        object-fit: contain !important; /* Đảm bảo ảnh không bị méo */
        border-radius: 10px !important;
        
      }

      .carousel-indicators{ margin-bottom: 1%; }
      
      /* Carousel container */
      .carousel {
          width: 90% !important; /* Chiếm toàn bộ chiều rộng */
          height: 100% !important;
          border-radius: 0 !important; /* Không có border radius */
          display: flex;
          justify-content: center !important;
          align-items: center !;
          border-radius: 10px !important;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
          border: solid #FF6200;
      }
      
      .carousel-control-prev, .carousel-control-next {
          width: 40px !important; /* Giảm kích thước nút điều khiển */
          height: 40px !important;
        background: rgba(255, 255, 255, 0.6) !important;
      }

      .carousel-control-prev {
          left: 10px !important; /* Điều chỉnh vị trí nút */
          background-color: #1BC6E8 !important;
           opacity: 0.5 !important; 
      }

      .carousel-control-next {
          right: 10px !important;
          background-color: #1BC6E8 !important;
          opacity: 0.5 !important;
      }

      .carousel-control-prev:active{ opacity: 1 !important; }

      .carousel-control-next:active{ opacity: 1 !important; }

      .carousel-control-prev i, .carousel-control-next i {
        color: #dd490f !important;
        font-size: 25px !important;
      }

      /* Carousel indicators */
      .carousel-indicators {  bottom: 10px; /* Điều chỉnh vị trí indicators */}

      .carousel-indicators button {
          width: 10px !important; /* Giảm kích thước indicators */
          height: 10px !important;
          margin: 0 4px !important;
          background-color: #dd490f !important;
      }
      /* SLIDESHOW */

       /* TÌM KIỂM  */
      .search{
        width: 100%;
        height:80px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .searchbox{
        width: 90%;
        height: 70%;
        background: linear-gradient(135deg, #1BC6E8, #0D9DBF);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2);
        padding: 0 20px;
      }

      .noikhoihanh, .loaitour, .noiden{
        width: 250px;
        height: 40px;
        margin-left: 10px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #FF6200;
        background-color: rgba(255, 255, 255, 0.9);
        transition: all 0.3s ease;
        cursor: pointer;
      }

      .noikhoihanh:hover, .loaitour:hover, .noiden:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(255, 98, 0, 0.2);
      }

      .noikhoihanh i, .loaitour i, .noiden i {
        font-size: 16px;
        color: #FF6200;
      }

      .btntimkiem{
        width: 120px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .noikhoihanhbox{
        width: 80%;
        height: 80%;
        position: relative;
      }

      .btntimkiem button{
        width: 150px;
        height: 80%;
        border-radius: 5px;
        background-color: #FF6200;
        border: none;
        color: white;
      }

      .noikhoihanhbox select {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.9);
        color: #333;
        font-size: 14px;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 10px center;
        background-size: 15px;
        transition: all 0.3s ease;
      }

      .noikhoihanhbox select:hover {
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.2);
      }

      .noikhoihanhbox select:focus {
        background-color: white;
        box-shadow: 0 2px 8px rgba(27, 198, 232, 0.3);
      }

      .noikhoihanhbox select option {
        background-color: white;
        color: #333;
        padding: 10px;
      }

      .noikhoihanhbox select option:hover {
        background-color: #1BC6E8;
        color: white;
      }

      .btntimkiem button:hover{
        background-color: #f58f4f;
      }

      /* <=======SEARCH=======> */
       .search {
          width: 100%;
        height: 140px; /* Tăng chiều cao để chứa các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          margin-top: 10px !important;
          background-color: rgb(227, 252, 255); 
        }

        .searchbox {
          width: 90%; /* Thu hẹp chiều rộng để có khoảng cách hai bên */
        height: 120px; /* Chiều cao tự động để chứa nội dung */
          flex-wrap: wrap; /* Cho phép các phần tử xuống dòng */
          display: flex;
          justify-content: center;
          align-items: center;
           background: linear-gradient(250deg, #dd490f, #13c0e7); 
          border-radius: 10px; /* Bo tròn nhẹ để đẹp hơn */
          padding: 5px 10px; /* Thêm padding để tạo không gian bên trong */
          gap: 10px; /* Khoảng cách giữa các phần tử */
          box-shadow: 0 4px 15px rgba(27, 198, 232, 0.2); /* Giữ shadow */
          margin: 0 auto; /* Căn giữa */

        }

        .noikhoihanh, .loaitour, .noiden {
        width: 23%; /* Chiếm toàn bộ chiều rộng của searchbox */
          height: 45px; /* Chiều cao cố định */
          display: flex;
          justify-content: flex-start; /* Căn trái cho đồng bộ */
          align-items: center;
          margin: 0px 0; /* Khoảng cách trên dưới giữa các phần tử */
        /* background-color: rgba(255, 255, 255, 0.9); Nền trắng nhẹ */
          border-radius: 10px; /* Bo tròn nhẹ */
          padding: 0 10px; /* Padding bên trong */
        }

        .noikhoihanh i, .loaitour i, .noiden i {
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .chonthoigian i{
          font-size: 16px; /* Tăng kích thước icon để dễ nhìn */
          margin-right: 10px; /* Khoảng cách giữa icon và select */
          color: #FF6200; /* Màu cam đặc trưng */
        }

        .noikhoihanhbox {
          width: 100%; /* Chiếm toàn bộ chiều rộng của phần tử cha */
          height: 100%; /* Chiều cao bằng với phần tử cha */
          display: flex;
          align-items: center;
        }

        .noikhoihanhbox select, .noikhoihanhbox .dp__input {
          width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
        }

        .chonthoigianbx  {
        width: 100% !important;
         height: 35px;
         border: none;
         border-radius: 5px;
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 10px;
         color: #FF6200;
         background-color: white; 
         transition: all 0.3s ease;
         cursor: pointer;
      
      }

      .chonthoigianbx select{
         width: 100%; /* Chiếm toàn bộ chiều rộng */
          height: 35px; /* Chiều cao nhỏ hơn để gọn gàng */
          border: none; /* Bỏ viền */
          outline: none; /* Bỏ outline khi focus */
          padding: 0 30px 0 10px; /* Padding để chứa mũi tên dropdown */
          border-radius: 8px; /* Bo tròn nhẹ */
          background-color: white; /* Nền trắng */
          color: #333; /* Màu chữ */
          font-size: 14px; /* Kích thước chữ vừa phải */
          cursor: pointer;
          appearance: none; /* Bỏ giao diện mặc định của select */
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23FF6200' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 10px center;
          background-size: 12px; /* Kích thước mũi tên nhỏ hơn */
      }
      .fa-calendar-week{
        font-size: 12px !important;
        margin-right: 10px !important;
      }

      .dp__input_wrap::after {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: black;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
      }

      .dp__input_icon{ display: none !important; /* Ẩn icon mặc định */}

      .calendar-icon{ padding-left: 0px; }

      .btntimkiem {
        width: 40%; /* Chiếm toàn bộ chiều rộng */
        height: 40%; /* Đồng bộ với các input khác */
        display: flex;
        justify-content: center !important;
        align-items: center !important;
      }

      .btntimkiem button{ font-size: 15px !important; }

      .btntimkiem button:hover {
        background-color: #f58f4f; /* Màu cam nhạt khi hover */
        transform: scale(1.05); /* Phóng to nhẹ */
      }

      /* Datepicker adjustments */
      .noikhoihanhbox .dp__input {
        background-color: white; /* Nền trắng */
        border-radius: 8px; /* Bo tròn */
        padding: 0 10px; /* Padding đồng bộ */
        font-size: 14px; /* Kích thước chữ */
        cursor: pointer;
      }

      :deep(.dp__input_wrap::after) {
        font-size: 14px; /* Kích thước chữ placeholder */
        left: 10px; /* Căn chỉnh vị trí */
      }
      /* <=======SEARCH=======> */

      /* TOUR */
      .danhmucbai{
        margin-top: 0;
        width: 100%;
        height: 90%;
        max-height: 1000px;
        display: flex;
        flex-direction: column; /* ✅ Các con (lineandtitle và tours) xếp dọc */
        align-items: center; 
        background-color: rgb(227, 252, 255) ; 
      }

      .lineandtitle{
          width: 100%;
          height: 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 10px;
          margin-bottom: 10px;
      }

      .tours{
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-wrap: wrap; /* Cho phép xuống hàng khi đầy */
          justify-content: center; /* Căn giữa theo chiều ngang */
          margin: 10px 0px;
          gap: 20px;
      }

      .article{
          /*width: calc(20% - 15px);  25% cho 4 card một hàng, trừ đi gap */
          width: 22% !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
      }

      .card {
          width: 100% !important;
          transition: transform 0.6s ease;
          cursor: pointer;
          border: none;
          height: 280px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
          border-radius: 10px !important;
      }

      .card-img-top {
          height: 130px !important;
          border-radius: 10px 10px 0px 0px !important;
          object-fit: cover;
      }

      .card-body {
          padding: 15px;
      }

      .card-title {
          margin-bottom: 10px;
          line-height: 1.4;
          height: 40px;
          overflow: hidden;
      }

      .starandcmt{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 20px;
      }

      .star{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card:hover {
        transform: scale(1.05); /* Phóng to nhẹ */
        z-index: 2; /* Đảm bảo nổi lên trên khi phóng to */
      }

      /* TOUR */

       /* Destination */
     .diemdenhangdauvn{
      background-size: cover;
      width: 100% !important;
      max-height: 1000px;
      height: 520px !important;
      display: flex;
      align-items: center;
      background-size: 100% 100%;
      backdrop-filter: blur(8px);
    }

    .img_destination{
      height: 12%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .img_destination img{
      width: 10%;
      height: 100%;
    }

    .section-heading{
      height: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 23px;
      font-weight: bold;
      color: #FF6200;
    }
   
    .container{
      height: 100%;
      width: 90%;
    }

    .diemden-slider{
      height: 80%;
      width: 100%;
      gap: 5px !important;
    }

    .diemden-card{
      display: flex;
      justify-content: center;
      align-items: center;
      
    }

    .diemden-card-inner{
      height: 95%;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 25px;
      border: solid #FF6200;
      overflow: hidden !important;
      position: relative;
      box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.6);
    }

    .diemden-card-inner img{
      width: 100%;
      height: 100%;
      border-radius: 23px;
      
    }

    .diemden-card-content{
      position: absolute;
      color: white;
      background-color: transparent;
      backdrop-filter: blur(2px);            /* Làm mờ phần nền phía sau */
      transform: translateY(150%);
      width: 78.8%;
      height: 57%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
     
    }

    .ten{
      position: absolute;
      font-size: 40px;
      color: white;
      font-weight: bold;
      font-family: 'Quicksand', sans-serif;
    }

    .diemden-card-content h3{
      width: 100%;
    }

    .diemden-card-content div{
    width: 100%;
    text-align: justify;
    }
     

    .diemden-card-inner:hover .diemden-card-content {
      transform: translateY(0%);
        transition: transform 0.9s ease;
    }

    .diemden-card-inner:hover{
      width: 81%;
      height: 97%;
      
    }

    .diemden-card-inner {
      transition: width 0.5s ease, height 0.5s ease;
    }

    .diemden-card-inner:hover .ten{
      display: none;
    }

        /* <=========Tại sao nên chọn CheapTrip=========> */
      .whytravelwidthus{
        display: flex !important;
      flex-direction: row;
        justify-content: center !important;
        align-items: center !important;
        width: 100%;
      height: 750px;
      /* background-color: rgb(227, 252, 255);  */
      background-image: url('/public/img/background.png');
      background-position-y: 10%;
      }

      .content{
      width: 60% !important;
      height: 90% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        border-radius: 10px !important;  
      /* background-color: red; */
    
      background-color: transparent;
      backdrop-filter: blur(10px);  
      border: solid #FF6200
      }

      .content .image{ display: none !important; }

      .content .four_text{
      height: 64% !important;
        margin-bottom: 0px;
      width: 60% !important; 
      margin-top: 1px !important;
      }

      .plane{ display: none; }

      .text{
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        height: 230px !important;
        margin-top: 3%;
      }

      .title{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center; 
        text-align: center;
        font-size: 17px !important; 
        font-weight: bold !important;
        height: 90px !important;
        width: 100% !important;
      color:#FF6200
      }
      
      .texttile{
      font-size: 25px !important;
        width: 100% !important;
      }

      .why{
        width: 120px !important;
        height:70px;
      }

      .why img{
        width: 100% !important;
        height: 100% !important;
        border-radius: 10px !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .text .noidung{
        width: 92% !important;
      font-size: 19px !important;
        text-align: justify;
      color: white;
      }


      .xemthemvechungtoi div{
      font-size: 18px !important;
      margin-top: 8%;
      backdrop-filter: blur(10px);  
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      }

      /* 4 content */
      .content1, .content2, .content3, .content4{
      width: 45% !important;
      height: 190px !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        padding: 0 !important;
      }

       .content1, .content3{
        margin-right: 3px !important;
        margin-bottom: 4px !important;
      display: flex;
      }
        
      .content2, .content4{ margin-left: 3px !important;}

    .content1 .pic, .content2 .pic, .content3 .pic, .content4 .pic{ margin-bottom: 10px; }
    .content1 .noidung, .content2 .noidung, .content2 .noidung{ margin-bottom: 25px;}

      .content1 .titlecontent1, .content2 .titlecontent2, .content3 .titlecontent3, .content4 .titlecontent4 {
      font-size: 20px !important;
        font-weight: bold !important;
      }

      .content1 .noidungcontent1, .content2 .noidungcontent2, .content3 .noidungcontent3,  .content4 .noidungcontent4{
      font-size: 15px !important;
        text-align: center;
      width: 70% !important;
      height: 70% !important;
      margin-left: 45px !important;
      }

      .fourcontent .content1 .noidung, .content2 .noidung, .content3 .noidung, .content4 .noidung { width: 300px !important;}

      .pic img{
      width: 40px !important;
      height: 40px !important;
      }

      /* <=========Tại sao nên chọn CheapTrip=========> */
        
       /*<===============Đánh giá nổi bậc================> */
      .benphai{
        width: 30% !important;
        height: 90% !important;
        margin-top: 0 !important;
        background-color: transparent;
        backdrop-filter: blur(10px);  
        border: solid #FF6200;
        border-radius: 10px !important;
        overflow-x: hidden !important;
      }


      .reviews-title{
        font-size: 17px !important;
        font-weight: bold !important;
        margin-bottom: 10px !important;
        color: #FF6200;
      }

      .review-card{
        width: 110% !important;
        margin-bottom: 5px !important;
      }
      /*<===============Đánh giá nổi bậc================> */
      
      /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */
       /* NHẬN XÉT NỔI BẬT */
      .nhanxetnoibat {
          width: 100%;
          height: 590px;
          background-image: url('/public/img/backgroundnhanxet.png'); 
          display: flex;
          flex-direction: column; 
          align-items: center;
          justify-content: center;
      }

      .img_nhanxet {
          width: 100%;
          height: 50px;
          margin-top: 20px;
          display: flex;
          justify-content: center;
      }

      .img_nhanxet img {
          width: 120px;
          height: 50px;
          margin-top: 0px;
      }

      .title_nhanxet h2{
          width: 100%;
          height: 80px;
          text-align: center;
          font-size: 30px !important;
          color: #FF6200;
      }

      .nd_nhanxet {
          width: 100%;
          height: 70px;
          text-align: center;
          display: flex;
          justify-content: center;
      }

      .nd_nhanxet div{
        width: 95% !important;
        font-size: 22px !important;
      }

      .nhanxet {
        width: 100% ;
        height: 295px;
        display: flex;
        flex-direction: row;
        justify-content: center !important;
        align-items: center !important;
      }

      .avata_customer {
        width: 76%;
        height: 100%;
        display: flex;
        justify-content: center !important; 
        align-items: center !important;
        flex-wrap: wrap;

      }

      .avata_customer .avt img {
          width: 60px !important;
          height: 62px !important;
          border-radius: 50px !important; /* Điều chỉnh border-radius nếu cần */
      }

      .avt {
        width: 65px;
        height: 65px;
        border-radius: 30px;
        margin-top: 20px;
        border: solid 3px green;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
      }

      .avt img {
        width: 55px !important;
        height: 55px !important;
        border-radius: 30px !important;
      }

      .comment {
        height: 53% !important;
        display: flex;
        justify-content: center;
        margin-top: 0px !important;
      }

      .comment div{
        width: 100% !important;
        height: 46% !important;
        font-size: 25px !important;
        margin-bottom: 0px !important;
      }

      .line { width: 80%; height: 2px; }
      
      .daunhaytrai, .daunhayphai{
          width: 12% !important;
          display: flex !important;
          justify-content: center !important;
      }

      .imgtrai {
          width: 10% !important;
          height: 10% !important;
          margin-right: 220px;
          margin-top: 55px;
          font-size: 60pt;
          text-align: center;
          color: gray;
      }

      .imgphai {
          width: 10%;
          height: 10%;
          margin-right: 80px;
          margin-top: 55px;
          font-size: 60pt;
          text-align: center;
          color: gray;
      }

      .imgtrai, .imgphai{ font-size: 50px; }

      .imgtrai i{ margin-left: 20px; }

      .thongtinkh {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 14pt;
          font-weight: bold;
          margin-top: 20px;
      }

      /* Transition effects */
      .fade-enter-active, .fade-leave-active { transition: all 0.5s ease-in-out; }

      .fade-enter-from, .fade-leave-to {
          opacity: 0;
          transform: translateX(30px);
      }

      /* Navigation dots */
      .navigation-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
          position: relative;
          z-index: 3;
      }

      .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(128, 128, 128, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
      }

      .dot:hover {
          transform: scale(1.2);
          background-color: #FF6200;
      }

      .dot.active {
          background-color: #FF6200;
          transform: scale(1.2);
      }

      /* Animation cho quotes */
      .imgtrai i, .imgphai i { animation: float 3s ease-in-out infinite; }

      @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
      }

      /* ... rest of your existing styles ... */

      /* Add these styles for carousel controls */
      .carousel-control-prev, .carousel-control-next {
          width: 5%;
          opacity: 0.7;
      }

      .carousel-control-prev i, .carousel-control-next i{
        font-size: 20px;
        color: #dd490f !important;
      }
      .carousel-control-prev{
        background-color: #1BC6E8 !important;
        width: 30px !important;
        height: 30px !important;
        margin-left: 20px;
      }

      .carousel-control-next{
        background-color: #1BC6E8 !important;
        width: 30px !important;
        height: 30px !important;
        margin-right: 20px;
      }

      .carousel-indicators { bottom: 20px; }

      .carousel-indicators button {
          width: 20px !important;
          height: 20px !important;
          border-radius: 50%;
          background-color: #FF6200 !important;
          opacity: 0.5;
      }

      .carousel-indicators button.active { opacity: 1; }
        /* NHẬN XÉT NỔI BẬT (DẠNG SLIDESHOW) */

        /* ĐÓNG GÓP Ý KIẾN */
      .donggopyk{
        width: 100%;
        height: 350px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .boxtgkhaosat{
        width: 30%;
        height: 70%;
        background-color: red;
        background-image: url('/public/img/bg_khaosat.png');
        border-radius: 25px 0px 0px 25px;
        background-size: cover;
        background-size: 457px 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
     }

       .boxvideo{
        width: 25%;
        height: 70%;
        background-color: blue;
        background-image: url('/public/img/bg_ks_video.png');
        background-size: 381px 280px;
        border-radius: 0px 25px 25px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

     .boxtgkhaosat button{
      border-radius: 3px;
        background-color: #FF6200;
        color: white;
      border: #FF6200;
      height: 35px;
      width: 180px;
      margin-top: 20px;
      font-weight: bold;
      font-size: 10pt;
      transition: transform 0.3s ease;
     }

    .boxtgkhaosat button:hover{
        transform: scale(1.1); 
    }

     .playbtn{
      width: 40px;
      height: 40px;
      background-color: #FF6200;
      border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
       transition: transform 0.3s ease;
     }

     .tamgiac {
       width: 0;
        height: 0;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid rgb(234, 234, 234);
         transition: transform 0.3s ease;
      }

    .playbtn:hover {
      transform: scale(1.1); /* phóng to nút */
    }

    .playbtn:hover .tamgiac {
      transform: scale(1.1); /* phóng to tam giác */
    }

    /* ĐÓNG GÓP Ý KIẾN */

      .thongke{
        width: 30%;
        height: 80%;
        background-color: red;
        margin-left: 5%;
      }

      /* Nút lên đầu trang */
      .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .scroll-to-top:hover {
        transform: translateY(-3px);
        filter: brightness(1.1);
      }

      .scroll-progress-ring {
        position: relative;
        width: 60px;
        height: 60px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
          justify-content: center;
        transition: all 0.3s ease;
      }

      .scroll-progress-ring:hover {
        box-shadow: 0 6px 20px rgba(255, 98, 0, 0.3);
        transform: scale(1.05);
      }

      .progress-ring {
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-90deg);
      }

      .progress-ring-circle {
        transition: stroke-dashoffset 0.3s ease;
      }

      .scroll-progress-ring i {
        color: #FF6200;
        font-size: 18px;
        font-weight: bold;
        z-index: 1;
      }

      /* Hiệu ứng fade cho nút */
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
        transform: translateY(20px);
      }

      /* Responsive cho nút scroll to top */
      @media (max-width: 768px) {
        .scroll-to-top {
          bottom: 20px;
          right: 20px;
        }
        
        .scroll-progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring {
          width: 50px;
          height: 50px;
        }
        
        .progress-ring circle {
          r: 20;
          cx: 25;
          cy: 25;
        }
        
        .scroll-progress-ring i {
          font-size: 16px;
        }
      }
    }
    
</style> 

<style scoped>
.video-popup-overlay {
  position: fixed;
  z-index: 9999;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
.video-popup-content {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.close-video-btn {
  position: absolute;
  top: 8px;
  right: 16px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #FF6200;
  cursor: pointer;
  z-index: 2;
}
@media (max-width: 800px) {
  .video-popup-content iframe {
    width: 95vw;
    height: 45vw;
    min-height: 200px;
  }
}
.testimonial-avatar {
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  border: 2px solid #FF6200;
  margin-bottom: 8px;
  display: block;
}
.avatar-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
}
.tours {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  padding: 0;
  margin: 0;
  justify-items: center;
  align-items: stretch;
}
@media (max-width: 900px) {
  .tours {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .tours {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .tours .tour-card-home {
    width: 98%;
    margin-bottom: 0;
  }
}
</style>


