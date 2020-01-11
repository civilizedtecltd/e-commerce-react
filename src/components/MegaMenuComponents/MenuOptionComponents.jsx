import React, {useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import { Lia } from "../LiComponent/CommonLiComponent";
import { URL } from '../../constants/config'
import axios from 'axios'
const MenuOptionComponents = props => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(URL._GET_STAGE_FILTER)
        .then(res => setMenu(res.data.categories));
    };
    fetchData();
  }, []);
  return (
    <>
          {menu ? menu.map((m, i) => {
              return (
                <Col sm="3" key={i}>
                  <h3 className="cardWidgetTitle mb-3">{m.category}</h3>
                  <ul className={`cardWidgetList ${i===1? "cardWidgetList2" : ""} text-center`}>
                    {m.stage
                      ? m.stage.map((item, index) => {
                          
                          return (
                            <Lia
                              key={`primary-${index}`}
                              Title={item.stage}
                              Url={`/shop/filter/category/${m.id}/stage/${item.id}`}
                            />
                          );
                        })
                      : ""}
                  </ul>
                </Col>
              );}) : ""}
            </>
  );
};
export default MenuOptionComponents;