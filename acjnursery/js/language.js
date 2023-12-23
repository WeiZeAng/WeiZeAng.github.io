$('#select_language').on('change',function(){
                
    $('.label_greeting').text(lang[$('#select_language').val()].greeting);
    $('.lbl_company').text(lang[$('#select_language').val()].company);
    $('.lbl_services').text(lang[$('#select_language').val()].services);
    $('.lbl_products').text(lang[$('#select_language').val()].products);
    $('.lbl_about').text(lang[$('#select_language').val()].about);
    $('.lbl_contact').text(lang[$('#select_language').val()].contact);
    $('.lbl_view_more').text(lang[$('#select_language').val()].view_more);
    $('.label_sub_greeting').html(lang[$('#select_language').val()].sub_greeting);
    $('.lbl_service_1').text(lang[$('#select_language').val()].service_1);
    $('.lbl_service_2').text(lang[$('#select_language').val()].service_2);
    $('.lbl_service_3').text(lang[$('#select_language').val()].service_3);
    $('.lbl_service_text_1').text(lang[$('#select_language').val()].service_text_1);
    $('.lbl_service_text_2').text(lang[$('#select_language').val()].service_text_2);
    $('.lbl_service_text_3').text(lang[$('#select_language').val()].service_text_3);
    $('.lbl_location').text(lang[$('#select_language').val()].location);
    $('.lbl_callus').text(lang[$('#select_language').val()].callus);
    $('.lbl_callus_text').html(lang[$('#select_language').val()].callus_text);
    $('.lbl_working_text').text(lang[$('#select_language').val()].working_text);
    $('.lbl_working').text(lang[$('#select_language').val()].working);
    $('.lbl_product').text(lang[$('#select_language').val()].products);
    $('.lbl_product_sub').text(lang[$('#select_language').val()].products_sub);
    $('.lbl_sawit').text(lang[$('#select_language').val()].sawit);
    $('.lbl_sawit_sub').text(lang[$('#select_language').val()].sawit_sub);
    $('.lbl_getah').text(lang[$('#select_language').val()].getah);
    $('.lbl_getah_sub').text(lang[$('#select_language').val()].getah_sub);
    $('.lbl_apm').text(lang[$('#select_language').val()].apm);
    $('.lbl_apm_sub').text(lang[$('#select_language').val()].apm_sub);
    $('.lbl_durian').text(lang[$('#select_language').val()].durian);
    $('.lbl_durian_sub').text(lang[$('#select_language').val()].durian_sub);
    $('.lbl_baja').text(lang[$('#select_language').val()].baja);
    $('.lbl_baja_sub').text(lang[$('#select_language').val()].baja_sub);
    $('.lbl_kebun_pajak').text(lang[$('#select_language').val()].kebun_pajak);
    $('.lbl_kebun_pajak_sub').text(lang[$('#select_language').val()].kebun_pajak_sub);
    $('.lbl_organization').text(lang[$('#select_language').val()].organization);
    $('.lbl_price').text(lang[$('#select_language').val()].price);
    $('.lbl_solution').text(lang[$('#select_language').val()].solution);
    $('.lbl_quality_sub').text(lang[$('#select_language').val()].quality_sub);
    $('.lbl_price_sub').text(lang[$('#select_language').val()].price_sub);
    $('.lbl_solution_sub').text(lang[$('#select_language').val()].solution_sub);
    $('.lbl_gallery').text(lang[$('#select_language').val()].gallery);
    
});

var lang = {
    "es" : {
        greeting:"Welcome To Our Nursery Plantation!",
        company:"ANG CHIN JOO NURSERY SDN BHD",
        services:"Services",
        products:"Products",
        about:"About",
        contact:"Contact",
        sub_greeting:"<p style='line-height:1;font-size:35px'>We have more than 30 years of experience in the field of planting <a href='#sawit'>oil palm</a> and <a href='#getah'>rubber</a> seedlings.</p>",
        view_more:"View More",
        service_1:"Quantity and Quality",
        service_2:"Transport and Delivery",
        service_3:"Licenses",
        service_text_1:"We have more than 30 years experience with plantation field. We always produces the best quality for our customer and always ready stock for our customer.",
        service_text_2:"We have our own transporter and we will make sure he will deliver on the correct address and time. Before depart, we will inform the customer to double check the location and estimate arriving time.",
        service_text_3:"We are a legal company with licenses approved by governments. We also have MPOB, RISDA, FELCA and others related licenses.",   
        location:"Our Location",
        callus:"Call Us",
        callus_text:"Official H/p: +60 16 881 5145<br /> Mr Ang: +60 19 445 5145/ <br /> Mr Ang: +60 10 288 5145 <br />Email: support@acjnursery.com",
        working_text:"All Days except public holiday 8:00am - 6:00pm",
        working:"Working Day & Time",
        products_sub:"Provide best products and quality services for customers",
        sawit:"Palm Tree Seedlings",
        sawit_sub:"Height: 3-4 Feets, Clone: DxP Yangambi, AAR and others",
        getah:"Rubber Tree Seedlings",
        getah_sub:"Layer: 1/2/3 Layer, Clone: PB 350",
        apm:"Rubber Tree Seedlings (APM)",
        apm_sub:"Layer: 4/5 Layer, Clone: PB 350",
        baja:"Organic Fertilizer",
        baja_sub:"100% Organic, Type: Pallet/ Powder",
        durian:"Durian Tree Seedlings",
        durian_sub:"Clone: Musang King, Duri Hitam, Local Brand",
        kebun_pajak:"",
        kebun_pajak_sub:"",
        organization: "We are a company with nearly 34 years of experience in planting rubber and oil palm saplings. In 1988, we started to run our business. Although we encountered many difficulties at the beginning, we have stood firm to this day and worked hard to expand our business and serve the public.",
        durian_sub:"Clone: Musang King, Duri Hitam, Local Brand",
        price:"Cheaper Price",
        solution:"One-stop Solution",
        price_sub:"From time to time, we will launch preferential packages to give back to the public, and our prices are in line with the market so that you can buy with peace of mind and happy to buy.",
        quality_sub: "We have more than 30 years experience with plantation field. We always produces the best quality for our customer and always ready stock for our customer. The quality of our products is also recognized by the government because we provide a large number of saplings to FELDA, RISDA, and other companies every year.",
        solution_sub: "We also provide professional oil palm plantation management solutions. We will help customers fertilize, weed, prune, collect and sell oil palm fruit. Customers don't need to worry about manpower, management and other issues. We will help customers deal with perfection.",
        gallery:"Gallery",
    },
    "cs" : {
        greeting:"欢迎来到我们的苗场",
        company:"洪振裕苗场有限公司",
        services:"服务",
        products:"产品",
        about:"关于我们",
        contact:"联络方式",
        sub_greeting:"我们拥有超过30年的经验在种植<a href='#sawit'>油棕苗</a>和<a href='#getah'>橡胶苗</a>的领域。",
        view_more:"查看更多",
        service_1:"高品质和数量",
        service_2:"运输和交付",
        service_3:"执照和许可证",
        service_text_1:"我们在种植园领域拥有超过30年的经验。我们始终为我们的客户生产最好的质量, 并始终为我们的客户准备好库存。",
        service_text_2:"我们有自己的运输商，我们将确保他会在正确的地址和时间送货。 出发前，我们会通知客户仔细核对地点和预计到达时间。",
        service_text_3:"我们是一家合法公司，拥有政府批准的许可证。 我们还拥有 MPOB、RISDA、FELCA 和其他相关许可证。",
        location:"地址",
        callus:"联络方式",
        callus_text:"官方电话：+60 16 881 5145<br />洪先生：+60 19 445 5145/ <br />洪先生：+60 10 288 5145 <br />邮件：support@acjnursery.com",
        working_text:"除公共假期外的所有时间上午 8:00 至下午 6:00",
        working:"工作日和时间",
        products_sub:"为客户提供最好的产品和优质的服务",
        sawit:"棕榈树苗",
        sawit_sub:"高度: 3-4 尺, 品种: DxP Yangambi, AAR 等等",
        getah:"橡胶树苗",
        getah_sub:"层: 1/2/3 层, 品种: PB 350",
        apm:"橡胶树苗 (APM)",
        apm_sub:"层: 4-5 层, 品种: PB 350",
        baja:"有机肥",
        baja_sub:"100% 有机, 类型: 颗粒/粉末",
        durian:"榴莲树苗",
        durian_sub:"品种: 猫山王、黑刺、本地品牌",
        kebun_pajak:"",
        kebun_pajak_sub:"",
        organization: "我们是一家拥有近 34 年种植橡胶和油棕树苗经验的公司。 1988年，我们开始经营我们的业务。 虽然一开始我们遇到了很多困难，但我们一直坚持到今天，努力拓展业务，服务大众。",
        price:"更优惠的价格",
        solution:"一站式解决方案",
        price_sub:"我们会不定期推出优惠套餐回馈大众，我们的价格与市场接轨，让您买的安心，买的开心。",
        quality_sub: "我们在种植园领域拥有超过 30 年的经验。 我们始终为我们的客户生产最好的质量，并始终为我们的客户准备好库存。 我们的产品质量也得到政府的认可，因为我们每年向 FELDA、RISDA 和其他公司提供大量树苗.",
        solution_sub: "我们也有提供专业的油棕园管理方案。我们会帮助顾客施肥，除草，修剪枝叶，采集和出售油棕果。顾客无须在顾虑人力，管理和其他问题。我们会帮顾客处理完美。",
        gallery:"相册",
    },
    "my" : {
        greeting:"Selamat Datang Ke Ladang Kita",
        company:"ANG CHIN JOO NURSERY SDN BHD",
        services:"Perkhidmatan",
        products:"Produk",
        about:"Tentang Kita",
        contact:"Hubungi Kami",
        sub_greeting:"<p style='line-height: 1;font-size:35px'>Kami berpengalaman lebih 30 tahun dalam bidang penanaman anak benih pokok <a href='#sawit'>sawit</a> dan <a href='#getah'>getah</a>.</p>",
        view_more:"Lihat Lebih Banyak",
        service_1:"Kuantiti dan Kualiti",
        service_2:"Pengangkutan dan Penghantaran",
        service_3:"Lesen",
        service_text_1:"Kami mempunyai lebih daripada 30 tahun pengalaman dalam bidang perladangan. Kami sentiasa menghasilkan kualiti terbaik untuk pelanggan kami dan sentiasa ready stock untuk pelanggan kami.",
        service_text_2:"Kami mempunyai transporter sendiri dan kami akan pastikan dia akan menghantar pada alamat dan masa yang betul. Sebelum berlepas, kami akan memaklumkan kepada pelanggan untuk menyemak semula lokasi dan menganggarkan masa tiba.",
        service_text_3:"Kami adalah syarikat sah dengan lesen yang diluluskan oleh kerajaan. Kami juga mempunyai lesen MPOB, RISDA, FELCA dan lain-lain yang berkaitan.",
        location:"Lokasi",
        callus:"Hubungi Kami",
        callus_text:"H/p Rasmi: +60 16 881 5145<br /> Encik Ang: +60 19 445 5145 <br /> Encik Ang: +60 10 288 5145 <br />E-mel: support@acjnursery.com",
        working_text:"Semua Hari kecuali cuti umum 8:00am - 6:00pm",
        working:"Hari & Masa Bekerja",
        products_sub:"Menyediakan produk dan perkhidmatan berkualiti terbaik untuk pelanggan",
        sawit:"Anak Benih Pokok Sawit",
        sawit_sub:"Tinggi: 3-4 kaki, Klon: DxP Yangambi, AAR dan lain-lain",
        getah:"Anak Pokok Getah",
        getah_sub:"Tingkat: 1/2/3 tingkat, Klon: PB 350",
        apm:"Anak Pokok Getah (APM)",
        apm_sub:"Tingkat: 4-5 tingkat, Klon: PB 350",
        baja:"Baja Organik",
        baja_sub:"100% Organik, Jenis: Pallet/ Serbuk",
        durian:"Anak Pokok Durian",
        durian_sub:"Klon: Musang King, Duri Hitam, Kampung durian",
        kebun_pajak:"",
        kebun_pajak_sub:"",
        organization: "Kami adalah syarikat yang berpengalaman hampir 34 tahun dalam menanam anak pokok getah dan kelapa sawit. Pada tahun 1988, kami mula menjalankan perniagaan kami. Walaupun kami menghadapi banyak kesukaran pada mulanya, kami telah berdiri teguh sehingga hari ini dan bekerja keras untuk mengembangkan perniagaan kami dan berkhidmat kepada orang ramai.",
        price:"Harga Lebih Murah",
        solution:"Penyelesaian Sehenti",
        price_sub:"Dari semasa ke semasa, kami akan melancarkan pakej keutamaan untuk diberikan semula kepada orang ramai, dan harga kami adalah selaras dengan pasaran supaya anda boleh membeli dengan tenang dan gembira untuk membeli.",
        quality_sub: "Kami mempunyai lebih daripada 30 tahun pengalaman dalam bidang perladangan. Kami sentiasa menghasilkan kualiti yang terbaik untuk pelanggan kami dan sentiasa ready stock untuk pelanggan kami. Kualiti produk kami juga mendapat pengiktirafan kerajaan kerana kami menyediakan sejumlah besar anak pokok kepada FELDA, RISDA, dan syarikat lain setiap tahun.",
        solution_sub: "Kami juga menyediakan penyelesaian pengurusan ladang kelapa sawit profesional. Kami akan membantu pelanggan membaja, merumput, mencantas, mengumpul dan menjual buah kelapa sawit. Pelanggan tidak perlu risau tentang tenaga kerja, pengurusan dan isu-isu lain. Kami akan membantu pelanggan berurusan dengan kesempurnaan.",
        gallery:"Galeri",
    }
};