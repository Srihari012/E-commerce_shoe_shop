import './Price.css'
import Input from '../../Components/Input'

function Price({handleChange}) {
  return <div className='ml'>
    <h2 className='sidebar-title price-title'>Price</h2>
    {/* <label className='sidebar-label-container'>
      <input onChange={handleChange} type="radio" value="" name='test'/>
      <span className='checkmark'></span>All
    </label> */}

    <Input handleChange={handleChange}
    value=""
    title='All'
    name='test2'/>

    <Input handleChange={handleChange}
    value={50}
    title='₹0 - ₹4999'
    name='test2'
    />
    <Input handleChange={handleChange}
    value={50}
    title='₹5000 - ₹6999'
    name='test2'
    />
    <Input handleChange={handleChange}
    value={50}
    title='₹7000 - ₹8999'
    name='test2'
    />
    <Input handleChange={handleChange}
    value={50}
    title='₹9000 - ₹9999'
    name='test2'
    />
    <Input handleChange={handleChange}
    value={50}
    title='Above ₹10000'
    name='test2'
    />
  </div>
}

export default Price