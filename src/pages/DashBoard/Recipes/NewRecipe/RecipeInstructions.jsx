import React, { useState } from 'react'

import { Row, Col, Card, Input, Typography, Button, Alert } from 'antd';
import { MenuOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons'

const { Title } = Typography;

export default function RecipeInstructions() {
    const [instructions, setInstructions] = useState([])
    const [addInstruction, setAddInstruction] = useState(false);
    const [singleInstruction, setSingleInstruction] = useState('');
    const [error, setError] = useState('')

    const renderInstructions = () => {
        return instructions.map((item) => {
            return (
                <Col span={24}>
                    <Card>
                        <Row>
                            <Col>
                                {item}
                            </Col>
                            <Col flex={1} className="instruction-right" style={{ marginTop: 10 }}>
                                <MenuOutlined style={{ marginRight: 10 }} className="instruction-icon" />
                                <CloseOutlined className="instruction-icon" style={{ color: 'red' }} />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
        })
    }

    const handleSubmit = () =>{
        if(singleInstruction.length === 0){
            setError(true)
            return null
        }
        setError(false)
        setInstructions(oldArray => [...oldArray, singleInstruction]);
        setSingleInstruction('')

    }
    const renderAddInstruction = () => {
        return (
            <Card>
                <Row>
                    <Col flex={10}>
                        <Input placeholder="Add instruction here..." value={singleInstruction} onChange={(e) =>{
                            setSingleInstruction(e.target.value);
                        }}/>
                    </Col>
                    <Col flex={1} className="instruction-right">
                        <CheckOutlined style={{ marginRight: 10, color: 'green' }} className="instruction-icon" onClick={handleSubmit}/>
                        <CloseOutlined className="instruction-icon" style={{ color: 'red' }} onClick={() => setAddInstruction(false)}/>
                    </Col>
                </Row>
            </Card>
        )
    }
    return (
        <>
            <Button type="primary" block onClick={() => setAddInstruction(true)}>Add an instruction</Button>
            {error && <Alert message="Insturction empty!" type="error" showIcon />}
            {addInstruction && renderAddInstruction()}
            {instructions.length > 0 && <Title level={5} style={{ marginTop: 10 }}>Content</Title>}
            <Row>
                {renderInstructions()}
            </Row>
        </>
    )
}