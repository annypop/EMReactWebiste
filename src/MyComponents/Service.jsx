import React from "react";
import web from '../images/image2.jpg';
import SData from "./SData";
import Card from "./Card";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Graphs</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                        {
                            SData.map((val,ind) => {
                                return <Card key={ind}
                                imgsrc={val.imgsrc}
                                title={val.title}
                                visit={val.visit}
                                btntext={val.btntext}
                                />
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;