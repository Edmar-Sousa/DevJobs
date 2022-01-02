export default function ({ store,  redirect } : any) {
    if (!store.state.token)
        return redirect('/login')
}