import React from 'react'

// components
import Button from 'COMPONENTS/Button'

export default () => {
    return (
        <div>
            <Button className="button" id="main_btn" onClick={() => { console.log('click') }}>Button</Button>
        </div>
    )
}