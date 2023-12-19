import React from 'react'

function CreatOrder() {
  return (
    <div >

      <form className='form-control fs-4 '>
        <div className='' style={{width:'999px'}}>
          <h2>Creat Order</h2>
          <div classNameName='form-control'>
            <label htmlFor='name'> Food Name:</label><br />
            <input classNameName='form-control' style={{width:'799px'}} type="text" name='name'/>
          </div>
          <div classNameName='form-control'>
            <label htmlFor='name'> Food Code:</label><br />
            <input classNameName='form-control' style={{width:'799px'}} type="text" name='name'/>
          </div>
          <div classNameName='form-control'>
            <label htmlFor='name'> Food Price :</label><br />
            <input classNameName='form-control' style={{width:'799px'}} type="text" name='name'/>
          </div>
          <div classNameName='form-control'>
            <label htmlFor='date'> Date:</label><br />
            <input classNameName='form-control' style={{width:'799px'}} type="text" name='date'/>
          </div>

          <div classNameName=''><br />
            <input className='btn btn-success' type="submit" name='submit' value=" submit"/>
          </div>

          
        </div>
      </form>

    </div>
  )
}

export default CreatOrder

