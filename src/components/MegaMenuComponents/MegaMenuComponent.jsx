import React from 'react';
import {Col} from "react-bootstrap";
import Kindergarten from "./KindergartenComponent";
import Stationery from "./StationeryComponent";
import PrimarySchool from "./PrimarySchoolComponent";
import SeconderySchool from "./SecondarySchoolComponent";

const MegaMenu = () => {
    return (
        <>

            <Col sm="3">
                <h3 className="cardWidgetTitle mb-3">
                    Kindergarten
                </h3>
                <ul className="cardWidgetList text-center">

                    <Kindergarten/>

                </ul>
            </Col>
            <Col sm="3">
                <h3 className="cardWidgetTitle mb-3">
                    Primary school
                </h3>
                <ul className="cardWidgetList cardWidgetList2 text-center">
                    <PrimarySchool/>
                </ul>
            </Col>
            <Col sm="3">
                <h3 className="cardWidgetTitle mb-3">
                    Secondary school
                </h3>
                <ul className="cardWidgetList text-center">
                    <SeconderySchool/>
                </ul>
            </Col>
            <Col sm="3">
                <h3 className="cardWidgetTitle mb-3">Stationery</h3>
                <ul className="cardWidgetList text-center">
                    <Stationery/>
                </ul>
            </Col>

        </>
    );
};

export default MegaMenu;
