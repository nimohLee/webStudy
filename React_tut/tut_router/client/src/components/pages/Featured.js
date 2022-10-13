

function Featured() {
  return (
    <div>
      <h2>Lists of Reatured Products(Recommend)</h2>
      <div className="featured">
        <table >
          <tr>
            <td>No.</td>
            <td>Item Div.</td>
            <td>Item Name.</td>
            <td>Item Price.</td>
            <td>Item Stock.</td>
            <td>Item Discount.</td>
            <td>Item RegDate.</td>
            <td>Item Update/Delete.</td>
          </tr>
          <tr>
            <td>A10010010001</td>
            <td>
              <select name="" id="">
                <option value="">의류</option>
                <option value="">신발</option>
              </select>
            </td>
            <td><strong>위대한 과학 고전 30권을 1권으로 읽는 책</strong></td>
            <td>16,250</td>
            <td>999</td>
            <td>30%</td>
            <td>2022.10.13</td>
            <td>Update/Delete.</td>
          </tr>
        </table>
        <div className="bottom">
          <div className="pagination">페이지번호</div>
          <div className="btn-wrap">
            <button>Add products</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured