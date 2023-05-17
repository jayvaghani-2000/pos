import FilterCandidate from "src/components/Pages/Home/FilterCandidate";
import Summary from "./Summary";
import ApplicationList from "./applicationList"

const Home = () => {
  return (
    <div>
      <FilterCandidate />
      <Summary />
      <ApplicationList />
    </div>
  );
};

export default Home;
