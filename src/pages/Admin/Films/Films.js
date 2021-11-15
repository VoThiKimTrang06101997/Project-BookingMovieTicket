import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input, Space } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { layDanhSachPhimAction, xoaPhimAction } from '../../../redux/actions/QuanLyPhimActions';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';

const { Search } = Input;

export default function Films() {
    const { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    console.log("arrFilmDefault", arrFilmDefault);

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [])

    const columns = [
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            value: (text, obkect) => { return <span>{text}</span> },
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['ascend', 'descend'],
            width: "15%"
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <Fragment>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = `https://picsum.photos/id/${index}/50/50` }} />
                </Fragment>
            },
            width: "15%"
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['ascend', 'descend'],
            width: "25%"
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, film) => {
                return <Fragment>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                </Fragment>
            },
            sortDirections: ['ascend', 'descend'],
            width: "25%"
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: (text, film) => {
                return <Fragment>
                    <NavLink key={1} className="mr-2 text-2xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined style={{ color: 'blue' }} /></NavLink>
                    <span key={2} style={{cursor: "pointer"}} className="text-2xl" onClick={() => {
                        // Gọi action xóa
                        if(window.confirm("Bạn có chắc muốn xóa phim" + film.tenPhim)) {
                            // Gọi action
                            dispatch(xoaPhimAction(film.maPhim));
                        }
                    }}><DeleteOutlined style={{ color: 'red' }} /></span>

                    <NavLink key={1} className="ml-2 text-2xl" to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`} onClick={()=>{
                        localStorage.setItem("filmParams", JSON.stringify(film));
                    }}><CalendarOutlined style={{ color: 'green' }} /></NavLink>
                </Fragment>
            },
            sortDirections: ['ascend', 'descend'],
            width: "20%"
        },
    ];

    const data = arrFilmDefault;


    const onSearch = value => {
        console.log(value);
        // Gọi APi layDanhSachPhim
        dispatch(layDanhSachPhimAction(value));
    };

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <h3 className="text-4xl">Quản lý Phim</h3>
            <Button className="mb-5" onClick={() => {
                history.push("/admin/films/addnew")
            }}>Thêm phim</Button>
            <Search
                className="mb-5"
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"maPhim"} />
        </div>
    )
}
