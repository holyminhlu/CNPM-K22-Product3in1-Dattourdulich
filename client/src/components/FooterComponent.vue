<template>
 <!-- Footer -->
    <footer
            class="text-center text-lg-start text-white"  
            style="background-color: #1BC6E8"
            >
  
      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start ">
          <!-- Grid row -->
          <div class="row mt-0">
            <!-- Grid column -->
            <div class="col-md-12 col-lg-6 mb-4 mt-3"> 
              <!-- Content -->
              <p class="namecpany"><font style="color: #FF6200;">Cheap</font>Trip - CÔNG TY TNHH GIAO THÔNG VẬN TẢI VÀ DU LỊCH CHEAPTRIP</p>
              <div><b>Tại HCM</b> : Số 219 Võ Văn Tần,Phường 5,Quận 3,TP Hồ Chí Minh</div>
              <div class="mt-0"><b>Tại Hà Nội</b>: Tầng 6, tòa nhà Zentower, số 12 Khuất Duy Tiến, P.Thanh Xuân Trung, Q.Thanh</div>
              <div class="mt-0"><b>Hotline</b>: 0945 50 4848/ 0915 665 086/ 0977 768 079/ 0916 40 1136</div>
              <div class="mt-0"><b>Email</b>: cheaptrip@gmail.com</div>
            </div>
            <!-- Grid column -->
  
          
  
            <!-- Grid column -->
            <div class="cot2 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3 d-flex flex-column align-items-center">
              <p class="namecpany text-center ">CHỨNG NHẬN</p>
              
              <div class="protected mt-1 mb-4">
               
              </div>
              
              <div class="bocongthuong mt-0 mb-5">
               
              </div>
             
            </div>
           
  
            <!-- Grid column -->
            <div class=" col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mt-3 d-flex flex-column align-items-center">
              <!-- Links -->
              <p class="namecpany text-center">KẾT NỐI VỚI CHÚNG TÔI</p>
              <div class="mxh">
                <div class="childmxh">
                  <img class="imgmxh1" src="/img/yt - Copy.webp">
                </div>
                <div class="childmxh">
                  <img class="imgmxh2" src="/img/images.png">
                </div>
                <div class="childmxh">
                  <img class="imgmxh3" src="/img/tiktok.png">
                </div>
              </div>
              <p class="namecpany mt-3 text-center">CHẤP NHẬN THANH TOÁN</p>
              <div class="logothanhtoan">
                <div class="o1">
                   <img src="/img/o1.png" alt="Payment method 1">
                </div>
                <div class="o2">
                  <img src="/img/o2.png">
                </div>
                <div class="o3">
                  <img src="/img/o3.png">
                </div>
                <div class="o4">
                  <img src="/img/o4.png">
                </div>
              </div>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->
  
      <!-- Copyright -->
      <div
           class="text-center p-3"
           style="background-color:#097497 "
           >
                                Bản quyền 2018 2023 © Công ty TNHH Giao Thông Vận Tải Và Du Lịch CHEAPTRIP<br>
          Số ĐKKD : 0107720755 được cấp bởi Sở KH và ĐT TP.HN, Đăng ký lần đầu ngày 09/02/2010, Đăng ký thay đổi lần 04 ngày 24/04/2023<br>
                                Giấy phép kinh doanh dịch vụ lữ hành quốc tế số: 01-1135/2018/TCDL-GP LHQT<br>
                                      ĐÂY LÀ SẢN PHẨM ĐỒ ÁN KẾT THÚC MÔN HỌC CỦA NHÓM SINH VIÊN DA22TTB
       
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->


</template>
<style>
  .container{
    /* margin-top: 200px; */
  }
  
  .namecpany {
    font-weight: 600;
    font-size: 15px;
    color: #FFFFFF;
  }

  .namecpany font {
    font-weight: 600;
  }

  footer {
    font-family: Arial, sans-serif;
  }

  footer div {
    font-size: 14px;
    line-height: 1.5;
  }

  footer b {
    font-weight: 600;
    color: #FFFFFF;
  }

  .protected {
    width: 100px;
    height: 50px;
    border-radius: 4px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/public/img/cn_protected.png');
  }

  .bocongthuong{
    width: 100px;
    height: 50px;
    background-image: url('/public/img/cn_bocongthuong.png');
    background-size: contain;
    background-size: 100px 50px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 4px;
  }

  .mxh{
    width: 216px;
    height: 50px;
   
    display: flex;
    
  }

  .logothanhtoan{
    width: 216px;
    display: flex;
    height: 110px;
    
    flex-wrap: wrap;
  
  }

  .o1{
    width: 108px;
    height: 55px;
   
    display: flex;
    justify-content: center;
   
 
  }

  img{
    width: 90px;
    height: 45px;
    border-radius: 3px;
  }

  .o2{
    width: 108px;
    height: 55px;
   
    display: flex;
    justify-content: center;
  
  }

  .o3{
    width: 108px;
    height: 55px;
    
    display: flex;
    justify-content: center;
    
  }

  .o4{
    width: 108px;
    height: 55px;
   
    display: flex;
    justify-content: center;
    
  }
  
  .childmxh{
    width: 72px;
   
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgmxh1{
    width: 55px;
    height: 50px;
  }

  .imgmxh2{
    width: 50px;
    height: 45px;
    border-radius: 6px;
  }

  .imgmxh3{
    width: 50px;
    height: 45px;
    border-radius: 6px;
  }


</style>