import LogoEditor from "@/components/Custom/LogoEditor";
import RecentProjects from "@/components/Custom/RecentProjects";

const Home = () => {
  return (
    <section>
      <nav className="w-full h-12 border-b px-10 flex items-center">log</nav>
      <div className="flex items-start">
        <div className="w-full border-r ">
          <LogoEditor />
        </div>
        <RecentProjects />
      </div>
    </section>
  );
};

export default Home;
