import React, { Fragment, useState } from 'react';
import { Tabs } from 'antd';
import { connect } from "react";
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {
    state = {
        tabPosition: 'left',
    };

    changeTabPosition = e => {
        this.setState({ tabPosition: e.target.value });
    };

    componentDidMount() {

    }
    renderHeThongRap = () => {
        return this.props.heThongRapChieu?.map((heThongRap, index) => {
            let { tabPosition } = this.state;
            return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" />} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {heThongRap.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: '300px', display: 'flex' }}>
                                <img src="https://s3img.vcdn.vn/123phim/2018/09/ddc-dong-da-15379624326697.jpg" width="50" /> <br />
                                <div className="text-left ml-2">
                                    {cumRap.tenCumRap}
                                    <p className="text-red-200">Chi tiết</p>
                                </div>
                            </div>
                        }
                            key={index}>
                            {/** Load phim tương ứng*/}
                            {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className="my-5" style={{ display: 'flex' }} >
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ height: 100, width: 100 }} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => { e.target.onError = null; e.target.src = "https://picsum.photos/100/100" }} />
                                            <div className="ml-2">
                                                <h1 className="text-1xl text-red-700 font-bold">{phim.tenPhim}</h1>
                                                <p className="font-bold">{cumRap.diaChi}</p>
                                                <div className="grid grid-cols-6 gap-6">
                                                    {phim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                        return <NavLink className="text-1xl text-green-400" to="/" key={index}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }
    render() {
        const { tabPosition } = this.state;
        return (
            <>
                <Tabs tabPosition={tabPosition}>
                    {this.renderHeThongRap()}
                </Tabs>
            </>
        )
    }
}


