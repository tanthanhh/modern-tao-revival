import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, Shield } from "lucide-react";
import facilityImage from "@/assets/facility-building.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "40+ năm kinh nghiệm",
      description: "Bề dày lịch sử hơn 39 năm đào tạo học viên lái xe, lái tàu",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Đội ngũ chuyên nghiệp",
      description: "Giáo viên có trình độ cao, nhiều năm kinh nghiệm thực tế",
      color: "bg-accent",
    },
    {
      icon: Target,
      title: "Tỷ lệ đậu cao",
      description: "Hơn 95% học viên đạt kết quả tốt trong kỳ thi sát hạch",
      color: "bg-primary-light",
    },
    {
      icon: Shield,
      title: "An toàn tuyệt đối",
      description: "Cam kết đảm bảo an toàn 100% trong quá trình đào tạo",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Về chúng tôi
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trung tâm Giáo dục nghề nghiệp giao thông vận tải{" "}
            <span className="text-gradient">An Giang</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Với bề dày lịch sử hơn 40 năm hoạt động, chúng tôi tự hào là đơn vị
            đào tạo lái xe hàng đầu tại An Giang, cam kết mang đến cho học viên
            những trải nghiệm học tập chất lượng nhất.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src={facilityImage}
              alt="Cơ sở đào tạo An Giang"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm">Học viên đã tốt nghiệp</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Nơi đào tạo uy tín, chất lượng hàng đầu
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Trung tâm được thành lập từ năm 1984, chúng tôi không ngừng phát triển
              và nâng cao chất lượng đào tạo. Với đội ngũ giáo viên chuyên nghiệp,
              trang thiết bị hiện đại và phương pháp giảng dạy tiên tiến.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Chúng tôi cam kết mang đến cho học viên những kiến thức vững chắc,
              kỹ năng lái xe an toàn và thái độ tham gia giao thông có trách nhiệm.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Tỷ lệ đậu</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">An toàn</div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-gradient p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className={`w-12 h-12 ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                {achievement.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;