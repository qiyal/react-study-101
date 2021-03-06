let rerenderEntireTree = () => {
    console.log('State')
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'post 1', likesCount: 0 },
            { id: 2, message: 'post 2', likesCount: 23 },
            { id: 3, message: 'post 3', likesCount: 45 },
            { id: 4, message: 'post 4', likesCount: 89 }
        ],
        newPostText: ''
    },
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Hello'},
            { id: 3, message: 'mmm'}
        ],
        dialogs: [
            { id: 1, name: 'Abay' },
            { id: 2, name: 'Dulat' },
            { id: 3, name: 'Nurbolat' }
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts[state.profilePage.posts.length - 1].id,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.newPostText = ''
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state
