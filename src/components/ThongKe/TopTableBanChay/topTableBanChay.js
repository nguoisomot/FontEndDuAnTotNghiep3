
import react, { Component } from 'react'
import AuthService from "../../../services/auth.service";
import Title from '../../title/title'

export default class TopTableBanChay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      data: [],
      StringAllSanPham: ''
    }
  }

  componentDidMount() {
    AuthService.top10SanPhamBanChayNhat().then(
      res => {
        this.setState({ items: res.data.msg })
        console.log(res.data.msg)
      }
    )
  }
  render() {
    var nf = new Intl.NumberFormat('de-DE');

    return (
      <div>
        <Title title="Danh Sách Sản Phẩm Bán Chạy Nhất" />

        <table class="table table-bordered" style={{ marginBottom: '0' }}>
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Sản Phẩm</th>
              <th scope="col">Giá</th>
              <th scope="col">Số Lượng Đã Bán</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Doanh Thu</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => {
              return (<tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.tenSanPham}</td>
                <td>{nf.format(item.gia)}đ</td>
                <td>{item.soLuongMua}</td>
                <td><img style={{ width: "50px", height: "50px", padding: "5px" }} src={item.hinh_anh}/></td>
                <td>{nf.format(item.tongTien)}đ</td>
               

              </tr>)
            })}

          </tbody>
        </table>
      </div>
    )
  }
}