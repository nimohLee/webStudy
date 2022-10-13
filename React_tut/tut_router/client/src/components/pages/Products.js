import { Link, Outlet } from 'react-router-dom'



function Products() {
  return (
    <div className='product-container'>
        <div>
            <input type="search" placeholder='Search Product' />
            <button>search</button>
        </div>   
        <div className="nested-navbar">
            <Link to ="featured" className='link'>Featured Lists</Link>
            <Link to ="news" className='link'>News</Link>
        </div>
        <section>
          <Outlet/>
        </section>
    </div>
  )
}

export default Products