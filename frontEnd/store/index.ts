interface TypeUser {
    created_at : string
    email      : string
    token      : string
    userId     : number
}

export const state = () => {
    created_at : ''
    email      : ''
    token      : ''
    userId     : 0
}

export const mutations = {
    login(state : TypeUser, data : TypeUser) : void {
        state.created_at = data.created_at
        state.email      = data.email
        state.token      = data.token
        state.userId     = data.userId
    }
}