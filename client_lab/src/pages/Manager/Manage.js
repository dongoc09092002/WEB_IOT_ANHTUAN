import { useState } from "react";
import Adduser from "../../components/Adduser/Adduser";
import Boxuser from "../../components/Boxuser/Boxuser";
import "./Manager.css";
function Manager() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0, nên cộng thêm 1
  const year = currentDate.getFullYear();

  const [search , setSearch] =useState("");


  return (
    <>
      <div className=" manager ">
        <Adduser />

        <div className="manager_user">
          <div
            style={{ position: "absolute", display: "block", top: "2%" }}
            className="manager_user_search"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              value={search}
              placeholder="20203520"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {search && (
              <div className="manager_user_search_body">
                <div className="manager_user_search_item">
                  <Boxuser />
                </div>
                <div className="manager_user_search_item">
                  <Boxuser />
                </div>
                <div className="manager_user_search_item">
                  <Boxuser />
                </div>
                <div className="manager_user_search_item">
                  <Boxuser />
                </div>
                <div className="manager_user_search_item">
                  <Boxuser />
                </div>
              </div>
            )}
          </div>
          <h3 className="manager_user_header">
            <i class="fa-solid fa-users"></i> Unfinished user
          </h3>
          <div className="manager_user_slacking">
            <div className="manager_user_item">
              <img
                alt=""
                src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/1/14/994777/Cha-Eun-Woo-True-Bea.jpg"
              />
              <h3 className="manager_user_code">20203520</h3>
            </div>
            <div className="manager_user_item">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwktyGHMlp5bGY23Ioaib9O6HxDYvst07fBw&usqp=CAU"
              />
              <h3 className="manager_user_code">20203520</h3>
            </div>
            <div className="manager_user_item">
              <img
                alt=""
                src="https://vapa.vn/wp-content/uploads/2022/12/hinh-anh-cute-anime-002.jpg"
              />
              <h3 className="manager_user_code">20203520</h3>
            </div>
            <div className="manager_user_item">
              <img
                alt=""
                src="https://vapa.vn/wp-content/uploads/2022/12/hinh-anh-cute-anime-002.jpg"
              />
              <h3 className="manager_user_code">20203520</h3>
            </div>
            <div
              className="manager_user_item"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#265d80",
                cursor: "pointer",
              }}
            >
              <i class="fa-solid fa-expand" style={{ fontSize: "80px" }}></i>
            </div>
          </div>
          <h3 className="manager_user_name">
            <i class="fa-solid fa-bars-progress"></i> Manage User
          </h3>
          <div className="manager_user_footer">
            <div className="manager_user_number">
              <h3>
                <i class="fa-solid fa-calendar-days"></i> <span>Date </span>:{" "}
                {day}/{month}/{year} <br />
                <i class="fa-solid fa-user-group"></i> <span>Number </span>: 30
                user <br />
                <i class="fa-solid fa-check"></i> <span>Done </span> : 20 user{" "}
                <br />
              </h3>
            </div>
          </div>
        </div>
        <div className="manager_right">
          <div className="manager_list">
            <h3 style={{ color: "#ddd" }} className="manager_list_name">
              <i class="fa-solid fa-users"></i> List User 
              <i class="fa-solid fa-circle-check" style={{marginLeft : '30px'}}></i> Done
            </h3>
            <Boxuser />
            <Boxuser />
            <Boxuser />
            <Boxuser />
            <Boxuser />
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager;
