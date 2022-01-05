interface TypeUser {
    lightThemeActive : boolean
    
    created_at : string
    email      : string
    token      : string
    userName   : string
    userId     : number
}

export const state = () => {
    created_at : ''
    email      : ''
    userName   : ''
    token      : ''
    userId     : 0
    lightThemeActive : false
}

export const mutations = {
    setTheme(state : TypeUser, data : boolean) : void {
        state.lightThemeActive = data
    },

    login(state : TypeUser, data : TypeUser) : void {
        state.created_at = data.created_at
        state.email      = data.email
        state.token      = data.token
        state.userId     = data.userId
        state.userName   = data.userName
    }
}