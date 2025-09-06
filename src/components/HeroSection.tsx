import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Users, MapPin, Phone } from "lucide-react";
import heroImage from "@/assets/hero-driving-school.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Trung tâm đào tạo lái xe An Giang"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-section opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              40+ năm kinh nghiệm đào tạo
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Trung tâm Đào tạo{" "}
              <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                An Giang
              </span>
            </h1>

            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Đào tạo và sát hạch lái xe, lái tàu các hạng chuyên nghiệp.
              <br />
              <strong>Học tại đâu - Thi tại đó</strong> tại Long Xuyên và Châu Đốc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="btn-primary">
                <Phone className="w-5 h-5 mr-2" />
                Đăng ký ngay: 0296.3841.841
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <MapPin className="w-5 h-5 mr-2" />
                Xem địa điểm
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start">
              <div className="flex items-center space-x-8 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold">40+</div>
                  <div className="text-sm text-gray-300">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-gray-300">Cơ sở đào tạo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-gray-300">Học viên thành công</div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <Card className="card-gradient p-6 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Đào tạo chuyên nghiệp</h3>
                  <p className="text-muted-foreground">
                    Đội ngũ giáo viên giàu kinh nghiệm, trang thiết bị hiện đại,
                    chương trình đào tạo chuẩn Bộ GTVT.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-gradient p-6 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Học tại đâu - Thi tại đó</h3>
                  <p className="text-muted-foreground">
                    3 cơ sở tại Long Xuyên và Châu Đốc, thuận tiện cho học viên
                    trong việc học tập và thi sát hạch.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-gradient p-6 backdrop-blur-sm border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Nhiều hạng bằng lái</h3>
                  <p className="text-muted-foreground">
                    Đào tạo đầy đủ các hạng bằng lái xe ô tô, xe máy và tàu thủy
                    theo quy định mới nhất.
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

export default HeroSection;