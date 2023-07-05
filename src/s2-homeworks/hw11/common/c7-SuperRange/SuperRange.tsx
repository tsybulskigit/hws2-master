import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{// стили для слайдера // пишет студент
                width: '200px'
            }}
            // отдаём слайдеру пропсы если они есть (value например там внутри)
            {...props}
        />
    )
}

export default SuperRange
