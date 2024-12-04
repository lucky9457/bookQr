import React, { useState } from 'react'
import bac2 from "../../assets/bac2.mp4";
import qrCode from '../../assets/QRCode.png';
import Navbar from '../Navbar/Navbar';
import "./Home.css"
const leftmenu = ["bussiness", "books", "institute"]
const list = [{
    title: "think python",
    author: "lucky",
    publisher: "radiant",
    exam: "bsc",
    subject: "python",
    description: "python  is a well designed course fkuagdSJKVAKFDHKsjaskjdlhSASVHDBsnashvdjAVHSDKNAVSHCKBJDKNSVAHCSBJ,KNASHCANSCASBX,AN ACSMBX,AMNB ACSNXB ACSMNXAASHVCBXN",
    price: "200",
    language: "englsh",
    isbn: "vjashjg,hKWJ",
    publicationDate: "25/10/2000",
}, {
    title: "think python",
    author: "lucky",
    publisher: "radiant",
    exam: "bsc",
    subject: "python",
    description: "python is a well designed course",
    price: "200",
    language: "englsh",
    isbn: "vjashjg,hKWJ",
    publicationDate: "25/10/2000",
}, {
    title: "think python",
    author: "lucky",
    publisher: "radiant",
    exam: "bsc",
    subject: "python",
    description: "python is a well designed course",
    price: "200",
    language: "englsh",
    isbn: "vjashjg,hKWJ",
    publicationDate: "25/10/2000",
}, {
    title: "think python",
    author: "lucky",
    publisher: "radiant",
    exam: "bsc",
    subject: "python",
    description: "python is a well designed course",
    price: "200",
    language: "englsh",
    isbn: "vjashjg,hKWJ",
    publicationDate: "25/10/2000",
}, {
    title: "think python",
    author: "lucky",
    publisher: "radiant",
    exam: "bsc",
    subject: "python",
    description: "python is a well designed course",
    price: "200",
    language: "englsh",
    isbn: "vjashjg,hKWJ",
    publicationDate: "25/10/2000",
}, {
    title: "think python",
    author: "lucky",
    publisher: "radiant",
    exam: "bsc",
    subject: "python",
    description: "python is a well designed course",
    price: "200",
    language: "englsh",
    isbn: "vjashjg,hKWJ",
    publicationDate: "25/10/2000",
}, {
    title: "think python",
    author: "lucky",
    publisher: "radiant",
    exam: "bsc",
    subject: "python",
    description: "python is a well designed course",
    price: "200",
    language: "englsh",
    isbn: "vjashjg,hKWJ",
    publicationDate: "25/10/2000",
}]
const Home = () => {
    const [activetab, setactivetab] = useState('bussiness')

    const handlemenuclick = (tab) => {
        setactivetab(tab)
    }
    return (
        <div>
            <video className="vid" autoPlay loop muted>
                <source src={bac2} type="video/mp4" />
            </video>
            <Navbar />
            <div className="homecontainer">
                <div className='leftmenu'>
                    <div className='overlayleftmenu'>
                        <ul className='menutabs'>
                            {leftmenu.map((tab) => {
                                return <li onClick={() => handlemenuclick(tab)} className={`eachtab ${tab == activetab ? "tabactive" : ""}`}>
                                    <button className='menubtn'>
                                        {tab}
                                    </button>

                                </li>
                            })}
                        </ul>
                    </div>

                </div>
                <div className='bodylist'>
                    <div className='overlaybody'>
                        <div className='add-con'>
                            <button>
                                Add book
                            </button>

                        </div>
                        <div className='bookslistcon'>
                            <ul>
                                {list.map((each) => (
                                    <li className='listitemcon'>
                                        <div className='qrimagecon'>
                                            <img src={qrCode} alt="qr" className='qrimage' />

                                        </div>
                                        <div className='contentbook'>
                                            <h1>Title: {each.title}</h1>
                                            <p className='bookdesc'>description: {each.description}</p>
                                            <div>
                                                <p>Author: {each.author}</p>
                                                <p>publisher: {each.publisher}</p>
                                                <p>price: Rs. {each.price}</p>
                                                <button className='viewdetailsbtn'>
                                                    view Details
                                                </button>

                                            </div>
                                        </div>

                                    </li>
                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home