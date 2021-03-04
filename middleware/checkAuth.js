export default function ({ store, app, redirect }) {
  if (store.state.userInfo.status !== null) {
    return redirect(app.localePath('/'))
  } else {
    return true
  }
}
