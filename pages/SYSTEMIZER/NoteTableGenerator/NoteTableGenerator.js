import React from 'react'

// components
import { Title, Paragraph } from 'COMPONENTS/Typography'
import Line from 'COMPONENTS/Line'

// styles
import './noteTableGenerator.scss'

export default ({ noteObj }) => {
    return (
        <div className="component_note">
            <header>
                <Title size='tiny'>{noteObj.title}</Title>
                {noteObj.description ? <Paragraph><Line />{noteObj.description}</Paragraph> : null}
            </header>
            <section>
                <Paragraph bold uppercase>Props</Paragraph>
                {
                    noteObj.props.length <= 0 ? <Paragraph>This Component Don`t Receives Props</Paragraph> : noteObj.props.map((item, index) => {
                        let prop = Object.keys(item)[0]
                        let desk = item[prop]
                        return (
                            <div key={prop + index} className="row">
                                <code>{prop}</code>
                                <Paragraph>{desk}</Paragraph>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}
