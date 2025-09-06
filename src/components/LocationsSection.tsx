import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Car, ExternalLink } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      id: 1,
      name: "TRỤ SỞ CHÍNH",
      title: "Trung tâm Giáo dục nghề nghiệp giao thông vận tải An Giang",
      address: "Số 246, TL943, p. Mỹ Hoà, Tp. Long Xuyên",
      phone: "0296.3841.841",
      mapUrl: "https://goo.gl/maps/C63wAmKU5SFYf2Ay6",
      services: ["Đào tạo lái xe ô tô", "Đào tạo lái tàu", "Tư vấn hồ sơ"],
      hours: "7:30 - 11:30 | 13:30 - 17:00",
      isMain: true
    },
    {
      id: 2,
      name: "CƠ SỞ 2",
      title: "Trung tâm sát hạch lái xe cơ giới đường bộ An Giang",
      address: "Số 943 TL943, p. Mỹ Hoà, Tp. Long Xuyên",
      phone: "0296.3841.842",
      mapUrl: "https://goo.gl/maps/jwbx3xYmzG8CytZt9",
      services: ["Sát hạch lái xe", "Thi lý thuyết", "Thi thực hành"],
      hours: "7:00 - 11:00 | 13:00 - 16:30",
      isMain: false
    },
    {
      id: 3,
      name: "CƠ SỞ 3",
      title: "Văn phòng đại diện Châu Đốc",
      address: "Số 268B, TT Châu Đốc, An Giang",
      phone: "0296.3841.843",
      mapUrl: "#",
      services: ["Đào tạo lái xe", "Tư vấn đăng ký", "Hỗ trợ học viên"],
      hours: "7:30 - 11:30 | 13:30 - 17:00",
      isMain: false
    }
  ];

  return (
    <section id="locations" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Địa điểm đào tạo
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            3 cơ sở đào tạo tại{" "}
            <span className="text-gradient">Long Xuyên & Châu Đốc</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Với 3 cơ sở đào tạo chiến lược, chúng tôi mang đến sự thuận tiện
            tối đa cho học viên trong việc học tập và thi sát hạch.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <Card 
              key={location.id} 
              className={`card-gradient p-6 hover:shadow-xl transition-all duration-300 relative ${
                location.isMain ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {location.isMain && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                  Trụ sở chính
                </Badge>
              )}

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.title}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{location.address}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{location.phone}</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{location.hours}</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-sm text-foreground mb-2">Dịch vụ:</h4>
                <div className="flex flex-wrap gap-2">
                  {location.services.map((service, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" className="flex-1 btn-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Gọi ngay
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-background rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vị trí thuận tiện, dễ dàng di chuyển
            </h3>
            <p className="text-muted-foreground">
              Các cơ sở đào tạo được bố trí hợp lý, thuận tiện cho việc đi lại
              của học viên tại Long Xuyên và Châu Đốc.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Car className="w-5 h-5 text-primary" />
                <span className="text-foreground">Gần trung tâm thành phố, dễ dàng tìm đường</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">Có bãi đỗ xe rộng rãi cho học viên</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-foreground">Giờ làm việc linh hoạt, phù hợp mọi đối tượng</span>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg text-foreground mb-2">
                Cần hỗ trợ tìm đường?
              </h4>
              <p className="text-muted-foreground mb-4">
                Liên hệ với chúng tôi để được hướng dẫn chi tiết đến cơ sở gần nhất.
              </p>
              <Button className="btn-primary">
                <Phone className="w-4 h-4 mr-2" />
                Gọi tư vấn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;