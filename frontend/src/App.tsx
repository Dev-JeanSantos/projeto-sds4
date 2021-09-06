import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import BarChar from "components/BarChar";
import DonutChar from "components/DonutChar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className= "text-center text-secondary">Taxa de Sucessos (%) </h5>
            <BarChar />
          </div>
          <div className="col-sm-6">
            <h5 className= "text-center text-secondary">Todas as Vendas</h5>
            <DonutChar />
          </div>
        </div>
        <div className= "py-3">
          <h2 className="text-primary">Todas Vendas</h2>

        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
