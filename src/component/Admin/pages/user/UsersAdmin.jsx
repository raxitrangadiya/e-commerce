import { MDBBtn, MDBIcon, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomHook from '../../../../hooks/CustomHook';
const UsersAdmin = () => {
  const { id } = useParams();
  const [apiData, setapiData] = useState();
  const [loading, setloading] = useState(false)
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [deleteStatus, setdeleteStatus] = useState(false)
  const [Updatestatus, setUpdatestatus] = useState(false)
  const [Update, setUpdate] = useState();
  const { handleChange, inp, updatedData } = CustomHook(Update)
  const printmodel = (Update)

  useEffect(() => {
    getData()
    UpdateData()
    // updateDataUserById()
  }, [deleteStatus, Updatestatus])
  // print data in table START
  const getData = async () => {
    const responce = await fetch(`http://localhost:3004/users`);
    const data = await responce.json();
    // console.log("data", data);
    const userList = data.map((val, key) => {
      // console.log("key",key);
      return <tr key={key}>
        <td>{key}</td>
        <td>{val.username}</td>
        <td>{val.email}</td>
        <td>{val.role_id}</td>
        {/* <td>{val.id}</td> */}
        <td>

          <MDBBtn data-id={val.id} onClick={() => { toggleShow(val.id); UpdateData(val.id) }} color='success' rounded size='sm'>
            <MDBIcon data-id={val.id} far icon="edit" />
          </MDBBtn>
          &nbsp;&nbsp;
          <MDBBtn onClick={deleteUser} data-id={val.id} color='danger' rounded size='sm'>
            <MDBIcon data-id={val.id} fas icon="trash" />
          </MDBBtn>

        </td>
      </tr>

    })
    setapiData(userList)
    setloading(true)
  }
  // print data in table END
  // delete user in table START
  const deleteUser = async (event) => {
    let id = event.target.dataset.id
    // await axios.delete(`http://localhost:3004/users${id}`).then(function(del){
    // })
    const responce = await fetch(`http://localhost:3004/users/${id}`, {
      method: 'DELETE',
    })
    console.log("responce", responce);
    const data = await responce.json()
    setdeleteStatus(true)
  }
  // delete user in table END


  // update data in table START//////////////////////////////////////////////////////////
  const UpdateData = async (val) => {
    // console.log("idupdate", val);
    const response = await fetch(`http://localhost:3004/users/${val}`, {
      method: 'PATCH',
    });
    // console.log("response in update data",response);
    const data = await response.json();
    console.log("updated data", data.username);
    
    console.log(data);
    updatedData(data)
    setUpdate(data)
  }
  const updateDataUserById = async () => {
    const responce = await fetch(`http://localhost:3004/users/${printmodel.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inp)
    })
    const data = await responce.json()
    setloading(true)
    console.log("save change", data);
    // console.log("aa",inp);
    setUpdatestatus(true)
  }
  // update data in table END//////////////////////////////////////////////////////////
  console.log("aaa", printmodel);
  return (
    <div>
      <MDBTable hover align='middle'>
        <MDBTableHead >
          <tr className='bg-secondary bg-gradient'>
            <th className='text-light  fw-bold' scope='col'>Sr.no</th>
            <th className='text-light  fw-bold' scope='col'>Name</th>
            <th className='text-light  fw-bold' scope='col'>Email</th>
            <th className='text-light  fw-bold' scope='col'>role id</th>
            <th className='text-light  fw-bold' scope='col'>Action</th>
          </tr>

        </MDBTableHead>
        <MDBTableBody>
          {/* {apiData} */}
          {loading ? apiData : <tr><td colSpan={4}>No Record Found</td></tr>}
          <tr >
                      <td>
                        <MDBBtn color='primary' rounded size='sm'>
                          <MDBIcon fas icon="user-plus" />
                        </MDBBtn>
                      </td>
                    </tr>
          {/* <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn> */}
          <MDBModal className='shadow-custom' show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog size="lg">
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Update Data</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBTable className='table-responsive-md' >
                    {/* {JSON.stringify(Update.username,Update.email)} */}
                    <tr  >
                      <td>  <MDBInput onChange={handleChange} onBlur={handleChange} label='Username' className='p-0' name='username' id='form1' type='text' /></td>
                      <td>  <MDBInput className='p-0' onChange={handleChange} onBlur={handleChange} label='Email' id='typeEmail' name='email' type='email' /></td>

                    </tr>
                  </MDBTable>
                </MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                  </MDBBtn>
                  <MDBBtn onClick={() => { toggleShow(); updateDataUserById() }} >Save changes</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBTableBody>
      </MDBTable>
      <div>
      </div>
    </div>

  );
};

export default UsersAdmin;