import Card from "../Component/PeopleList";
import Search from "../Component/Search";
import CreateButton from "../Component/CreateButton";

function Home() {
  return (
    <div style={{ width: "100wh", height: "100vh" }}>
      <div>
        <Search />
      </div>
      <div>
        <CreateButton />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}
export default Home;
