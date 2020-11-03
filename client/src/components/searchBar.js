import React from 'react'
import {Navbar, Icon} from 'react-materialize'

export default function SearchBar(){
    return(
        <Navbar 
        menuIcon={<Icon>menu</Icon>}
        search
        />
    )
}