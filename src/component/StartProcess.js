import React, { useEffect, useState, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateProcess } from '../redux/action/action'
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from '@progress/kendo-react-buttons';
import { TextArea } from '@progress/kendo-react-inputs';
import { Label } from "@progress/kendo-react-labels";
import { useNavigate } from 'react-router-dom';
import { Card, CardBody } from '@progress/kendo-react-layout';



const StartProcess = memo(({ testing }) => {
    console.log('checking')
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
            testing(false)
            setShowDrawer(false)
            navigate('/')
        }
    }

    const processFunction = () => {
        setErrorString('')
        setShowDrawer(false)
    }
    const sample = () => {
        console.log('hi')
        testing(false)

    }
    return (
        <div >
            <Button onClick={sample}>
                close me
            </Button>
            {/* should hide when clicked on process */}
            {!showDrawer &&
                <div style={{ width: '318px' }}>
                    <div>
                        <h1 style={{ textAlign: 'center' }} > Start Process </h1>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: "space-around" }}>
                        {/* list of Process */}
                        {processData.length > 0 ? <> {processData.map((value) => {
                            return (
                                <Card onClick={() => updatingfunction(value)} type='info' style={{ height: '100px', width: '125px', textAlign: 'center', marginBottom: '10px' }}>
                                    <CardBody style={{ textAlign: 'center' }}>
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
                <div style={{ width: '318px' }}>
                    <div>
                        <h1 style={{ fontSize: '15px', textAlign: 'center' }} >Process Request Form </h1>
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
                                {errorString.length > 0 ? <span style={{ color: 'red' }}>{errorString}</span> : <span></span>}
                                <div style={{display:'flex' ,flexWrap:'wrap' ,justifyContent:'space-between'}}>
                                    <Button onClick={startProcessFunction} themeColor='info' style={{ marginTop: '20px', width: "150px" }}> Start process</Button>
                                    <Button onClick={processFunction} themeColor='info' style={{ marginTop: '20px', cursor: 'pointer', width: "150px" }}> Process</Button>
                                </div>
                            </div>
                        }
                    </div>
                </div>}
        </div>
    )
})

export default StartProcess