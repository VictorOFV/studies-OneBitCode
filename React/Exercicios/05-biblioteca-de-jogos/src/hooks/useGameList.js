import { useState } from "react"

function useGameList() {
    const [listGames, setListGame] = useState(() => {
        const gameList = localStorage.getItem("gameItems")
        if (!gameList) return []
        return JSON.parse(gameList)
    })

    const addGameList = (name, image) => {

        if (!name || !image) return

        setListGame(state => {
            const id = Math.floor(Math.random() * 1000000)
            const gameList = [...state, { name, image, id }]
            localStorage.setItem("gameItems", JSON.stringify(gameList))
            return gameList
        })
    }

    const removeGameList = (id) => {
        setListGame(state => {
            const gameList = state.filter(game => game.id !== id)
            localStorage.setItem("gameItems", JSON.stringify(gameList))
            return gameList
        })
    }

    return { listGames, addGameList, removeGameList }
}

export default useGameList