import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import DvrIcon from '@material-ui/icons/Dvr';
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Sidebar from "../sidebar/sidebar";
import "./container.css";

import { useHistory } from 'react-router-dom'


function Container(props) {
  let history = useHistory();

  function onClickQuanLy(e, item) {
    //window.alert(JSON.stringify(item, null, 2));
    //console.log('additems')
    history.push("/manager");

  }
  function onClickAddItem(e, item) {
    history.push("/addItems");

  }
  function onClick(e, item) {
    if (item.name === 'them_san_pham') {
      console.log("Router")
      history.push("/addItems");
    }
    // else if (item.name === 'quan_ly_san_pham') {
    //   console.log("Router")
    //   history.push("/manager");
    // }
    else if (item.name === 'quan_ly_san_pham') {
      console.log("Router")
      history.push("/manager");
    }
    else if (item.name === 'don_hang') {
      console.log(item)
      console.log("Router")
      history.push("/donhang");
    }
    else if (item.name === 'cho_xac_nhan') {
      history.push("/donhang");     
      // if(item.items[1].name === 'dang_giao_hang'){
      // history.push("/danggiaohang");
      // }
    }
    else if (item.name === 'dang_giao_hang') {
      console.log("Router")
      history.push("/danggiaohang");
    }
    else if (item.name === 'da_giao_hang') {
      console.log("Router")
      history.push("/dagiaohang");
    }
    else if (item.name === 'huy_don_hang') {
      console.log("Router")
      history.push("/donhangdahuy");
    }
    else if (item.name === 'dang_giao_hang') {
      console.log("Router danggiaohang")
      history.push("/danggiaohang");
    }
    else if (item.name === 'doanh_thu') {
      console.log("Router")
      history.push("/thongke");
    }
    else if (item.name === 'ban_chay') {
      console.log("Router")
      history.push("/banchay");
    }
    else if (item.name === 'top_10_ban_chay') {
      console.log("Router")
      history.push("/top10banchay");
    }
    else if (item.name === 'top_10_doanh_thu') {
      console.log("Router")
      history.push("/top10doanhthu");
    }
    else if (item.name === 'top_khach_hang') {
      console.log("Router")
      history.push("/topkhachhang");
    }
    else if (item.name === 'dang_xuat') {
      localStorage.removeItem("shop")
      console.log("Router")
      history.push("/login");
      window.location.reload();

    }
    else {
      history.push("/addItems");
      // console.log("item: " + JSON.stringify(item))
      console.log("item: " + JSON.stringify(item.name))
    }


  }
  const items = [
    { name: "trang_chu", label: "Trang Chủ", Icon: HomeIcon },
    {
      name: "don_hang",
      label: "Đơn Hàng",
      Icon: ReceiptIcon,
      items: [
        // add icon /////////////////////////////////
        // { name: "cho_xac_nhan", label: "Chờ xác nhận", Icon: HomeIcon, onClick },
        { name: "cho_xac_nhan", 
        label: "Chờ xác nhận",
        onClick
        },
        { name: "dang_giao_hang",
         label: "Đang giao hàng",
         onClick 
         },
        { name: "da_giao_hang",
         label: "Đã giao hàng",
         onClick 
         },
        { name: "huy_don_hang",
         label: "Đơn hàng đã hủy",
         onClick 
         }
      ]
    },
    "divider",
    {
      name: "san_pham",
      label: "Sản Phẩm",
      Icon: DvrIcon,
      items: [
        { name: "them_san_pham", label: "Thêm Sản Phẩm", onClick },
        { name: "quan_ly_san_pham", label: "Quản Lý Sản Phẩm", onClick },
        "divider",
        // {
        //   name: "notifications",
        //   label: "Notifications",
        //   Icon: NotificationsIcon,
        //   items: [
        //     { name: "email", label: "Email" },
        //     {
        //       name: "desktop",
        //       label: "Desktop",
        //       Icon: DesktopWindowsIcon,
        //       items: [
        //         { name: "schedule", label: "Schedule" },
        //         { name: "frequency", label: "Frequency" }
        //       ]
        //     },
        //     { name: "sms", label: "SMS" }
        //   ]
        // }
      ]
    },
    "divider",
    {
      name: "thong_ke",
      label: "Thống Kế",
      Icon: EqualizerIcon,
     
      items: [
        // add icon /////////////////////////////////
        // { name: "cho_xac_nhan", label: "Chờ xác nhận", Icon: HomeIcon, onClick },
        { name: "doanh_thu", label: "Doanh thu theo thời gian",onClick },
        { name: "ban_chay", label: "Bán chạy theo thời gian ", onClick },
        { name: "top_10_ban_chay", label: "Top bán chạy nhất", onClick },
        { name: "top_10_doanh_thu", label: "Top doanh thu cao nhất", onClick },
        { name: "top_khach_hang", label: "Top Khách Hàng", onClick },
      ]
    },
    "divider",
    { name: "dang_xuat", label: "Đăng xuất", Icon: PowerSettingsNewIcon,onClick }
  ];
  document.body.style.backgroundColor = '#F0F2F5';

  return ( 
    <div className="over-body">
      <div className="static">
        <Sidebar items={items} />
      </div>

      <div className="screen-work">
        <header style={{ backgroundColor:'#189eff'}}><p style={{padding:'20px',textAlign:'center',color:'white',fontSize:'24px',fontWeight:'bold'}}>Trang Quản Trị Cửa Hàng Nicky</p></header>
        <div className="component_child">{props.children}</div>
        
      </div>
    </div>
  );
}

export default Container;
