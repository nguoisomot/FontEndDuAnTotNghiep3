
import react, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import './App.css'
import Register from "./components/register/register";
import Login from './components/login/login';
import Container from './components/container/container';
import AddItems from './components/addItems/addItems';
import Manager from './components/manager/manager';
import Edit from './components/edit/edit';
import DonHang from './components/DonHang/donHang';
import DangGiaoHang from './components/DonHang/dangGiaoHang';
import DaGiaoHang from './components/DonHang/daGiaoHang';
import HuyDonHang from './components/DonHang/huyDonHang';
import ThongKe from './components/ThongKe/thongKe';
import SanPhamBanChay from './components/ThongKe/SanPhamBanChay/sanPhamBanChay';
import TopTableBanChay from './components/ThongKe/TopTableBanChay/topTableBanChay';
import TopTableDoanhThu from './components/ThongKe/TopTableDoanhThu/topTableDoanhThu';
import TopKhachHang from './components/ThongKe/TopKhachHang/topKhachHang';
import NotPage from './components/404Page/404page';
import Modal from './components/modal/modal';
import UpImage from './components/upImage/upImage';
import UploadMultipleImage from './components/uploadMultipleImage/uploadMultipleImage';
class App extends Component {
  constructor(props) {
    super(props);
    // this.logOut = this.logOut.bind(this);
    this.state = {
      id: JSON.parse(localStorage.getItem('shop'))
    };

  }

  render() {
    return (
      // <div>
      //   show
      //   <UploadMultipleImage/>
      // </div>
      this.state.id ?
        <Router>
          <div>

            {/* <div className="container mt-3"> */}

            <Switch>
              <Container>
                {/* <Route exact path={["/", "/home"]} component={Home} />
              */}
                <Switch>  <Route path="/register" component={Register} />
                  <Route path="/edit/:idItem" component={Edit} />
                  <Route path="/addItems" component={AddItems} />  
                  <Route path="/donhang" component={DonHang} />
                  <Route path="/danggiaohang" component={DangGiaoHang} />
                  <Route path="/dagiaohang" component={DaGiaoHang} />
                  <Route path="/donhangdahuy" component={HuyDonHang} />
                  <Route path="/modal" component={Modal} />
                  <Route path="/manager" component={Manager} />
                  <Route path="/thongke" component={ThongKe} />
                  <Route path="/banchay" component={SanPhamBanChay} />
                  <Route path="/top10banchay" component={TopTableBanChay} />
                  <Route path="/top10doanhthu" component={TopTableDoanhThu} />
                <Route path="/topkhachhang" component={TopKhachHang} />
                  <Route path="/" component={Manager} />
                  
                  
                
                  </Switch>
              </Container>
            </Switch>

          </div>
        </Router>
        :
        <Router>
       
          <Switch>

            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
             <Route path="/danggiohang" component={DangGiaoHang} />
            <Route  component={NotPage} />
            
            {/*set defaul not page 404 */}
            <Container>  
            <Switch>
                <Route  path="/addItems" component={AddItems} />
                <Route path="/donHang" component={DonHang} />

                <Route path="/manager" component={Manager} />
                <Route path="/manager" component={Manager} />
                <Route path="/edit/:idItem" component={Edit} />  
            </Switch>           
             
            </Container>   
               <Route  component={Register} />
          </Switch>
        </Router>
    );
  }
}
export default App;