import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProcess } from '../redux/action/action'
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import { TextArea } from '@progress/kendo-react-inputs';
import { Label } from "@progress/kendo-react-labels";
import { useNavigate } from 'react-router-dom';
import { Card, CardBody } from '@progress/kendo-react-layout';


function StartProcess() {
    const [processData, setProcessData] = useState([])
    const [updatedData, setUpdatedData] = useState([])
    const [showDrawer, setShowDrawer] = useState(false)
    const [reason, setReason] = useState('')
    const navigate = useNavigate()
    const [errorString, setErrorString] = useState('')

    const dispatch = useDispatch()
    let dateData = new Date().toLocaleDateString();
    const data = useSelector((state) => state.allProcess)

    useEffect(() => {
        setProcessData(data)
    }, [data])

    const updatingfunction = (value) => {
        setUpdatedData(value)
        setShowDrawer(true)
    }

    const startProcessFunction = () => {
        if (reason === '') {
            setErrorString('Please enter reason')
        } else {
            updatedData.reason = reason
            updatedData.startDate = dateData
            updatedData.status = 'running'
            dispatch(updateProcess(updatedData))
            setReason('')
            setShowDrawer(false)
            navigate('/')
        }
    }

    const processFunction = () => {
        setErrorString('')
        setShowDrawer(false)
    }
    return (
        <div >
            {/* should hide when clicked on process */}
            {!showDrawer &&
                <div>
                    <div>
                        <h1> Start Process </h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {/* list of Process */}
                        {processData.length > 0 ? <> {processData.map((value) => {
                            return (
                                // <Button themeColor='info' onClick={() => updatingfunction(value)} style={{ cursor: "pointer", padding: '45px', marginTop: '10px' }}>
                                //     {value.name}
                                // </Button>
                                <Card onClick={() => updatingfunction(value)} type='info' style={{padding:'20px', textAlign: 'center'}}>
                                    <CardBody>
                                        {value.name}
                                    </CardBody>
                                </Card>
                            )
                        })} </> : <> </>}
                    </div>
                </div>
            }
            {/* intially hide process  show when process is clicked */}
            {showDrawer &&

                <div>
                    <div>
                        <h1 style={{ fontSize: '15px' }} >Process Request Form </h1>
                    </div>
                    <div>
                        <Label style={{ color: 'black' }}> Process Name</Label>
                        <Button themeColor='flat'> {updatedData.name} </Button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {updatedData.status === 'running' ?
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Button themeColor='info' style={{ marginTop: '20px', cursor: 'not-allowed' }}> Process is Already Running</Button>
                                <Button onClick={processFunction} themeColor='info' style={{ marginTop: '20px', cursor: 'pointer' }}> Process</Button>
                            </div>
                            :
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Label> Reason</Label>
                                <TextArea type='text' onChange={(e) => setReason(e.target.value)} />
                                {errorString.length > 0 ? <span style={{color:'red'}}>{errorString}</span> : <span></span>}
                                <Button onClick={startProcessFunction} themeColor='info' style={{ marginTop: '20px' }}> Start process</Button>
                                <Button onClick={processFunction} themeColor='info' style={{ marginTop: '20px', cursor: 'pointer' }}> Process</Button>
                            </div>
                        }
                    </div>
                </div>}
        </div>
    )
}

export default StartProcess