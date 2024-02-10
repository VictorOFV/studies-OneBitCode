import { GetServerSideProps, GetStaticProps } from "next"
import React, { ReactNode, useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

interface ApiResponseData {
    name: string
    timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
    const staticServerData: ApiResponseData = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res => res.json())
    return {
        props: {
            staticServerData
        },
        revalidate: 10
    }
}

function statics({ children, staticServerData }: { children: ReactNode, staticServerData: ApiResponseData }) {
    const [clientSideData, setClientSideData] = useState<ApiResponseData>()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("/api/hello").then(res => res.json())
        setClientSideData(data)
    }

    return (
        <Container>
            <h1 className="mt-3 mb-3">Diferentes renderizações no next</h1>

            <Row>
                <Col>
                    <h3>Gerado Estaticamente</h3>
                    <p className="h2">{staticServerData?.timestamp.toString()}</p>
                </Col>
                <Col>
                    <h3>Gerado no client</h3>
                    <p className="h2">{clientSideData?.timestamp.toString()}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default statics