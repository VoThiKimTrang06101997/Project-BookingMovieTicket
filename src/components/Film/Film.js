import React from 'react'

export default function Film(props) {
    const { phim } = props;

    return (
        <div class="h-full mr-2 bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <div style={{background: `url(${phim.hinhAnh}), url(http://picsum.photos/300)`, backgroundPosition: 'center', backgroundSize: '100%, 100%'}}>
                <img src={phim.hinhAnh} alt={phim.tenPhim} className="opacity-0 w-full" style={{height: '300px'}} />
            </div>
            <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">{phim.tenPhim}</h1>
            <p class="leading-relaxed mb-3 h-16">{phim.moTa.length>100? <span>{phim.moTa.slice(0,100)}...</span>: <span>{phim.moTa}</span> }</p>
            <a class="text-indigo-500 inline-flex items-center">ĐẶT VÉ
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    )
}

