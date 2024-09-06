import React from 'react'
import './css/selection.css'
import { ProductObj, AutortObj } from '../';

export default function Selection( state ){

    return(
        <section className="parent_selection">
            <div className="object1"> 
            <ProductObj
                    name='pedro paramo y la rosa roja'
                    Writers='John Carl'
                    price='700'
                    descount='-80'
                    imageLink='{cart}'
                    fullInfo='Una gran histoia de amor entre una pareja no coerresponida '
                /> 
            </div>
            <div class="object2"> 
            <ProductObj
                    name='pedro paramo y la rosa roja'
                    Writers='John Carl'
                    price='700'
                    descount='-80'
                    imageLink='awfewq'
                    fullInfo='Una gran histoia de amor entre una pareja no coerresponida '
                /> 
            </div>
            <div class="object3"> 
            <ProductObj
                    name='pedro paramo y la rosa roja'
                    Writers='John Carl'
                    price='700'
                    descount='-80'
                    imageLink='awfewq'
                    fullInfo='Una gran histoia de amor entre una pareja no coerresponida '
                /> 
            </div>
            <div class="object4">
            <ProductObj
                    name='pedro paramo y la rosa roja'
                    Writers='John Carl'
                    price='700'
                    descount='-80'
                    imageLink='awfewq'
                    fullInfo='Una gran histoia de amor entre una pareja no coerresponida '
                /> 
            </div>
        </section>
    )
}