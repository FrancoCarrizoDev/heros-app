import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from 'selectors/getHeroById'

const heroImages = require.context('../../assets/heroes')

export const HeroScreen = ({history}) => {

    // @ts-ignore
    const { heroId } = useParams()

    // const hero = getHeroById(heroId)

    const hero = useMemo(() =>  getHeroById(heroId), [heroId])

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {

        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack();
        }
    }

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero


    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={heroImages(`./${id}.jpg`).default} alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b>
                        {first_appearance}
                    </li>
                </ul>
                <h5>Charactes</h5>
                <p>{characters}</p>
                <button 
                    onClick={handleReturn}
                    className="btn btn-outline-info"
                >Return</button>
            </div>

        </div>
    )
}