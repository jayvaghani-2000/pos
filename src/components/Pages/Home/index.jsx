import FilterCandidate from "src/components/Pages/Home/FilterCandidate";
import Applications from "src/components/Pages/Home/Applications";
import Summary from "src/components/Pages/Home/Summary";
import Candidates from "src/components/Pages/Home/Candidates";

const Home = () => {
  return (
    <div>
      <FilterCandidate />
      <Summary />
      <Applications />
      <Candidates />
    </div>
  );
};

export default Home;
