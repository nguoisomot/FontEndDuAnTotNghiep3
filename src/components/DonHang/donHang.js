import react, {Component} from 'react'
import './donHang.css'
import AuthService from "../../services/auth.service";
import Title from '../title/title'

export default class DonHang extends Component{
  constructor(props){
    super(props)
    this.state={
      items:[],
      data:[],
      StringAllSanPham:''
    }
  }
  xacNhan(idDonHangChiTiet){
     AuthService.xacNhanDonHang(idDonHangChiTiet).then(
       res=>{
         AuthService.danhSachSanPhamChoXacNhan("Đã tiếp nhận đơn hàng").then(
      res => {this.setState({items:res.data.msg})
      this.setState({items:res.data.msg})
    }
    )
       }
     )
  }
  huyDonHang(idDonHangChiTiet) {
    console.log("huy don hang")
    AuthService.huyDonHang(idDonHangChiTiet).then(
      res => {
        AuthService.danhSachSanPhamChoXacNhan("Đóng gói vận chuyển").then(
          res => {
            this.setState({ items: res.data.msg })

          }
        )
      }
    )
  }
  componentDidMount(){
    AuthService.danhSachSanPhamChoXacNhan("Đã tiếp nhận đơn hàng").then(
      res => {this.setState({items:res.data.msg})
      this.setState({items:res.data.msg})
      console.log(res.data.msg)
    }
    )
  }
  render(){
    return(
      <div>
        <Title title="Danh Sách Đơn Hàng" />

        <table class="table table-bordered" style={{ marginBottom: '0' }}>
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col" style={{width:'20%'}}>Sản Phẩm</th>
              <th scope="col">Tổng Giá</th>
              <th scope="col">Người mua</th>
              <th scope="col">SĐT</th>
              <th scope="col" style={{ width: '20%' }}>Địa Chỉ</th>
              <th scope="col">Xác nhận Đơn Hàng</th>
            </tr>
          </thead>
          <tbody>
          {this.state.items.map((item,index)=>{
            return (<tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.stringSanPham}</td>
              <td>{item.tongTien}đ</td>
              <td>{item.nguoiMua}</td>
              <td>{item.sdt}</td>
              <td>{item.diaChi}</td>
              <td>
              <div class="xacNhanDH">
              <button style={{marginRight:'10px'}}onClick={()=>this.xacNhan(item.idDonHangChiTiet)}>Xác Nhận</button>
                  <button onClick={() => this.huyDonHang(item.idDonHangChiTiet)}>Hủy</button>
              </div>
              </td>
             
            </tr>)
          })}
           
          </tbody>
          </table>
      </div>
    )
  }
}