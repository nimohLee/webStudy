import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Cultural({ cultural }) {
    const [detail, setDetail] = useState(false);
    return (
        <div className="cultural-wrap">
            {
                <div className="cultural-title">
                    <img src={cultural.fileurl1} alt={cultural.MYONGCHING} />
                    <h4>{cultural.DOJIJUNG_NO}</h4>
                    <h3>
                        {cultural.MYONGCHING}({cultural.MYONGCHING_HANMUN})
                    </h3>
                    <ShowDetailBtn/>
                </div>
        }
            
            <br />
            {detail ? <DescTable cultural={cultural}/> : null}
        </div>
    );
    function ShowDetailBtn(){
        return(
            /* p 태그로 만들면 블록으로 되어 해당 블록 다른 곳을 클릭해도 작동
            --> span은 inline tag이므로 span으로 변경 */
           <span onClick={(e) => {
            setDetail(!detail);
           } }>
            자세히보기 <FontAwesomeIcon icon={
                detail ? faCaretUp : faCaretDown
                }/>                
            </span>
        );
            
        
    }
    function DescTable({ cultural }){
        return(
            <table className="cultural-table" border={1}>
                <tr>
                    <td>시대</td>
                    <td>{cultural.SIDAE}</td>
                </tr>
                <tr>
                    <td>문화재 지정일</td>
                    <td>{cultural.JIJUNG_DATE}</td>
                </tr>
                <tr>
                    <td>주소</td>
                    <td>{cultural.ADDRESS1}</td>
                </tr>
                <tr>
                    <td>면적</td>
                    <td>{cultural.MYONJUK}</td>
                </tr>
                <tr>
                    <td>소유자</td>
                    <td>{cultural.SOYOUJA_NAME}</td>
                </tr>
                <tr>
                    <td>관리자</td>
                    <td>{cultural.ADMIN_NAME}</td>
                </tr>
                <tr>
                    <td>설명</td>
                    <td>{cultural.CONTENT}</td>
                </tr>
            </table>
        );
    }
}


export default Cultural;
