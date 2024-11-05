import Customise from "@/components/Customise";
import Extension from "@/components/Extension";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
    </div>
  );
}
