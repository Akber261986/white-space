import Clients from "@/components/Clients";
import CombinedSection from "@/components/CombinedSection";
import Customise from "@/components/Customise";
import Extension from "@/components/Extension";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import ProjectManagement from "@/components/ProjectManagement";
import WorkTogether from "@/components/WorkTogether";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectManagement />
      <WorkTogether />
      <Extension />
      <Customise />
      <Plan />
      <CombinedSection />
      <Clients />
      <Footer />
    </div>
  );
}
