import { Outlet } from 'react-router-dom';
function Admin() {
    return (
        <div>
            <h2>User List(Admin Mode)</h2>
            {/* App.js 자식 element에 설정한 파일이 표시됨 */}
            <Outlet/>
        </div>
    );
}

export default Admin;
