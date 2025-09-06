import { Phone, Mail, MapPin, Clock, Facebook, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Cơ sở", href: "#locations" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const services = [
    "Đào tạo lái xe ô tô",
    "Đào tạo lái tàu thủy", 
    "Sát hạch lái xe",
    "Tư vấn hồ sơ",
    "Đào tạo tại DN",
  ];

  const locations = [
    {
      name: "Trụ sở chính",
      address: "246 TL943, p. Mỹ Hoà, Long Xuyên"
    },
    {
      name: "Cơ sở 2",
      address: "943 TL943, p. Mỹ Hoà, Long Xuyên"
    },
    {
      name: "Cơ sở 3", 
      address: "268B TT Châu Đốc, An Giang"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center">
                <span className="font-bold text-lg">AG</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Trung tâm An Giang</h3>
                <p className="text-sm text-primary-foreground/80">Đào tạo lái xe chuyên nghiệp</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Hơn 40 năm kinh nghiệm đào tạo lái xe, lái tàu với chất lượng cao,
              uy tín và chuyên nghiệp tại An Giang.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-foreground/20 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Dịch vụ</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Thông tin liên hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Hotline: 0296.3841.841</p>
                  <p className="text-primary-foreground/80">Hỗ trợ 24/7</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>info@daotaosathachag.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>7:30 - 11:30 | 13:30 - 17:00</p>
                  <p className="text-primary-foreground/80">Thứ 2 - Thứ 7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <h4 className="font-semibold text-lg mb-4">Địa điểm cơ sở</h4>
          <div className="grid md:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div key={index} className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">{location.name}</p>
                  <p className="text-primary-foreground/80 text-sm">{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Trung tâm Giáo dục nghề nghiệp giao thông vận tải An Giang. 
            Tất cả các quyền được bảo lưu.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;