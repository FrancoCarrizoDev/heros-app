// @ts-nocheck
import { HeroCard } from 'components/heroes/HeroCard'
import { useForm } from 'hooks/useForm'
import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroByName } from 'selectors/getHeroByName'
export const SearchScreen = React.memo(({history}) => {

    const location = useLocation()

    const {q = ''} = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
        searchText: q
    })

    const {searchText} = formValues
    // @ts-ignore
    const herosFiltered = useMemo(() => getHeroByName(q), [q])

    const handleSearch = (/** @type {{ preventDefault: () => void; }} */ e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
    }
    

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form</h4>
                </div>
                <form onSubmit={handleSearch}>
                    <input 
                        placeholder="Find your hero"
                        type="text"
                        name="searchText"
                        className="form-control"
                        autoComplete="off"
                        value={searchText}
                        // @ts-ignore
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                    >
                        Search...
                    </button>
                </form>
                <div className="col-7">
                    <h4> Results </h4>
                        {
                            (q === '') &&
                                <div className="alert alert-info">
                                Search a hero
                                </div>
                        }
                                                {
                            (q !== '' && herosFiltered.length === 0) &&
                                <div className="alert alert-danger">
                                    There is no a hero with {q}
                                </div>
                        }
                    <hr />
                        {herosFiltered.map( hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
})
