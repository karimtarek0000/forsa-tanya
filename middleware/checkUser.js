import * as Type from '@/type/index'

export default function (context) {
  context.app.store.dispatch(Type.INIT_AUTH, context.req)
}
