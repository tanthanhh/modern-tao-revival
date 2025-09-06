import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Đã gửi thông tin thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Hotline tư vấn",
      content: "0296.3841.841",
      subtitle: "Hỗ trợ 24/7",
      color: "bg-primary"
    },
    {
      icon: Mail,
      title: "Email liên hệ",
      content: "info@daotaosathachag.com",
      subtitle: "Phản hồi trong 24h",
      color: "bg-accent"
    },
    {
      icon: MapPin,
      title: "Địa chỉ chính",
      content: "Số 246, TL943, p. Mỹ Hoà",
      subtitle: "Long Xuyên, An Giang",
      color: "bg-primary-light"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "7:30 - 17:00",
      subtitle: "Thứ 2 - Thứ 7",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Liên hệ với chúng tôi
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Sẵn sàng đồng hành cùng{" "}
            <span className="text-gradient">bạn</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn chi tiết về các khóa học
            và nhận được hỗ trợ tốt nhất từ đội ngũ chuyên viên giàu kinh nghiệm.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="card-gradient p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                {info.title}
              </h4>
              <p className="font-medium text-foreground mb-1">
                {info.content}
              </p>
              <p className="text-sm text-muted-foreground">
                {info.subtitle}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-6 h-6 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Đăng ký tư vấn</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Họ và tên *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Số điện thoại *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Nhập địa chỉ email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Dịch vụ quan tâm
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="car">Đào tạo lái xe ô tô</option>
                  <option value="boat">Đào tạo lái tàu thủy</option>
                  <option value="exam">Sát hạch lái xe</option>
                  <option value="consult">Tư vấn khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tin nhắn
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Nhập nội dung cần tư vấn..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full btn-primary">
                <Send className="w-4 h-4 mr-2" />
                Gửi thông tin tư vấn
              </Button>
            </form>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="card-gradient p-6">
              <h4 className="font-bold text-xl text-foreground mb-4">
                Liên hệ nhanh
              </h4>
              <p className="text-muted-foreground mb-6">
                Cần hỗ trợ gấp? Gọi ngay hotline hoặc nhắn tin qua các kênh sau:
              </p>
              <div className="space-y-3">
                <Button className="w-full btn-primary justify-start">
                  <Phone className="w-4 h-4 mr-3" />
                  Gọi hotline: 0296.3841.841
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-3" />
                  Chat Zalo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-3" />
                  Gửi email
                </Button>
              </div>
            </Card>

            <Card className="card-gradient p-6">
              <h4 className="font-bold text-xl text-foreground mb-4">
                Câu hỏi thường gặp
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground mb-1">
                    Thời gian đào tạo mất bao lâu?
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Thời gian đào tạo từ 30-60 ngày tùy theo hạng bằng lái.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">
                    Có được thi lại nếu không đậu?
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Có thể thi lại, chúng tôi hỗ trợ học viên đến khi đậu.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-1">
                    Học phí có bao gồm lệ phí thi không?
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    Học phí đã bao gồm tất cả chi phí đào tạo và thi lần đầu.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;