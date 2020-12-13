
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
    AuthService.topKhachHang().then(
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
        <Title title="Top Khach Hang" />

        <table class="table table-bordered" style={{ marginBottom: '0' }}>
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Họ Và Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Số Điện Thoại</th>
              <th scope="col">Tổng Tiền</th>
              <th scope="col">Địa Chỉ</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => {
              return (<tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item.hoVaTen}</td>
                <td>{item.email}</td>
                <td>{item.soDienThoai}</td>
                <td>{nf.format(item.tongTien)}đ</td>
                <td>{item.diaChi}</td>

              </tr>)
            })}

          </tbody>
        </table>
      </div>
    )
  }
}