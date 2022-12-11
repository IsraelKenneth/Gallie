import React from 'react'
import Hero from '../components/Hero'

const HomeScreen = () => {
    return (
        <div>
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                title="Your pets deserve the best caring"
                text="Hire dependable pet caretakers and walkers."
                btnText="Travel Plan"
                url="/"
                btnClass="show"
            />

        </div>
    )
}

export default HomeScreen



