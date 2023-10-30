import "./Boxuser.css"

function Boxuser(prop){



    return (
      <>
        <div
          className="user_item"
          style={{
            width: prop.check ? "45%" : "100%",
          }}
        >
          {!prop.check && (
            <>
              <i
                style={{ padding: "0px 10px", color: "#777" }}
                class="fa-solid fa-circle-check"
              ></i>
            </>
          )}

          <img
            style={{ marginLeft: prop.check ? "20px" : "0px" }}
            alt=""
            src={prop.infor.userImage}
          />
          <div className="user_content">
            <div className="user_name">{prop.infor.userName}</div>
            <div className="user_code">{prop.infor.userCode}</div>
          </div>
          {!prop.check && (
            <>
              <i
                class="fa-solid fa-ellipsis-vertical"
                style={{ cursor: "pointer", padding: "0px 5px" }}
              ></i>
            </>
          )}
        </div>
      </>
    );
}

export default Boxuser;