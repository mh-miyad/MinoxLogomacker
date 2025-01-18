import LogoEditor from "@/components/Custom/LogoEditor";
import RecentProjects from "@/components/Custom/RecentProjects";

const Home = () => {
  return (
    <section className="flex items-start">
      <div className="w-full border-r ">
        <LogoEditor />
      </div>
      <RecentProjects />
    </section>
  );
};

export default Home;
