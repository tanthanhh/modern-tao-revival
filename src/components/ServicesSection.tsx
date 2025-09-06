import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Ship, Clock, Users, CheckCircle, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Car,
      title: "Đào tạo lái xe ô tô",
      description: "Đào tạo các hạng bằng lái xe ô tô từ cơ bản đến nâng cao",
      features: [
        "Hạng B1, B2 - Xe con, xe tải nhỏ",
        "Hạng C, D, E - Xe tải, xe khách",
        "Xe số sàn và số tự động",
        "Đào tạo lý thuyết và thực hành"
      ],
      duration: "45-60 ngày",
      price: "Từ 8,500,000đ",
      popular: true
    },
    {
      icon: Ship,
      title: "Đào tạo lái tàu thủy",
      description: "Chương trình đào tạo lái tàu thủy chuyên nghiệp",
      features: [
        "Hạng SB - Tàu thủy sông",
        "Hạng SH - Tàu thủy hỗn hợp", 
        "Lý thuyết hàng hải",
        "Thực hành trên tàu thật"
      ],
      duration: "30-45 ngày",
      price: "Từ 6,000,000đ",
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: CheckCircle,
      title: "Sát hạch lái xe",
      description: "Tổ chức thi sát hạch lái xe tại chỗ, tiện lợi cho học viên"
    },
    {
      icon: Users,
      title: "Đào tạo tại doanh nghiệp",
      description: "Chương trình đào tạo riêng cho các doanh nghiệp, tổ chức"
    },
    {
      icon: Clock,
      title: "Học linh hoạt",
      description: "Lịch học phù hợp với thời gian làm việc của học viên"
    },
    {
      icon: Star,
      title: "Hỗ trợ sau khóa học",
      description: "Tư vấn và hỗ trợ các thủ tục liên quan đến bằng lái"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Dịch vụ của chúng tôi
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Chương trình đào tạo{" "}
            <span className="text-gradient">chuyên nghiệp</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cung cấp đầy đủ các khóa học đào tạo lái xe và lái tàu theo tiêu chuẩn
            của Bộ Giao thông Vận tải, đảm bảo chất lượng và hiệu quả học tập.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient p-8 relative hover:shadow-xl transition-all duration-300">
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-accent text-accent-foreground">
                  Phổ biến nhất
                </Badge>
              )}
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mb-6 p-4 bg-muted/50 rounded-lg">
                <div>
                  <div className="text-sm text-muted-foreground">Thời gian:</div>
                  <div className="font-semibold text-foreground">{service.duration}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Học phí:</div>
                  <div className="font-bold text-primary text-lg">{service.price}</div>
                </div>
              </div>

              <Button className="w-full btn-primary">
                Đăng ký khóa học
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="card-gradient p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Sẵn sàng bắt đầu học lái xe?
            </h3>
            <p className="text-muted-foreground mb-6">
              Liên hệ ngay với chúng tôi để được tư vấn chi tiết về chương trình học
              phù hợp nhất với nhu cầu của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary">
                Đăng ký học ngay
              </Button>
              <Button size="lg" variant="outline">
                Tư vấn miễn phí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;